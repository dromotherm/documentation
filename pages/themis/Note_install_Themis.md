---
title: Themis/EmonCMS - Scripted Installation
sidebar: themis_sidebar
permalink: Themis_install.html
---

## prepare the SD card

### operating system

burn the lastest version of rapsbian (buster) with Etcher

[raspbian download page](https://www.raspberrypi.org/downloads/raspbian/)

Choose the [lite version](https://downloads.raspberrypi.org/raspbian_lite_latest) without desktop

[balena etcher download page](https://www.balena.io/etcher/)

### ssh access

Create an ssh file on the SD boot directory

On linux, if the SD boot directory is mounted on `/media/alexandrecuer/boot` :
```
cd /media/alexandrecuer/boot
touch ssh
```

On windows, if the SD boot directory is mounted on `E` :

```
echo.>E:\ssh
```
### disable (temporary) the automatic SD card resizing process 

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
Check resizing was successfully done : with `df -h` and a 16Gb sd card, the output should be :
```
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       4.2G  1.1G  3.0G  26% /
devtmpfs        460M     0  460M   0% /dev
tmpfs           464M     0  464M   0% /dev/shm
tmpfs           464M  6.2M  458M   2% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           464M     0  464M   0% /sys/fs/cgroup
tmpfs           1.0M     0  1.0M   0% /var/tmp
tmpfs            30M     0   30M   0% /tmp
/dev/mmcblk0p3   11G  3.8M  9.6G   1% /var/opt/emoncms
/dev/mmcblk0p1   43M   22M   21M  51% /boot
tmpfs            93M     0   93M   0% /run/user/1000
```

## install the themis softwares 

download the scripts

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
{% include note.html content="Option 1 is the simplest and preferred solution." %}
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


## Extra notes - to check in case of installation problems

If the process described above does not succeed in creating a new /dev/mmcblk0p3 partition, you can do it manually using gparted on a ubuntu desktop

Once things are done in gparted, you will still have to format and to fix the sector size to 1024 :

```
sudo mkfs.ext2 -b 1024 /dev/mmcblk0p3
sudo mkdir /var/opt/emoncms
sudo chown www-data /var/opt/emoncms
wget https://raw.githubusercontent.com/openenergymonitor/EmonScripts/master/defaults/etc/fstab
sudo cp fstab /etc/fstab
sudo reboot
```
repositories to use for a themis python3 config (without the Themis cosmetics tools included into the themis emoncms branch) = How to modify the emonsd.config.ini
```
emonhub_branch=themis_python3
....
symlinked_emoncms_modules[postprocess]=themis
....
git_repo[postprocess]=https://github.com/alexandrecuer/postprocess.git
....
git_repo[emonhub]=https://github.com/alexandrecuer/emonhub.git
# emonpi/rpi specific tools
git_repo[emonpi]=https://github.com/dromotherm/emonpi.git
```
to make the restart button of the config module work, jump to the master branch of config :
```
emoncms_emonpi_modules[config]=stable
```
normally, the dromotherm emonpi fork will make things work with python3 but in case, it is good to know how to debug the LCD. There is some dependancies :

```
sudo apt-get install python3-smbus i2c-tools python3-rpi.gpio python3-pip redis-server  python3-gpiozero -y
sudo pip3 install redis paho-mqtt xmltodict requests
```
All files are in /opt/openenergymonitor/emonpi/lcd

the service emonPiLCD.service should include such a line :
```
ExecStart=/usr/bin/python3 /opt/openenergymonitor/emonpi/lcd/emonPiLCD.py
```
the service file should be located in /lib/systemd/system. If you install it manually
```
sudo cp emonPiLCD.service /lib/systemd/system/emonPiLCD.service
sudo systemctl enable emonPiLCD.service
sudo systemctl restart emonPiLCD.service
```

## miscellaneous

To remove the isc-dhcp server, if not needed
```
cd /etc/systemd/system
sudo ln -s /dev/null isc-dhcp-server.service
```
