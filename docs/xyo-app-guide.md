---
id: XYO-Network-App
title: XYO Network App
---

<div class="alert alert-info text-center" role="alert">
  This is a guide for the XYO Client for iOS and Android.
</div>

## New features in version 3.0

- Completely redesigned user interface, graphics, and functions.

- Firmware updates no longer required to use SentinelX.

- View the number of node devices detected nearby.

- Node devices are no longer claimed, but can be added to the user's favorites, allowing nodes to be followed by multiple users.

- Login to your XYO account or remain anonymous.

- Run your phone or tablet as a sentinel, bridge, or both. Switch between modes with the press of a button.

- Connect or disconnect to a default archivist or diviner with a single touch.

- Tap to copy public keys.

- Check your bridge-mode origin chain and access your favorite devices on your dashboard.

- Numerous data outputs that allow for analysis of different contexts.

- Swipe to switch contexts. View the data relevant to your device and nearby devices, or switch to the Data Ocean to see what's going on across XYO.

> A note about this guide: The screenshots in this guide were taken from an early beta. Your experience may differ slightly, although the principles of navigation and design will not change on your use. 

## Installing the app 

- iOS
  - Visit the app store 

- Android
  - Visit the google play store

## Contexts

There are two primary contexts when you start up the app:

### Device context

Your device (android or iOS)
<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/device_context.webp">
    <img alt="device-context" src="/docs/assets/device_context.png">
  </picture>
</h1>

### Data Ocean Context 

The data ocean
<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/data_ocean_context.webp">
    <img alt="data-ocean-context" src="/docs/assets/data_ocean_context.png">
  </picture>
</h1>


## Your device context

Your device context centers around display of information relative to your device. This includes the proof of origin chain for your device and all devices near you. 

### Controlling the four components

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/four_components.webp">
    <img alt="four-components" src="/docs/assets/four_components.png">
  </picture>
</h1>


Your device context also contains four interfaces representing each component of the XYO network:

- Sentinel
- Bridge
- Archivist 
- Diviner

These interfaces indicate the current status of its component.

You can tap on a component to either pause or disconnect, here are the status toggles for each component interface:

- Sentinel (running or paused)
- Bridge (running or paused)
- Archivist (connected or disconnected)
- Diviner (connected or disconnected)

## Looking at the chain of bound witnesses

To look at the chain of bound witnesses in your device's context, tap on the proof of origin interface in your device's context. 

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/proof_of_origin_chain.webp">
    <img alt="proof-of-origin" src="/docs/assets/proof_of_origin_chain.png">
  </picture>
</h1>

Once you tap on the interface you should see your device's bound witness chain exposed. 

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/bound_witness_chain.webp">
    <img alt="bound-witness-chain" src="/docs/assets/bound_witness_chain.png">
  </picture>
</h1>

When looking at the bound witness chain, you should see heuristics of the chain including: 
- rssi
- number of bytes
- time of the bound witness interaction
- index numbers of the devices in the bound witness interaction

Tap on the bound witness to reveal more details about it 

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/bound_witness_detail.webp">
    <img alt="bound-witness-detail" src="/docs/assets/bound_witness_detail.png">
  </picture> 
</h1>

Details include:

- the public key addresses for each party in the interaction
- time of the interaction 
- GPS coordinates where the interaction took place
- hash of the interaction 
- byte data from the interaction 

## Looking at nearby devices

To look at nearby devices, in your device context tap on the all devices interface

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/all_devices.webp">
    <img alt="all-devices" src="/docs/assets/all_devices.png">
  </picture>
</h1>

Once you do you should see a scrollable list of the devices that have interacted with your device

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/device_list.webp">
    <img alt="device-list" src="/docs/assets/device_list.png">
  </picture>
</h1>

This list should include:
- the device type
- the public key address of the device
- whether it is a favorite device
- whether the device is yours or not

Looking at your device's context gives you data on all interactions with your device. This can help you estimate how much activity your device has in the XYO network. 

## The data ocean context

The data ocean context is not related to your device therefore it does not have any component interfaces. What it does have is valuable information about the health of the network and overall bound witness amounts for the current origin chain along with how many total bound witness have been collected by our archivist. 

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/data_ocean_context.webp">
    <img alt="data-ocean-context" src="/docs/assets/data_ocean_context.png">
  </picture>
</h1>

This context does allow you to view bound witness data and devices that are near you and your favorites. The main use for this view in the current version is the current bound witness count from our the proof or origin chain and the total bound witnesses collected by our archivist.

## Settings 

When you tap on the settings wheel in either context, you are directed to an informational page on the application. This includes:

<h1 align="left">
  <picture>
    <source type="image/webp" srcset="/docs/assets/settings_wheel.webp">
    <img alt="settings-wheel" src="/docs/assets/settings_wheel.png">
  </picture>
</h1>

- the app version
- your device name (i.e. iPhone, Pixel, Galaxy, etc.)
- your device's operating system (iOS or android)
- OS Version 
- Platform Version

The settings screen also exposes the ability to place the app in `developer` mode

<div class="alert alert-danger text-center" role="alert">
  Difficulty Level: Intermediate to Advanced
</div>

<div class="alert alert-info text-center" role="alert">
  This is a guide for developers and enthusiasts who want exposure to detailed and latest features on the new XYO Network App for iOS and Android
</div>

## Developer mode

1. In the main XYO Network App screen tap the settings wheel
2. Tap the **XYO Application Version** 9 times
3. You should now see the option to turn on experimental features

## Decprecated features after 3.0

- Manual add of sentinel devices
- Manual add of bridge devices
- Required XYO login - it is now optional to log in using an xyo account 


