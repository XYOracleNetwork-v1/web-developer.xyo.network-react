---
id: sentinel-sdk
title: Sentinel SDK Kotlin
---

A library for creating a XYO Network Sentinel. Its as easy as:

```kotlin
val myNetwork : XyoNetworkProvider = MySuperCoolNetwok()
val myStorageProvider : XyoStorageProviderInterface = XyoFileStorage(File("/xyo"))
val myHasher : XyoHashProvider = XyoSha256

val mySentinel = XyoBridge(myNetwork, myStorageProvider, myHasher)

mySentinel.originState.addSigner(XyoSha256WithSecp256K()) // add a signer
mySentinel.start() // start the sentinel!

mySentinel.addListener("Sentinel Listener", object : XyoNodeListener {
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
You can add sdk-sentinel-kotlin to your existing app by cloning the project and manually adding it to your build.gradle or by using JitPack:

```
git clone git@github.com:XYOracleNetwork/sdk-sentinel-kotlin.git
```

```gradle
dependencies {
    implementation 'com.github.XYOracleNetwork:sdk-sentinel-kotlin:v0.1.0-beta'
}
```

#### Prerequisites
* JDK 1.8
* Kotlin

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

<br><hr><br>
<p align="center">Made with  ❤️  by [<b>XY - The Persistent Company</b>] (https://xy.company)</p>

