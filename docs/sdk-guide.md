---
id: sdk-guide
title: HOW TO USE XYO SDK
sidebar_label: SDK Guide
---

> The XYO Foundation provides this source code available in our efforts to advance the understanding of the XYO Procotol and its possible uses. We continue to maintain this software in the interest of developer education. Usage of this source code is not intended for production.

<div class="alert alert-danger text-center" role="alert">
  <h3>Beta Software</h3>
  This documentation contains information about an API or technology in development. This information is subject to change, and software implemented according to this documentation should be tested.
</div>

<div class="alert alert-info text-center" role="alert">
  Please note that this guide is only a recommendation for use. If you have a custom integration in mind. 
</div>

## Conceptual Reading

Please take a moment to go over the XYO Protocol concepts before diving in to the SDK.

<a href="https://xyo.network/network/" 
    rel="noopener noreferrer"
    target="_blank"
    >
      Understanding the Protocol
  <i class="p-2 fas fa-external-link-alt"></i>
</a> 

## Platforms for these SDKs 

This SDK Guide is specific to tools for mobile development and covering the sentinel and bridge nodes in the XYO protocol. For information on SDK and App Guides for Node, that will be coming soon with an update. 

As this is an overview of our three mobile SDKs, please refer to the specific guide of choice. 

## Overview 

### What the XYO SDK can do

  - Label and scan unknown and known XYO Enabled devices over bluetooth (BLE)
  - Localized Plug-in-play client/server relationship
  - Start Bound Witnesses
  - Send Bound Witness with complete payload

 
## Naming conventions and Bluetooth Foundations

As Bluetooth is based on a client-server architecture, we name the `central` and `peripheral` as `client` and `server` respectively. This allows developers to think about communicating data across devices.  

For a Bluetooth Overview, please refer to these materials 

<a href="https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/CoreBluetoothOverview/CoreBluetoothOverview.html" 
    rel="noopener noreferrer"
    target="_blank"
    >
      Apple developer Bluetooth Overview
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

## Device Discoverability 

## Node and Bound Witnessing

### Using the Node Builder

Integration with the XYO SDKs is built on a Node Builder which has methods for scanning and listening for devices, and bound witness bridging. The node builder is the primary object that should give you all the tooling you need to start bound witnessing between devices. 

The node builder has methods that allow the client to identify which heurtistics to scan for, bridging, and bound witnessing. 

The node builder at its simplest is as follows: 

Android

```kotlin
  val node = XyoNodeBuilder().build(context)
```

iOS

```swift
  let builder = XyoNodeBuilder().setBoundWitnessDelegate(self)

  let node = try builder.build()

```

Flutter

```dart

final builder = XyoNodeBuilder();

```

As you can see across these differing platforms, calling the `build()` function starts up a node. What you don't see is what is also configured for you: 

  - `storage`
  - `hashingProvider`
  - `blockRepository`
  - `stateRepository`
  - `bridgeQueueRepository`
  - `procedureCatalog`
  - `relayNode`
  - `networks`

It's not entirely important to know exactly what all of the settings are just yet, we do want to key on `networks` especially the `ble` network functionality. Here is one thing to keep in mind when the network is set up, if for any reason there is no `procedureCatalog` or `relayNode`, you will not be able to set the `network`.

If you are wondering what a `procedureCatalog` is, it sets what the node can do, which includes transacting origin chains. Origin chains are collections of bound witnesses, and definitely want that since it is the core of our protocol. More on that below. 

One more important configuration to cover is the `relayNode`. This object contains the `blockRepository`, `stateRepository`, `bridgeQueueRepository`, and `hashingProvider`. That is why the order of configuration is as listed above. In order to get the `relayNode` going we need to have its parameters. As you dive deeper into integration of the SDK, you would need to go into detail on how to get the `relayNode` and its contents, this is available in the platform guide of your choice. 

### Network Settings

With Swift, Android, or Flutter you can use a type check to bring in the `networks` to access the settings:

Swift
```swift
  xyoNode?.networks["ble"] as? XyoBleNetwork
```

Kotlin
```kotlin
  (node.networks["ble"] as? XyoBleNetwork)?
```

