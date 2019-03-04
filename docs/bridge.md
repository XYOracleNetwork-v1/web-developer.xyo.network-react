---
id: bridge
title: SDK Bridge Kotlin
---

A library for creating a XYO Network Bridge. Its as easy as:

```kotlin
val myNetworkToCollect : XyoNetworkProvider = MySuperCoolNetwok()
val myNetworkToSend : XyoNetworkProvider = XyoTcpNetwork(8080)
val myStorageProvider : XyoStorageProviderInterface = XyoFileStorage(File("/xyo"))
val myHasher : XyoHashProvider = XyoSha256

val myBridge = XyoBridge(myNetworkToCollect, myNetworkToSend, myStorageProvider, myHasher)

myBridge.originState.addSigner(XyoSha256WithSecp256K()) // add a signer
myBridge.start() // start the bridge!

myBridge.addListener("Bridge Listener", object : XyoNodeListener {
    override fun onBoundWitnessEndFailure(error: Exception?) {
        /* an error occored */
    }

    override fun onBoundWitnessDiscovered(boundWitness: XyoBoundWitness) {
        /* discovered a new bound witness (originBlock) */
    }

    override fun onBoundWitnessStart() {
        /* started creating a bound witness with another party */
    }
})
```


## Installing
You can add sdk-bridge-kotlin to your existing app by cloning the project and manually adding it to your build.gradle or by using JitPack:

```
git clone git@github.com:XYOracleNetwork/sdk-bridge-kotlin.git
```

```gradle
dependencies {
    implementation 'com.github.XYOracleNetwork:sdk-bridge-kotlin:v0.1.0-beta'
}
```

#### Prerequisites
* JDK 1.8
* Kotlin

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

<br><hr><br>
<p align="center">Made with  ❤️  by [<b>XY - The Persistent Company</b>] (https://xy.company)</p>