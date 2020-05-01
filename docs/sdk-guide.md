---
id: sdk-guide
title: HOW TO USE XYO SDK
sidebar_label: SDK Guide
---

> The XYO Foundation provides this source code available in our efforts to advance the understanding of the XYO Procotol and its possible uses. We continue to maintain this software in the interest of developer education. Usage of this source code is not intended for production.

<div class="alert alert-danger text-center" role="alert">
  <h3>Beta Software</h3>
  This documentation contains preliminary information about an API or technology in development. This information is subject to change, and software implemented according to this documentation should be tested.
</div>

<div class="alert alert-info text-center" role="alert">
  Please note that this guide is only a recommendation for use. If you have a custom integration in mind. 
</div>

## Platforms for these SDKs 

This SDK Guide is specific to tools for mobile development and covering the sentinel and bridge nodes in the XYO protocol. For information on SDK and App Guides for Node, that will be coming soon with an update. 

## Overview 

### Why Integrate the XYO SDK

  - Scan for devices
  - Start Bound Witnesses 
  - Complete Bound Witnesses
  - Grab payload
  - Send Bound Witness with complete payload

## Node and Bound Witnessing

### Using the Node Builder

Integration with the XYO SDKs is built on a Node Builder which has methods for scanning and listening for devices, and bound witness bridging. The node builder is the primary object that should give you all the tooling you need to start bound witnessing between devices. 

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

### Bound Witness Protocol

The XYO SDK was designed to provide the developer with an easy tool to integrate the bound witness protocol with an app solution that wishes to address a use case designed for XYO. 

Bound Witness Method Examples (Starting and Completing a Bound Witness)

Android 

```kotlin
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