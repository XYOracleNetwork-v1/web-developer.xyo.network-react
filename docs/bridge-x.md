---
id: bridge-x
title: Bridge X
---

<div class="alert alert-info text-center" role="alert">
  Difficulty Level: Intermediate
</div>

## Three Options to Connect Your Bridge X

## Important - Before you begin 

Be sure to have an updated SDCard that should have been sent to you. This is the best way to have the latest hardware. If you want to flash the latest image to your SDCard, please refer to the directions by **[clicking here](#update-your-bridge)**

### First option

- Connect your Bridge X to a power source
- Connect your Bridge to your Router using an Ethernet Cable
- Check to see if indicator lights are green near the ethernet and power ports
- Using your computer, point your browser to **xyo-bridge.local**
- You should see a text input field to enter and confirm a password with a **Continue** button

<h1 align="left">
  <img alt="bridge-ui" src="/docs/assets/bridge_ui_new.png">
</h1>

- Create a password that you will remember, and the confirm that password. Click **Continue** to connect the Bridge X

- Once you connect, you should see a screen similar to this 

<h1 align="left">
  <img alt="bridge-dashboard" src="/docs/assets/bridge_dashboard.png">
</h1>

**Use Your Bridge X to interact on the XYO network!**
- You can now click the **Wifi** icon to connect the Bridge X to your Local Wifi Network
- You should have your Wifi connection details handy to complete this step.

<h1 align="left">
  <img alt="wifi-icon" src="/docs/assets/wifi.png">
</h1>

- Next, claim your Bridge X by logging in with your **XYO Account** - enter your email and password and then click **Login**

**You should now see this screen**

<h1 align="left">
  <img alt="claim-bridge" src="/docs/assets/claim_bridge.png">
</h1>

- Now click **Claim** to claim your Bridge X!

### Second Option (Using Google Chrome or Firefox)
- Connect your Bridge X to a power source
- Connect your Bridge to your Router using an Ethernet Cable
- Check to see if indicator lights are green near the ethernet and power ports
- Using your computer, point your browser to **app.xyo.network**
- Create a username and password, or if you have already started using the app on either Web or Mobile, log in with your email and password
- You should now see the main XYO App Dashboard

<h1 align="left">
  <img alt="xyo-app-dashboard" src="/docs/assets/xyo_app_dashboard.png">
</h1>
- Click on the menu icon to the left of **Dashboard**

<h1 align="left">
  <img alt="xyo-app-menu-icon" src="/docs/assets/menu_icon.png">
</h1>
- You should now see a side menu appear

<h1 align="left">
  <img alt="app-side-menu" src="/docs/assets/app_side_menu.png">
</h1>

- Click on **Local Bridges**
- You should directed to a new dashboard so that you can scan for bridges
<h1 align="left">
  <img alt="scan-bridges-dashboard" src="/docs/assets/scan_bridges_dashboard.png">
</h1>
- Click **Start Scan**
- The app will take a few moments in scanning for your Bridge X, you will see an indicator for progress
- Once the app discovers the Bridge, you can verify the name and IP address of your Bridge X
- Click **Connect**
- You are now connected to your Bridge X!

### Third Option
**NOTE** You will need a keyboard and mouse for this option
**NOTE** While the SDCard is loading your screen may appear black for about 30 seconds
- Connect your Bridge X to a power source
- Connect your Bridge X to your Router using an Ethernet Cable
- Check to see if indicator lights are flashing green and static amber near the ethernet and power ports
- Connect your Bridge X to a display of your choice using an HDMI cable
- Connect a mouse and keyboard to your bridge using the available USB ports
- You should now see a UI on your display similar to the first option
- Enter the password provided and click **login** to connect the Bridge X
- You can now click the **Wifi** icon to connect the Bridge X to your Local Wifi Network

### After you connect your Bridge X

- Go ahead and disconnect the Ethernet from the Bridge X (only after connecting it via Wifi)
- Check out app.xyo.network for your Bridge's activity
- Check out our Matrix
- Try starting up your first Archivist!


<div class="alert alert-danger text-center" role="alert">
  We have included these instructions as a back up. We strongly recommend that you order a new SDCard with the updated Bridge X firmware image before
  approaching this workflow. This process will take up to an hour to complete. 
</div>

## Update your Bridge
## Downloading and flashing a Bridge X image 

### MacOS

- First insert your SDCard into your chosen dongle USB to SDCard reader
- Download the Bridge X image here  --> 
- Open your Mac's disk utility and navigate to 16gb disk NORELSYS 1081
- Click Erase
- Select ExFAT as your format for the new partition
- Check for successful erase
- Click on the info button in the disk utility
- Scroll down to the parent disks
- Take note of the parent disks name

Go into a terminal window
- Navigate to the image 
  - In downloads (or wherever you keep your downloads) .img file
- Enter this command 
```sh 
  sudo diskutil unmountDisk /dev/<your parent disks name>
```

- Then install image to the Bridge
```sh 
  sudo dd if=./xyobridge.img of=/dev/<your parent disks name> bs=1m
```

### Windows 10

- First insert your SDCard into your chosen dongle USB to SDCard reader
- Download the Bridge X image here  --> 
- Right click on ThisPC in sidebar below OneDrive
- Click **manage**
- Under **storage**
  - Click **Disk Management**
- Find the 14.84GB disk (or approx 14GB, that is not already accounted for from any work that you have done)
  - This will most likely be named `NORELSYS`
- Select Boot and the Partition - delete both
  - wipe disk
  - all that should be left is unallocated 
- Move the downloaded Bridge img to Documents
- Right click on your Command Prompt to open as `administrator`
- Enter `d:` to navigate to the D drive 
- Then enter this `dd if=./xyobridge.img of=.E bs=4096`
  - This command will start flashing the image to your SDCard
  - **NOTE** This process will take at least 20 minutes, keep this in mind when planning time to flash the image. 

  ### Using Etcher (MacOS, Linux, or Windows)
  
  The easiest way to flash our new Bridge image to your current SDCard is by using `etcher`
  
  - First we [download etcher here](https://www.balena.io/etcher/)
  - You will notice the download button searching for your OS
  - When it discovers it you should see the Download button display your OS, below an example on MacOS

<h1 align="left">
  <img alt="etcher-download-button" src="/docs/assets/etcher_download_button.png">
</h1>

- Once download is complete move the Etcher into your `Applications` 

- Now, open the application (through your respective search OS function)
- Here is a MacOS example of the GUI you should see when you open up the application 
<h1 align="left">
  <img alt="etcher-gui" src="/docs/assets/etcher_gui.png">
</h1>
- Now we can click `select image` - this will direct you to your respective file explorer where you can find your Bridge X image
- Once you find it click on it and then click `open`
- You can now click on the drive that you just formatted
<h1 align="left">
  <img alt="select-drive-gui" src="/docs/assets/select_drive_gui.png">
</h1>
- Now we can click `Select drive` - this will direct you to your respective file explorer where you can find the drive that you formatted
- Once you find it click on it and then click `open`
**NOTE** If you did successfully format that SDCard, the GUI may automatically set the drive without you having to find it
Your GUI should look something like this before you flash the SDCard (MacOS example)
<h1 align="left">
  <img alt="flash-gui" src="/docs/assets/flash_gui.png">
</h1>
- Now we can click `Flash!`
- You will be prompted to enter your device password 
- Once you do, the GUI will change to indciate that the SDCard is currently flashing 
<h1 align="left">
  <img alt="flashing-gui" src="/docs/assets/flashing_gui.png">
</h1>
- Depending on the current image, this may take from 10 - 18 minutes, go ahead and check out the [Matrix](https://matrix.xyo.network/) while you wait!

- After Etcher completes the flashing process, it will go into validating the flash

<h1 align="left">
  <img alt="flashing-gui" src="/docs/assets/flashing_gui.png">
</h1>

- Once that is completed, you can eject the SDCard and install it in your Bridge X

### Updating the Bridge through unattended upgrades

Once we have set up our Bridge X it would be a good idea to check on and complete upgrades

There are two ways that we can do this

- First, enter this command to execute commands on your Bridge
```sh
  ssh bridge@<ip address of your bridge>
```

- You will be prompted to enter a password, you will enter the default password for the Bridge filestore - `geohacker`
```sh
bridge@<ip address of your bridge>'s password: 
```

- Then enter this command

```sh
sudo apt update
```

- Enter the device password again for the Bridge - `geohacker`

```sh
[sudo] password for bridge:
```

- You should see the Bridge pulling the latest from the repo

```sh
Hit:1 http://repo.xyo.network/repos/apt/raspbian stretch InRelease
Hit:2 http://raspbian.raspberrypi.org/raspbian stretch InRelease
Get:3 http://archive.raspberrypi.org/debian stretch InRelease [25.4 kB]
Fetched 25.4 kB in 1s (15.0 kB/s)
Reading package lists... Done
Building dependency tree
Reading state information... Done
31 packages can be upgraded. Run 'apt list --upgradable' to see them.
```

- Now run this command to upgrade

```sh
sudo apt upgrade
```

- You will be prompted on whether you would like to continue with the upgrade 

```sh
The following packages will be upgraded:
<packages to be upgraded will be listed here>
31 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 106 MB of archives.
After this operation, 303 kB disk space will be freed.
Do you want to continue? [Y/n] y
```

**This upgrade includes a lot of downloading and unpacking of new packages, so please be patient with the process**

You should see a progress bar

```sh
Progress: [ <percent complete>%] [#################################################################################################################################..........................................................]
```

**Once it completes, you are all set with your upgrade. Be sure to visit the Bridge X App to verify that it is still functioning**

You can also use this command after `sudo apt update` to execute an unattended upgrade

```sh
sudo unattended-upgrades -d
```

The confirmation output after this upgrade process should look like this

```sh
+ @xyo-network/bridge.pi@0.123.0
updated 1 package in 71.157s
xyo-bridge-pi is ready
All upgrades installed
InstCount=0 DelCount=0 BrokenCount=0
Extracting content from '/var/log/unattended-upgrades/unattended-upgrades-dpkg.log' since '2019-04-18 22:08:09'
```

Congrats you have upgraded your Bridge X! **Refer back to the beginning of this guide for how to set up your Bridge X**

<h3 align="left">Made with  ❤️  by [<b>XY - The Persistent Company</b>] (https://xy.company)</h3>