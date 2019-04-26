---
id: sentinel
title: Sentinel X 
---

## Video Walkthrough

For a video walkthrough of the setup you can view the video below (it is part of an official Geomining Kit Video):

<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/rRRX80EX7fU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

## Add a Sentinel X

### Using the XYO Mobile App (Android or iOS)

- Get the app from the [Google Play Store](https://play.google.com/store/apps/details?id=network.xyo.app&hl=en_US) or the [iTunes App Store - Coming Soon]()
- Open the app
- You should see a login screen where you can either login or create a new XYO account
- After logging in you should see a dashboard that looks like this:
<h1 align="left">
  <img alt="android-app-dashboard" src="/docs/assets/android_app_dashboard.jpg">
</h1>
- To add a Sentinel X, we want to click on `ADD NEW DEVICE`
<h1 align="left">
  <img alt="sentinel-add-screen" src="/docs/assets/sentinel_add_android.jpg">
</h1>
- After clicking on the `XY` button twice, you will most likely be directed to a firmware update screen
   - If you are: **NOTE** Doing this update will convert your XY4 Find It into a Sentinel X - this change is permanent
   - The screen should look like this:
<h1 align="left">
  <img alt="sentinel-download-screen" src="/docs/assets/sentinel_download.png">
</h1>
- Once you click `DOWNLOAD NOW` the XY4 will begin the firmware update process
- After the process completes, you will be directed to configure the Sentinel
<h1 align="left">
  <img alt="device_data_app-screen" src="/docs/assets/device_data_app.png">
</h1>
- After giving the Sentinel the name and confirming location, click `SAVE`
- When you see your Sentinel X in detail, your screen should look like this
<h1 align="left">
  <img alt="sentinel-page" src="/docs/assets/sentinel_page.png">
</h1>

<p align="center">Congratulations! You just added a Sentinel X to your XYO Account using the new XYO App!</p>

## Updating your Sentinel using NRF Connect

<div class="alert alert-danger text-center" role="alert">
  Difficulty Level: Advanced
</div>


Updating key values in your Sentinel X using the NRF Connect App (Available on iOS and Android) could be very useful.

- Start by downloading the app [iOS]() - [Android]()
- This guide assumes that you have a Sentinel X with updated firmware
- If not, follow the steps from the setup guide above
- For this exercise, we set the password to `aaaaaa`, you can set the password to whatever you like, but for this guide and explaining byte usage, we will make it easy
- You should also give it a name, especially if you have multiple sentinels on the app
- Once this is complete download the NRF Connect App [Click here for iOS]() or [Click here for Android]()
- After you download the app, go ahead and open it
- Press the arrow near the text, `No filter`
- When you do, you will see a screen that will display a search bar, along with `type` and `RSSI`

<h1 align="left">
  <img alt="nrf-filter-view" src="/docs/assets/nrf_filter.png" height="700px">
</h1>

- We want to enter `senx` in the search bar, and then press `Save filters`
- Once we do, we should see our recently converted Sentinel X


<h1 align="left">
  <img alt="senx-view" src="/docs/assets/senx.png" height="700px">
</h1>

- Now we can press `connect`
- Once we press `connect` we will see the services that are available to the `senx` 
- You will also be able to confirm that the Sentinel X is connected 

<h1 align="left">
  <img alt="senx-services-view" src="/docs/assets/senx_services.png" height="700px">
</h1>

- The last service on this view has a `UUID` that ends with `3E`
- Press that unknown service
- We will now see the available characteristics of the device
- When you press on a characteristic, you will be able to see the value of that characteristic

<h1 align="left">
  <img alt="senx-characteristics-view" src="/docs/assets/senx_3e_characteristics.png" height="700px">
</h1>

- This is the view after you press a characteristic, which includes description and value of the characteristic

<h1 align="left">
  <img alt="senx-characteristics-desc-view" src="/docs/assets/characteristic_desc.png" height="700px">
</h1>

- This description and value is from the first characteristic which you will notice has properties `read` and `write`
- You will also notice that the the name of the value is `Stay Awake`, we are going to edit this
- In order for us to make any changes to our device, we would need to be able to write a change to the device
- This description value screen can access read and write on `Android`, but on `iOS`, we would have to go back to the characteristic list screen
- To write a value to the device, we will press the up arrow 
- After pressing the up arrow, you should see this interface

<h1 align="left">
  <img alt="senx-read-write-view" src="/docs/assets/read_write_view.png" height="700px">
</h1>

- The values after 0x will determine if the Sentinel is awake or asleep
- To go to sleep `00`
- To stay awake `01`

- To set a value, write in the value you like next to the `0x`
- Make sure that the format is set to `Byte Array` and the Write type to `request`

- After setting the value, press `SEND`

- With the `Stay Awake` setting (`01`) you will hear a cheery sound
- With the `Stay Awake` setting (`00`) you will hear a wind down sound 

**Coming Soon: Factory Reset and Sound Instructions**
<p align="center">Made with  ❤️  by [<b>XY - The Persistent Company</b>] (https://xy.company)</p>
