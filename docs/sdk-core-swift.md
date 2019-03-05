---
id: SDK-Core-Swift
title: SDK Core Swift
---

A library to preform all core XYO Network functions. This includes creating an origin chain, maintaining an origin chain, negotiations for talking to other nodes, and other basic functionality. The library has heavily abstracted modules so that all operations will work with any crypto, storage, networking, ect.

The XYO protocol for creating origin-blocks is specified in the XYO Yellow Paper. In it, it describes the behavior of how a node on the XYO network should create Bound Witnesses. Note, the behavior is not coupled with any particular technology constraints around transport layers, cryptographic algorithms, or hashing algorithms.

Here is a link to the core object model that contains an index of major/minor values and their respective objects.  

## Getting Started

Clone the repository

```sh 
git clone https://github.com/XYOracleNetwork/sdk-core-swift
```
