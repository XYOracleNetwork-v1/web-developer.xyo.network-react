---
id: wcc-hackathon
title: WCC Hackathon Guide
---

<div class="alert alert-info text-center" role="alert">
    <h2>Hackathon Challenges<h2>
</div>

- Build "unlock on bound witness" app for software and/or hardware.  The app would decrypt a file or open a locked box upon bound witness with a whitelisted address.

- Payment on delivery wallet: Install sentinel SDKs in a new mobile wallet app that transfers a predetermined amount of the XYO token upon first bound witness from a sender to recipient address.

- Build a temperature Oracle: Install the sentinel SDK on Raspberry Pi or any IoT device with a temperature sensor. Bridge and display temperature data on a new temperature XYO diviner.

- Create a Bound Witness Notification Plugin: Create a plugin for any diviner that enables sending a message or email upon bound witness with interested parties.

- Build an EOS diviner: clone XYO's ethereum diviner to work on the EOS blockchain.

- Build a "supply chain diviner" that visualizes the bound witnesses of a sentinel along a route from source to destination sentinels.


> <div> <p>As a reminder, if you haven't registered yet for the hackathon, <a href="https://wcc-hackathon.bemyapp.com/?utm_source=twitter&utm_medium=organic" rel="noopener noreferrer" target="_blank">please go here to register.</p></a> </div>

<div class="alert alert-info text-center" role="alert">
    <h3>Please use the recommended SDKs<h3>
</div>


## Resources 

<h3><a href="https://github.com/XYOracleNetwork/sdk-xyo-android" rel="noreferrer noopener" target="_blank">SDK-XYO-ANDROID</a></h3>
<h3><a href="https://github.com/XYOracleNetwork/sdk-xyo-swift" rel="noreferrer noopener" target="_blank">SDK-XYO-SWIFT</a></h3>

## SDK Guides

> Please note that our development team will be on site during the hackathon in a limited capacity to assist. 

### Android SDK

**Include in your gradle**

```gradle
    compile 'network.xyo:sdk-xyo-android:3.0.117'
```

**Include using Maven**

```maven
    <dependency>
    <groupId>network.xyo</groupId>
    <artifactId>sdk-xyo-android</artifactId>
    <version>3.0.115</version>
    <type>pom</type>
    </dependency>
```

**How to use**

One line is all it takes to start your node 

```kotlin
    val node = XyoNodeBuilder().build(context)
```

For a more complex test, create a listener callback.

```kotlin
  // callback for node events
          val listener = object : XyoBoundWitnessTarget.Listener() {
              override fun boundWitnessCompleted(boundWitness: XyoBoundWitness?, error: String?) {
                  super.boundWitnessCompleted(boundWitness, error)

                  println("New bound witness!")
              }

              override fun boundWitnessStarted() {
                  super.boundWitnessStarted()

                  println("Bound witness started!")

              }
          }       
```

You can also configure to your specific roles.

```kotlin
          // build and configure the node
          val builder = XyoNodeBuilder()
          builder.setListener(listener)

          // create the node
          val context = getContextSomehow()
          val node = builder.build(context)

          // configure tcp
          val tcpNetwork = node.networks["tcpip"] ?: return
          tcpNetwork.client.autoBridge = true
          tcpNetwork.client.autoBoundWitness = true
          tcpNetwork.client.scan = false
          tcpNetwork.client.knownBridges = ["public key of bridge", "public key of bridge"]

          // configure ble
          val bleNetwork = node.networks["ble"] ?: return
          bleNetwork.client.autoBridge = true
          bleNetwork.client.autoBoundWitness = true
          bleNetwork.client.scan = false
```

You can also use a heuristic getter, here is an example to get GPS.

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

**Build an XYO Node** 

```kotlin
    val builder = XYONodeBuilder()
```

After calling the node builder, you can start the build

```kotlin
    val node = XyoNode()

    node = builder.build(this)
```

Once you have a build, you have access to properties to help you shape your node and what you want out of it. 

```kotlin
    node.networks["this can be "ble" or "tcpip""]
```

After choosing the network, you have these properties available

**Client**

```kotlin
    // select the network
    val network = node.networks["network"]

    // a flag to tell the client to automatically bridge
    network.client.autoBridge

    // a flag to tell the client to automatically bound witness 
    network.client.autoBoundWitness

    // a flag to tell the client to automatically scan
    network.client.scan
```

**Server**

```kotlin
    // select the network 
    val network = node.networks["network"]

    // a flag to tell the server to automatically bridge
    network.server.autoBridge

    // a flag to tell the client to automatically listen for bridging
    network.server.listen
    ```

    These will allow your app to actively seek devices to bound witness with and bridge from the client to the server.

    You can also get payload data from the bound witness 

```kotlin
    node.listener.getPayloadData(target: XyoBoundWitnessTarget)
```

This will return a byteArray.

There are other properties from the client and server which you can find in the source code as well as a reference guide that we have prepared. 

**Architecture**

This sdk is built on a client/server to ensure ease of understanding during development. (The client takes on "central" role, and the server the "peripheral"). This allows us to define roles with simplicity. 

> SDK-XYO-ANDROID TREE