The `networks` setting gives you access the `client` or `server` from either `ble` or `tcpip`, since we are utilizing mobile in this guide, we will stay with `ble`.

This is what a `client` can do: 
  - `scan` - scan for other devices with XYO Protocol capabilities 
  - `autoBoundWitness` -   automatically bound witnesses with other devices
  - `autoBridge` -   automatically bridges the bound witness


This is what a `server` can do: 

  - `listen` -   listens for devices that are scanning for nodes 
  - `autoBridge` - automatically bridges the bound witness

### Bound Witness Protocol

The XYO SDK was designed to provide the developer with an easy tool to integrate the bound witness protocol with an app solution that wishes to address a use case designed for XYO. 

You will most likely interact with Bound Witnessess through an a stream of completed bound witnesses. Adding heuristics and accessing data from the stream is an important key to integrating the SDK. 

When initializing the node you have access to the node builder `networks` setting. We have a setting called `autoBoundWitness`

This setting must also meet certain conditions before it will actually complete the bound witness. The rssi, bridge (smartphone acting as bridge or BridgeX), and sentinels (smartphone acting as sentinel or SentinelX) must pass conditional statements. Once they do then the `autoBoundWitness` will attempt to complete a bound witness with a device. 

You can set the `autoBoundWitness` with a `boolean`:

`network.client.autoBoundWitness = true`

Bound Witness View Method Examples 

For your view you want to look for methods that indicate the `start`, `completed`, and/or `success`. We have worked to make it easy for you to initiate the bound witness and bridging process through the client `network` settings, so you would only have to tap into the `XyoBoundWitnessTarget` listener to grab the information from these events to display in the app UI. 

Android 

```kotlin
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        (XyoSdk.nodes[0].networks["ble"] as? XyoBleNetwork)?.let { network ->

            network.client.listeners["sample"] = object : XyoBoundWitnessTarget.Listener() {
                override fun boundWitnessStarted(source: Any?, target: XyoBoundWitnessTarget) {
                    super.boundWitnessStarted(source, target)
                    addStatus("Bound Witness Started [${source?.javaClass?.name}]")
                }

                override fun boundWitnessCompleted(source: Any?, target: XyoBoundWitnessTarget, boundWitness: XyoBoundWitness?, error:String?) {
                    super.boundWitnessCompleted(source, target, boundWitness, error)
                    val index = target.relayNode.originState.index.valueCopy.toList().toString()
                    if (error == null) {
                        addStatus("Bound Witness Completed $index [${boundWitness?.completed}]")
                    } else {
                        addStatus("Bound Witness Failed [$error]")
                    }
                    addStatus("- - - - - -")
                }
            }

            ui {
                text_ble_client.text = ""
                publicKey.text = network.client.publicKey
            }
        }
    }

```

iOS 

```swift
  class SomeViewController: UIViewController, BoundWitnessDelegate {
    func boundWitness(started withDeviceId: String) {
      print("Started BW with (withDeviceId)")
    }

    func boundWitness(completed withDeviceId: String, withBoundWitness: XyoBoundWitness?) {
      print("Completed BW with (withDeviceId)")
    }
  }
```

Flutter, as included peferably in the `Flexible` Widget.

```dart
  child: StreamBuilder<List<DeviceBoundWitness>>(
    stream: _xyoNode.getClient('ble').onBoundWitnessSuccess(),
    builder: (context, snapshot) {
      final bws = snapshot.data;
      if (bws == null) return Container();
      final count = bws.length;
```

Another note on views, you can utilize the same listener on a client or server UI view. 

#### Adding Heuristics 

To take full advantage of the BLE devices you are using, you can add heuristics to a bound witness as supporting data. Adding a heuristic to the bound witness can be done using an `XyoHeuristicGetter` to grab what your device can provide to add to the `relayNode` for bound witness supporting data.

`addHeuristic( String: "name of heuristic" or key: "name of heuristic", object: XyoHeuristicGetter or getter: getterFunction)`

Kotlin

