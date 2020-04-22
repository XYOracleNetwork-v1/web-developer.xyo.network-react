---
id: sdk-xyo-swift
title: SWIFT SDK
sidebar_label: Swift SDK
---

> The XYO Foundation provides this source code available in our efforts to advance the understanding of the XYO Procotol and its possible uses. We continue to maintain this software in the interest of developer education. Usage of this source code is not intended for production. 

[![](https://img.shields.io/cocoapods/v/sdk-xyo-swift.svg?style=flat)](https://cocoapods.org/pods/sdk-xyo-swift)

## Install

### Include in your Podfile

```Podfile
    source '<https://github.com/CocoaPods/Specs.git>'
    platform :ios, '11.0'
    use_frameworks!

    target 'YourAppName' do
        pod 'sdk-xyo-swift', '1.0.17'
    end
```

## Usage

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

### Client

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

You can also set a string payload data on any node that gets passed in a bound witness

```swift
    class SomeViewController: UIViewController, BoundWitnessDelegate {
        ...
        if var bleClient = (xyoNode?.networks["ble"] as? XyoBleNetwork)?.client {
          bleClient.pollingInterval = 10
          bleClient.stringHeuristic = "Hi I'm Client"
        }
        
        if var bleServer = (xyoNode?.networks["ble"] as? XyoBleNetwork)?.server {
          bleServer.stringHeuristic = "Yo I'm Server"
        }
    }
```

The following extensions can be used to pull data from a bound witness.  Party index 0 is the server, party 1 is the client.

**Payload parsing**

Given the above example of passing strings, you can resolve those strings for client/server using:

```swift
    if let resolveStr = withBoundWitness?.resolveString(forParty: 0) {
      dataStr += "Server: " + resolveStr
    }
    if let resolveStr1 = withBoundWitness?.resolveString(forParty: 1) {
      dataStr += " Client: " + resolveStr1
    }
```

You can get all heuristics in a dictionary for a given bound witness

```swift
 extension XyoBoundWitness {
    func allHeuristics() : [String:String] {
      return XyoHumanHeuristics.getAllHeuristics(self)
    }
 }
```

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

<h3><a href="https://github.com/XYOracleNetwork/sdk-xyo-swift/blob/master/Source/Heuristics/GpsResolver.swift" rel="noreferrer noopener" target="_blank">GPS Resolver
</a></h3>

<h3><a href="https://github.com/XYOracleNetwork/sdk-xyo-swift/blob/master/Source/Heuristics/RssiResolver.swift" rel="noreferrer noopener" target="_blank">RSSI Resolver</a></h3>

<h3><a href="https://github.com/XYOracleNetwork/sdk-xyo-swift/blob/master/Source/Heuristics/TimeResolver.swift" rel="noreferrer noopener" target="_blank">Time Resolver</a></h3>

<h3><a href="https://github.com/XYOracleNetwork/sdk-xyo-swift/blob/master/Source/Heuristics/StringResolver.swift" rel="noreferrer noopener" target="_blank">String Resolver</a></h3>

## Architecture

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

## Swift Sample App

Please refer to the [iOS sample](/Example/iOSExample/XyoExampleViewController.swift) for an exmple implementation for bound witness and bridging. 

### Install

To use the sample app to measure functionality

-   Launch [Xcode](https://developer.apple.com/xcode/)
-   Click on `Open an existing swift Studio Project`
-   Navigate to `<path to the sdk-xyo-swift>/Example/` in your file explorer
-   Open the project workspace `open XyoSdkExample.xcworkspace`

This sample app includes client bridging and bound witnessing with a BLE server listener. 
