---
id: sdk-xyo-android
title: ANDROID SDK
sidebar_label: Android SDK
---

> The XYO Foundation provides this source code available in our efforts to advance the understanding of the XYO Procotol and its possible uses. We continue to maintain this software in the interest of developer education. Usage of this source code is not intended for production. 

[![Download](https://api.bintray.com/packages/xyoraclenetwork/xyo/sdk-xyo-android/images/download.svg) ](https://bintray.com/xyoraclenetwork/xyo/sdk-xyo-android/_latestVersion)

## Install

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

 ## Build an XYO Node

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

### Client

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

### Server

````kotlin
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
````

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

## Android Sample App

Please refer to the [xyo-android-sample](https://github.com/XYOracleNetwork/sdk-xyo-android/blob/master/xyo-android-sample/src/main/java/network/xyo/sdk/sample/MainActivity.kt) for an exmple implementation for bound witness and bridging. 

### Install

To use the sample app to measure functionality

-   Launch [Android Studio](https://developer.android.com/studio/install)
-   Click on `Open an existing Android Studio Project`
-   Navigate to `<path to the sdk-xyo-android>/xyo-android-sample` in your file explorer

Once you open the sample in Android Studio it will go through the build process.

You can then run the app in a simulator of your choice or an Android device. 

This sample app includes client bridging and bound witnessing with a BLE server listener.
