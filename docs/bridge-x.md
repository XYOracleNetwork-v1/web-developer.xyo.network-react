---
id: bridge-x
title: BRIDGE X
sidebar_label: Bridge X
---

> The XYO Foundation provides this source code available in our efforts to advance the understanding of the XYO Procotol and its possible uses. We continue to maintain this software in the interest of developer education. Usage of this source code is not intended for production. Developer usage of the BridgeX app is intended for educational purposes on geospatial location blockchain protocol.


<div class="alert alert-info text-center" role="alert">
  Difficulty Level: Intermediate
</div>

## Current Version - 1.0.2

### Downloads Available

<div class="alert alert-info text-center" role="alert">
  <h3>Click Here to Download The Latest Bridge Image in Mac, Linux, or Windows</h3> 
  <a href="https://bridgex.xyo.network" download><i class="fab fa-apple fa-2x p-3"></i></a>
  <a href="https://bridgex.xyo.network" download><i class="fab fa-linux fa-3x p-3"></i></a>
  <a href="https://bridgex.xyo.network" download><i class="fab fa-windows fa-3x p-3"></i></a>
</div>

**1.0.2 (2019-04-26)**

### Changes

*  general bug fixes
*  UI fix for display connect issues

### Extract the image on Windows

<div class="alert alert-info text-center" role="alert">
  <h2>IMPORTANT: To Extract the Image on Windows, <a href="https://www.7-zip.org/" rel="noopener noreferrer">download 7zip here</a></h2>
  <p>We will update the image zip file to accommodate all platforms</p>
</div>

## BridgeX Consumer Help Articles

<a href="https://support.xy.company/hc/en-us/articles/360033491294" 
    rel="noopener noreferrer"
    target="_blank"
    >
      BridgeX Set Up Guide
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

<a href="https://support.xy.company/hc/en-us/articles/360034015353" 
    rel="noopener noreferrer"
    target="_blank"
    >
      Flashing an SD Card with BridgeX
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

<a href="https://support.xy.company/hc/en-us/categories/360002069813" 
    rel="noopener noreferrer"
    target="_blank"
    >
      All BridgeX Consumer Help Articles
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

## Advanced Setup and Update Options for MacOS or Linux

- First insert your SDCard into your chosen dongle USB to SDCard reader

**Next we want to download the latest Bridge X Image**

- [Click here to download](https://bridgex.xyo.network/)
- Double click on the zipped file to expand it
- You should now see the `img` file appear in the same folder where the `img.tar.gz` file appeared

### Flash the image

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

Congrats you have upgraded your Bridge X! 

### Changing linux default password

If you don't want our default password to run your bridge, you are more than welcome to change it

- First, enter this command to execute commands on your Bridge

```sh
  ssh bridge@<ip address of your bridge>
```

**NOTE** you can change the password to your Bridge filestore by entering this command 
```sh
sudo passwd bridge
```

You will then get a prompt to enter the current password (`geohacker`)

```sh
[sudo] password for bridge:
```

Enter a new password 

```sh
Enter new UNIX password:
```

Then confirm this new password

```sh
Retype new UNIX password:
```

After the password is confirmed you will see this message and you may continue operating on the Bridge with your own password

```sh
passwd: password updated successfully
```

## Adding an archivist

### Use the Bridge X UI

- Scroll down on the dashboard to your connected archivists - you will see that we have one connected which is XYO's Archivist

<h1 align="left">
  <img alt="archivist-gui" src="/docs/assets/archivists_ui.png">
</h1>

- Click `+Connect More Archivists`

You should see a `Add Archivist` modal pop up on your screen
- Enter the IP Address or DNS Name
- Enter the Port number
- Click `Save`

<h1 align="left">
  <img alt="add-archivist" src="/docs/assets/add_archivist.png">
</h1>

- Once we save the information, we should now see another Archivist under `Connected Archivists`

<h1 align="left">
  <img alt="connected-archivists" src="/docs/assets/connected_archivists.png">
</h1>

We have now connected an Archivist to the Bridge X using the Bridge's native UI!

## Changelog

### Version - 1.0.1

<div class="alert alert-info text-center" role="alert">
  <a href="https://s3.amazonaws.com/xyo-bridge-images/xyo-bridge-04-23-19.img.tar.gz" rel="noopener noreferrer"><h2>Click Here to Download The Latest Bridge Image</h2></a> 
  <p>Download link is also in the guide</p>
</div>

**1.0.1 (2019-04-23)**

**New Features**

*  add ui component for last resort update (for large scale bridge issues)
*  add ui to display current `npm` and `apt` versions

**Changes**

*  about tag in footer is new location for `force update` and `last resort` 
*  general bug fixes


### Version - 1.0.0

<div class="alert alert-warning text-center" role="alert">
  <a href="https://s3.amazonaws.com/xyo-bridge-images/xyo-bridge-04-18-19.img.tar.gz" rel="noopener noreferrer"><h4>Click Here to Download The Previous Bridge Image</h4></a> 
</div>

**1.0.0 (2019-04-18)**

**Changes**

*  more consistent `force update` of bridges
*  general bug fixes