```kotlin
      (node.networks["ble"] as? XyoBleNetwork)?.client?.relayNode?.addHeuristic(
          "GPS",
          object: XyoHeuristicGetter {
              override fun getHeuristic(): XyoObjectStructure? {
                  val locationManager = applicationContext.getSystemService(Context.LOCATION_SERVICE) as LocationManager

                  if (ContextCompat.checkSelfPermission(applicationContext, android.Manifest.permission.ACCESS_FINE_LOCATION)
                      == PackageManager.PERMISSION_GRANTED) {
                      val lastLocation = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER)

                      if (lastLocation != null) {
                          val encodedLat = ByteBuffer.allocate(8).putDouble(lastLocation.latitude).array()
                          val encodedLng = ByteBuffer.allocate(8).putDouble(lastLocation.longitude).array()
                          val lat = XyoObjectStructure.newInstance(XyoSchemas.LAT, encodedLat)
                          val lng = XyoObjectStructure.newInstance(XyoSchemas.LNG, encodedLng)

                          return XyoIterableStructure.createUntypedIterableObject(XyoSchemas.GPS, arrayOf(lat, lng))
                      }
                  }
                  return null
              }
          }
      )
```

Swift

```swift
    relayNode.addHeuristic(key: "GPS", getter: self)
    ...
    func getHeuristic() -> XyoObjectStructure? {
        guard let lat: Double = locationManager.location?.coordinate.latitude else {
            return nil
        }
        
        guard let lng: Double = locationManager.location?.coordinate.longitude else {
            return nil
        }
        
        doLocation.text = "\(lat), \(lng)"
        
        let encodedLat = XyoObjectStructure.newInstance(schema: XyoSchemas.LAT, bytes: XyoBuffer(data: anyToBytes(lat)))
        let encodedLng = XyoObjectStructure.newInstance(schema: XyoSchemas.LNG, bytes: XyoBuffer(data: anyToBytes(lng)))
        return XyoIterableStructure.createUntypedIterableObject(schema: XyoSchemas.GPS, values: [encodedLat, encodedLng])
        
    }

```

## Sample Apps 

### For Android, iOS, Flutter

XYO SDKs in Android, iOS, and Flutter include sample apps. These apps use the SDK at it's most simple, and can serve as a guide in addition to this documentation. The sample app includes configuration options for simple node builds up to specific methods for client server and BLE options. 

You can also run these sample apps using the native IDE of the platform you are using (Android Studio, Xcode). **For Flutter** you should use VS Code, which is well integrated for Flutter use. 

Readme guides are also available in each SDK, and derive their examples from the sample apps.

## Primary Integration Points

### Devices

Device scanning (client) and listening (server) are key to initiating Bound Witnesses. Keep in mind that the client to server association is not directly associated with the sentinel/bridge concept. This is specific to how we want devices to listen for and send bound witness blocks. 

We need information from devices in order to get key heuristics that support bound witness strength like RSSI (Received Signal Strength Indicator), and additional data such as GPS, temperature, and manufacturer data. These heuristics can confirm bound witness participants without being dependent on each other. 

### BLE

Mobile operating systems support Bluetooth Low Energy (BLE) which is also supported by various IoT devices. BLE is core to the XYO Bound Witness protocol to access a multitude of data available from IoT sensors such as beacons, temperature/pressure sensors, and applications in healthcare and security. 

When using the XYO SDK and testing for scanning and bound witnessing, the user needs to ensure that the correct bluetooth settings and permissions are enabled on device. This adds accuracy to the testing of the integration and will help with debugging. 

### Bound Witness Packets

Once we get a bound witness, we have to get the heuristics utilizing the `XyoObjectStructure` and `XyoIterableStructure` to collect the heuristics. We can use the client to add heurtistics that we want and then once a bound witness is created we can use the heuristics we added in the payload from the bound witness. 

With the payload set, we can now send this packet to an archivist. Your solution should account for how to store these bound witnesses for querying and for application functionality. You may also want your solution to initiate an event when the bound witness is complete with payload. 

## When to use Core and Base SDKs

Although we advise against using these SDKs to use with production ready apps, we recognize that there is a point where the developer would want to view the object model of the node and bound witness. We do recommend that you review these as further reading to help in understanding the architecture of our mobile first solution using BLE for location data certainty. 