-   XyoSDK
    -   mutableList `<XyoNode>` 

        -   `XyoNode(storage, networks)`
            -   `listeners`
                -   `boundWitnessTarget`
        -   XyoClient, XyoServer

            -   Ble

                -   `context`
                -   `relayNode`
                -   `procedureCatalog`
                -   `autoBridge`
                -   `acceptBridging`
                -   `autoBoundWitness`
                -   `scan`

            -   TcpIp
                -   `relayNode`
                -   `procedureCatalog`
                -   `autoBridge`
                -   `acceptBridging`
                -   `autoBoundWitness`

### Android Sample App

Please refer to the [xyo-android-sample](https://github.com/XYOracleNetwork/sdk-xyo-android/blob/master/xyo-android-sample/src/main/java/network/xyo/sdk/sample/MainActivity.kt) for an exmple implementation for bound witness and bridging. 

**Install**

To use the sample app to measure functionality

-   Launch [Android Studio](https://developer.android.com/studio/install)
-   Click on `Open an existing Android Studio Project`
-   Navigate to `<path to the sdk-xyo-android>/xyo-android-sample` in your file explorer

Once you open the sample in Android Studio it will go through the build process.

You can then run the app in a simulator of your choice or an Android device. 

This sample app includes client bridging and bound witnessing with a BLE server listener.


### Swift SDK

**Installation**

**How to use**

One line is all it takes to start your node 

```swift
let builder = XyoNodeBuilder().setBoundWitnessDelegate(self)
```

You can also configure to your specific roles.

Build an XYO Node 

```swift
let builder = XYONodeBuilder()
```

After calling the node builder, you can start the build

```swift
let node = try builder.build()
```

Once you have a build, you have access to properties to help you shape your node and what you want out of it. 

Client

```swift
    // select the network - examples
    let bleNetwork = node.networks["ble"] as? XyoBleNetwork
    let tcpipNetwork = node.networks["tcpip"] as? XyoTcpipNetwork

    // a flag to tell the client to automatically scan
    bleNetwork?.client.scan = true

    // a flag to tell the server to listen
    bleNetwork?.server.listen = true
```

You can set bridges for the tcp/ip client for bridging. 

```swift
    // set local bridges for the tcpip client
    tcpipNetwork?.client.localBridges = ["public key of bridge", "public key of other bridge"]
```

You can set the bound witness delegate

```swift
    func boundWitness(started withDeviceId: String) {
        print("Started BW with (withDeviceId)")
    }

    func boundWitness(completed withDeviceId: String, withBoundWitness: XyoBoundWitness?) {
        print("Completed BW with (withDeviceId)")
    }
```

You can also get payload data from bound witness. 

```swift
    class SomeViewController: UIViewController, BoundWitnessDelegate {
        ...
        func getPayloadData() {
            return [UInt8]
        }
    }
```

This will return a byteArray.

You can also try particular heuristic resolvers with the data you get, whether they are pre-made GPS, RSSI, or Time. You can also resolve heuristic data to a custom human readable form.

**Time example**

Bring in the time resolver

```swift
func resolveTimePayload() {
    let resolver = TimeResolver()
    XyoHumanHeuristics.resolvers[XyoSchemas.UNIX_TIME.id] = resolver
    let key = resolver.getHumanKey(partyIndex: 1)
    return XyoHumanHeuristics.getHumanHeuristics(boundWitness: self).index(forKey: key).debugDescription
}
```

Bring in the RSSI resolver

```swift
    func resolveRssiPayload() {
        let resolver = RssiResolver()
        XyoHumanHeuristics.resolvers[XyoSchemas.RSSI.id] = resolver
        let key = resolver.getHumanKey(partyIndex: 1)
        return XyoHumanHeuristics.getHumanHeuristics(boundWitness: self).index(forKey: key).debugDescription
    }
```

**Architecture**

This sdk is built on a client/server to ensure ease of understanding during development. (The client takes on "central" role, and the server the "peripheral"). This allows us to define roles with simplicity. 

> SDK-XYO-swift TREE

-   XyoSDK

    -   mutableList `<XyoNode>` 

        -   `XyoNode(storage, networks)`
            -   `listeners`
                -   `boundWitnessTarget`
        -   XyoClient, XyoServer

            -   Ble

                -   `context`
                -   `relayNode`
                -   `procedureCatalog`
                -   `autoBridge`
                -   `acceptBridging`
                -   `autoBoundWitness`
                -   `scan`

            -   TcpIp
                -   `relayNode`
                -   `procedureCatalog`
                -   `autoBridge`
                -   `acceptBridging`
                -   `autoBoundWitness`

### Swift Sample App

Please refer to the [iOS sample](/Example/iOSExample/XyoExampleViewController.swift) for an exmple implementation for bound witness and bridging. 

**Install**

To use the sample app to measure functionality

-   Launch [Xcode](https://developer.apple.com/xcode/)
-   Click on `Open an existing swift Studio Project`
-   Navigate to `<path to the sdk-xyo-swift>/Example/` in your file explorer
-   Open the project workspace `open XyoSdkExample.xcworkspace`

This sample app includes client bridging and bound witnessing with a BLE server listener. 





