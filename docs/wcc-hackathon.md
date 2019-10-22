---
id: wcc-hackathon
title: WCC Hackathon Guide
---

## The Challenges

- As a reminder, if you haven't registered yet for the hackathon: 
<a href="https://wcc-hackathon.bemyapp.com/?utm_source=twitter&utm_medium=organic" rel="noopener noreferrer" target="_blank"><p>please go here to register</p></a>
- Please stay with the recommended SDKs 

## Resources 

### SDKs

### Android SDK

**Installation**

**How to use**

Build an XYO Node 

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

Client

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

Server

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

## Architecture

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

## Sample App

### Swift SDK

**Installation**

**How to use**

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
// select the network
let network = node.networks["this can be "ble" or "tcpip""] as? XyoBleNetwork

// a flag to tell the client to automatically scan
bleNetwork?.client.scan = true
```

These will allow your app to actively seek devices to bound witness with and bridge from the client to the server.

This will return a byteArray.

There are other properties from the client and server which you can find in the source code as well as a reference guide that we have prepared. 

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

## Sample App

Please refer to the [iOS sample](/Example/iOSExample/XyoExampleViewController.swift) for an exmple implementation for bound witness and bridging. 




