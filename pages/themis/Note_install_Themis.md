---
title: Themis/EmonCMS - Scripted Installation
sidebar: themis_sidebar
permalink: Themis_install.html
---

## prepare the SD card

burn the lastest version of rapsbian (buster) with Etcher

if SD mounted on E:, create an ssh file on /boot

```
echo.>E:\ssh
```
Copy the default cmdline.txt to cmdline2.txt in the boot partition and then open to edit cmdline.txt, remove: init=/usr/lib/raspi-config/init_resize.sh

## boot the RPI and adjust the file system

```
wget https://raw.githubusercontent.com/openenergymonitor/EmonScripts/master/install/init_resize.sh
chmod +x init_resize.sh
sudo mv init_resize.sh /usr/lib/raspi-config/init_resize.sh
sudo mv /boot/cmdline2.txt /boot/cmdline.txt
sudo reboot

sudo resize2fs /dev/mmcblk0p2
sudo mkfs.ext2 -b 1024 /dev/mmcblk0p3
sudo mkdir /var/opt/emoncms
sudo chown www-data /var/opt/emoncms
wget https://raw.githubusercontent.com/openenergymonitor/EmonScripts/master/defaults/etc/fstab
sudo cp fstab /etc/fstab
sudo reboot
```

## install the themis softwares 

The themis tools are developped on the basis of the emoncms ecosystem

They consist of :
- a vizualisation tool for creating psychometric diagrams 
- an algorithm dedicated to the calculation of infiltration losses on a building
- a specific interfacer for emonhub performing in tcpip mode the operation of an rs485 bus, allowing the deployment of long range 169Mhz sensors and the cooperation with boilers rooms controllers
- a specific interfacer for emonhub managing an ethernet socket on a HIOKI 8204-20 datalogger, in order to easily operate thermocouple sensors (and PT100)

install the scripts

```
cd /opt
sudo mkdir openenergymonitor
sudo chown pi:pi openenergymonitor
sudo apt-get install git
cd openenergymonitor
git clone -b master https://github.com/openenergymonitor/EmonScripts
cd EmonScripts
cd install
```

### option 1
{% include important.html content="This is the preferred solution." %}
```
rm emonsd.config.ini
wget https://raw.githubusercontent.com/dromotherm/documentation/master/pages/themis/emonsd.config.ini
```

### option 2

manually change emonsd.config.ini with the following lines
```
emoncms_core_branch=themis or themis_uptodate
emonhub_branch=modbusTCPinterfacer_multinodes_env_example
```
```
symlinked_emoncms_modules[postprocess]=themis
```
```
git_repo[emoncms_core]=https://github.com/alexandrecuer/emoncms.git
# main modules
git_repo[config]=https://github.com/alexandrecuer/config.git
```
```
git_repo[postprocess]=https://github.com/alexandrecuer/postprocess.git
# emonhub
git_repo[emonhub]=https://github.com/alexandrecuer/emonhub.git
```
### launch the scripts
```
./main.sh
```

## install NodeRED

``
bash <(curl -sL https://raw.githubusercontent.com/node-red/raspbian-deb-package/master/resources/update-nodejs-and-nodered)
``

To start nodered as a service: `sudo systemctl enable nodered.service`


