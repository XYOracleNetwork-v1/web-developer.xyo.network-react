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
- Using your computer, point your browser to **xyo.local**
- You should see your Bridge and its IP address information on the **xyo.local** site
- Once you see this and confirm, then go ahead and click on the **Connect** button to connect the Bridge to the XYO Network!

### Second Option (Using Google Chrome or Firefox)
- Connect your Bridge X to a power source
- Connect your Bridge to your Router using an Ethernet Cable
- Check to see if indicator lights are green near the ethernet and power ports
- Using your computer, point your browser to **app.xyo.network**
- In the main app dashboard, you will see a **Scan for Devices** button
- Click **Scan For Devices**
- The app will take a few moments in scanning for your Bridge X, you will see an indicator for progress
- Once the app discovers the Bridge, you can verify the name and IP address of your Bridge X
- Click **Connect**
- You are now connected to your Bridge X!

### Third Option
- Connect your Bridge X to a power source
- Connect your Bridge to your Router using an Ethernet Cable
- Check to see if indicator lights are green near the ethernet and power ports
- Connect your Bridge X to a display of your choice using an HDMI cable
- You should now see a UI on your display
- If you do see this, go ahead and enter the values that it prompts for
- These values are your wifi username and password

### After you connect your Bridge X

- Go ahead and disconnect the Ethernet from the Bridge X
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
