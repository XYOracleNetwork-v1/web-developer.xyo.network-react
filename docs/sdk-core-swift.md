---
id: SDK-Core-Swift
title: SWIFT CORE SDK
sidebar_label: Swift Core SDK
---

> The XYO Foundation provides this source code available in our efforts to advance the understanding of the XYO Procotol and its possible uses. We continue to maintain this software in the interest of developer education. Usage of this source code is not intended for production. 

<div class="alert alert-danger text-center" role="alert">
  <h3>Beta Software</h3>
  This documentation contains preliminary information about an API or technology in development. This information is subject to change, and software implemented according to this documentation should be tested.
</div>

<div class="alert alert-info text-center" role="alert">
A library to perform all core XYO Network functions.
This includes creating an origin chain, maintaining an origin chain, negotiations for talking to other nodes, and other basic functionality.
The library has heavily abstracted modules so that all operations will work with any crypto, storage, networking, etc.

The XYO protocol for creating origin-blocks is specified in the [XYO Yellow Paper](https://docs.xyo.network/XYO-Yellow-Paper.pdf). It describes the behavior of how a node on the XYO network should create Bound Witnesses. Note, the behavior is not coupled with any particular technology constraints around transport layers, cryptographic algorithms, or hashing algorithms.

The guide below is from a sample application to demonstrate XYO Core Swift integration.

</div>

[![](https://img.shields.io/cocoapods/v/sdk-core-swift.svg?style=flat)](https://cocoapods.org/pods/sdk-core-swift)

## Getting Started

If you are getting started with Swift and iOS development you should be able to use this guide, although this guide is recommended for those familiar with iOS development and the Swift language. This is a simplified guide to integrate the XYO Core Swift SDK.

<a href="https://github.com/XYOracleNetwork/sdk-core-swift/blob/master/Sample/StarterCoreSwiftXYO/ViewController.swift" 
    rel="noopener noreferrer"
    target="_blank"
    >
      For the source code from this guide refer to this link
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

<a href="https://github.com/XYOracleNetwork/sdk-core-swift" 
    rel="noopener noreferrer"
    target="_blank"
    >
      For the complete XYO Core Swift SDK on GitHub refer to this link
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

## Table of Contents

-   [App Structure](#app-structure)
-   [Using Xcode](#using-xcode)
-   [Create the Project](#create-the-project)
-   [Project Design](#project-design)
-   [Add Location](#add-location)
-   [Conclusion](#conclusion)

## App Structure

-   Swift with Xcode and Cocoapods

[Click here for an introduction to integrate a new Xcode project with CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html)

Versions used in this sample

-   XCode `10.3`
-   Swift `5.0.1`

It is important to set up this project with CocoaPods so you can use dependencies to build the app

## Using Xcode

### Virtual Device Emulator

When creating the configuration for the emulator, we recommend using a mid-range device definition for a wider range of coverage for iOS devices. (Such as a iPhone XR) feel free to use whatever example iOS device you would like. 

This Sample App Example is best for mobile devices since bound witnessing is optimal on mobile. Integration into your application should be based on a mobile app architecture. 

## Create the Project

### Install Pod and start up project

For the podfile, we will go ahead and use the latest `sdk-core-swift` 

```Pod
target 'MyApp' do 
  pod 'sdk-core-swift', '3.0'
end
```

Then run a `pod install` from your terminal 

Once the pod installation is complete we open the workspace

```bash
open MyApp.xcworkspace
```

You should now see your Xcode workspace

All of our work will be in the `ViewController.swift` file

## Start with Creating a Bound Witness

For this integration guide we will do our work in the view controller. 

[Go here for the source code of the complete project](https://github.com/XYOracleNetwork/sdk-core-swift/blob/master/Sample/StarterCoreSwiftXYO/ViewController.swift)

We want to start by importing our `core_swift` and `objectmodel` SDKs

```swift
import sdk_core_swift
import sdk_objectmodel_swift
```

We should see the following in our `ViewController.swift`

```swift
class ViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
  }
}
```

### Set up the values needed for origin chain

In order for us to do a bound witness we need some objects and interfaces

```swift
class ViewController: UIViewController {
  private let hasher = XyoSha256()
  private let store = XyoInMemoryStorage()
  private lazy var state = XyoStorageOriginStateRepository(storage: store)
  private lazy var blocks = XyoStorageProviderOriginBlockRepository(storageProvider: store, hasher: hasher)
  private lazy var conf = XyoRepositoryConfiguration(originState: state, originBlock: blocks)
  private lazy var node = XyoOriginChainCreator(hasher: hasher, repositoryConfiguration: conf)
}
```

### Set up the listener

Let us add an extension to our `ViewController` to get the node listener that we'll need to display the hash representation of our bound witness 

```swift
extension ViewController : XyoNodeListener {
  // the library will bring some of these functions in, but we won't need most of them
  func onBoundWitnessStart() {}
  func onBoundWitnessEndFailure() {}
  func onBoundWitnessDiscovered(boundWitness: XyoBoundWitness) {} 

// this is where we bring in and display our bound witness
  func onBoundWitnessEndSuccess(boundWitness: XyoBoundWitness) {
    let hash = (try? boundWitness.getHash(hasher: hasher))?.getBuffer().toByteArray().toHexString()

  }
}
```

## Project Design

Before we can actually display the hash we need to set up the UI

### Set up the UI

Let's create the bound witness text to display, we will use the `UILabel` view class

```swift
private lazy var doBoundWitness: UILabel = {
  let text = UILabel()

  text.textColor = UIColor.black
  text.font = UIFont.systemFont(ofSize: 20, weight: .black)
  text.numberOfLines = 0

  return text
}()
```

We can now set the text in our listener which will be the `hash` 

```swift
func onBoundWitnessEndSuccess(boundWitness: XyoBoundWitness) {
  let hash = (try? boundWitness.getHash(hasher: hasher))?.getBuffer().toByteArray().toHexString()

  doBoundWitness.text = hash
}
```

In order for us to call the listener and get our hash, we need to create a button, we will use the `UIButton` class

```swift
private lazy var doBoundWitnessButton: UIButton = {
  let button = UIButton(type: UIButton.ButtonType.roundedRect)

  button.setTitle("Create Origin", for: UIControl.State.normal)

  return button
}()
```

Add logic to the button

```swift
private func layoutButton () {
    view.addSubview(doBoundWitnessButton)
    doBoundWitnessButton.translatesAutoresizingMaskIntoConstraints = false
    doBoundWitnessButton.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
    doBoundWitnessButton.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true

    let click = UITapGestureRecognizer(target: self, action: #selector(onButtonClick(_:)))
    doBoundWitnessButton.addGestureRecognizer(click)
}
```

Add interactivity to the button

```swift
@objc func onButtonClick (_ sender: UITapGestureRecognizer) {
  // error check without crashing
    try? node.selfSignOriginChain()
}
```

Now we have a button to activate the listener and display a bound witness hash on our primary view. 

### Set up the rest of the view

Before setting up the entire layout, let's create a title

```swift
private lazy var appTitle: UILabel = {
  let text = UILabel()

  text.textColor = UIColor.purple

  text.font = UIFont.systemFont(ofSize: 20, weight: .black)

  text.numberOfLines = 0

  return text
}()
```

We should create a layout where we can have our `viewDidLoad()` function call for what text and interactivity we want on this simple app

```swift
private func layout() {
  // bring in a title 
  appTitle.text = "Sample XYO App"

  view.addSubView(appTitle)
  view.addSubView(doBoundWitness)

  appTitle.translatesAutoresizingMaskIntoConstraints = false
  appTitle.topAnchor.constraint(equalTo: view.topAnchor, constant: 150).isActive = true
  appTitle.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true

  doBoundWitness.translatesAutoresizingMaskIntoConstraints = false
  doBoundWitness.bottomAnchor.constraint(equalTo: doBoundWitnessButton.topAnchor, constant: -80).isActive = true

}
```

Now we can include the layouts in our primary view 

```swift
override func viewDidLoad() {
  super.viewDidLoad()
  node.addListener(key: "main", listener: self)
  layout()
  layoutButton()
}
```

Once you update the `viewDidLoad()`, your code should currently look like this

```swift
import UIKit
import sdk_core_swift
import sdk_objectmodel_swift

class ViewController: UIViewController {
    private let locationManager = CLLocationManager()
    private let hasher = XyoSha256()
    private let store = XyoInMemoryStorage()
    private lazy var state = XyoStorageOriginStateRepository(storage: store)
    private lazy var blocks = XyoStorageProviderOriginBlockRepository(storageProvider: store, hasher: hasher)
    private lazy var conf = XyoRepositoryConfiguration(originState: state, originBlock: blocks)
    private lazy var node = XyoOriginChainCreator(hasher: hasher, repositoryConfiguration: conf)

    private lazy var doBoundWitnessButton: UIButton = {
        let button = UIButton(type: UIButton.ButtonType.roundedRect)
        
        button.setTitle("Create Origin", for: UIControl.State.normal)
        
        return button
    }()

    private lazy var doBoundWitness: UILabel = {
        let text = UILabel()
        
        text.textColor = UIColor.black
        
        text.font = UIFont.systemFont(ofSize: 20, weight: .black)
        
        text.numberOfLines = 0
        
        return text
    }()

    private lazy var appTitle: UILabel = {
        let text = UILabel()
        
        text.textColor = UIColor.purple
        
        text.font = UIFont.systemFont(ofSize: 20, weight: .black)
        
        text.numberOfLines = 0
        
        return text
        
    }()

    override func viewDidLoad() {
        super.viewDidLoad() 
        node.addListener(key: "main", listener: self)
        layout()
        layoutButton()
    }

    private func layout () {
        appTitle.text = "Sample XYO App"
        
        view.addSubview(appTitle)
        view.addSubview(doBoundWitness)
        
        appTitle.translatesAutoresizingMaskIntoConstraints = false
        appTitle.topAnchor.constraint(equalTo: view.topAnchor, constant: 150).isActive = true
        appTitle.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        
        doBoundWitness.translatesAutoresizingMaskIntoConstraints = false
                
        doBoundWitness.bottomAnchor.constraint(equalTo: doBoundWitnessButton.topAnchor, constant: -80).isActive = true
        doBoundWitness.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        doBoundWitness.widthAnchor.constraint(equalTo: view.widthAnchor, constant: -80).isActive = true
    }

    private func layoutButton () {
        view.addSubview(doBoundWitnessButton)
        doBoundWitnessButton.translatesAutoresizingMaskIntoConstraints = false
        doBoundWitnessButton.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        doBoundWitnessButton.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true

        let click = UITapGestureRecognizer(target: self, action: #selector(onButtonClick(_:)))
        doBoundWitnessButton.addGestureRecognizer(click)
    }

    @objc func onButtonClick (_ sender: UITapGestureRecognizer) {

        try? node.selfSignOriginChain()
    }

}

  extension ViewController : XyoNodeListener {
      // not needed
      func onBoundWitnessStart() {}
      func onBoundWitnessEndFailure() {}
      func onBoundWitnessDiscovered(boundWitness: XyoBoundWitness) {}

      func onBoundWitnessEndSuccess(boundWitness: XyoBoundWitness) {
          let hash = (try? boundWitness.getHash(hasher: hasher))?.getBuffer().toByteArray().toHexString()
          doBoundWitness.text = hash
      }

  }
}
```

### Run the project

Go ahead and save the project and run the build by clicking on the play button on the top left hand side of the Xcode IDE

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/ios_layout.webp">
    <img alt="location layout" src="/docs/assets/ios_layout.png" width="280px" height="600px">
  </picture>
</h1>

You should now see the `Create Origin` button and when you tap it you should see a response on the screen with the hash value of the newly created bound witness chain. You can tap again for another bound witness chain. 

<h1 align="left">
  <img alt="app with gps and origin hash" src="/docs/assets/ios_initial_layout.gif" width="280px" height="600px">
</h1>

## Add Location

Let's keep going. We want to add a heuristic and see what heuristic we are adding. We'll add a GPS location to our bound witness chain.

Let's start by briging in the Swift location manager in the first line of the `ViewController` class.

```swift
private let locationManager = CLLocationManager()
```

We should create a new text field to be ready for the location information that we want the user to see. That way the user knows what the heuristic we are adding to the origin chain. 

```swift
    private lazy var doLocation: UILabel = {
        let text = UILabel()
        
        text.textColor = UIColor.red
        
        text.font = UIFont.systemFont(ofSize: 13, weight: .black)
        
        return text
    }()
```

We should add permissions. 

In `viewDidLoad()`

```swift
  locationManager.requestWhenInUseAuthorization()
```

Now we can add an extension to add the location heuristic. You can look at the primary readme guide for an example of the `getHeuristic` method.

Now let's create a new extension for the getter

```swift
extension ViewController : XyoHeuristicGetter {
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

    func anyToBytes<T>(_ value: T) -> [UInt8] {
        var value = value
        return withUnsafeBytes(of: &value) { Array($0) }.reversed()
    }

}
```

Once we get the user's permission, we get the last known location if there is one, then we encode the location coordinates before we create a new `XyoObjectStructure` for the heuristic to be compatible with our origin chain object. 

We also add a `doLocation.text` to print out the non-encoded location coordinates so that the user can see a human readable version of the location that is added to the origin chain. 

Once we have the resolver set, we can plug it into the `addHeuristic` method to the view loader

`viewDidLoad()`

```swift
override fun onCreate(savedInstanceState: Bundle?) {
  ...
  node.addHeuristic(key: "gps", getter: self)
}
```

We then should enable updating location 

```swift
locationManager.startUpdatingLocation()
```

The `viewDidLoad()` should look like this when we are done

```swift
    override func viewDidLoad() {
        super.viewDidLoad()
        
        locationManager.requestWhenInUseAuthorization()
        node.addListener(key: "main", listener: self)
        node.addHeuristic(key: "gps", getter: self)
        locationManager.startUpdatingLocation()
        layoutButton()
        layout()
    }
```

Now we can add our `doLocation` view to our Layout

```swift
    private func layout () {
        ...

        view.addSubview(doLocation)
        
        doLocation.translatesAutoresizingMaskIntoConstraints = false
        
        doLocation.bottomAnchor.constraint(equalTo: doBoundWitnessButton.topAnchor, constant: 100).isActive = true
        doLocation.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true

    }
```

Now rebuild and run the app. 

When you tap or click (in a simulator) the `create origin` button, you should see the GPS coordinate appear right before the hash. 

<h1 align="left">
  <img alt="app with gps and origin hash" src="/docs/assets/ios_complete_emulator.gif" width="280px" height="600px">
</h1>

## Conclusion

You have now created an origin chain and added the gps heuristic to the origin chain. 

Made with 🔥and ❄️ by [XY - The Persistent Company](https://www.xy.company)
