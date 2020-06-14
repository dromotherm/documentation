---
title: Themis/Emoncms OS issues 
sidebar: themis_sidebar
permalink: Themis_OS_troubleshooting.html
summary: troubleshooting the operating system :-)
---

# Updating your raspbian version

You can do the update with following commands :

```
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get clean
sudo apt --fix-broken install
```

One of the most common error a user encounters while updating is `Problem with MergeList`. 

```
sudo apt-get update -y
Get:1 http://archive.raspberrypi.org/debian buster InRelease [32.6 kB]
Get:2 http://raspbian.raspberrypi.org/raspbian buster InRelease [15.0 kB]    
Get:3 http://archive.raspberrypi.org/debian buster/main armhf Packages [330 kB]
Get:4 http://raspbian.raspberrypi.org/raspbian buster/main armhf Packages [13.0 MB]
Get:5 http://raspbian.raspberrypi.org/raspbian buster/contrib armhf Packages [58.7 kB]
Get:6 http://raspbian.raspberrypi.org/raspbian buster/non-free armhf Packages [104 kB]
Fetched 13.5 MB in 15s (879 kB/s)                                              
Reading package lists... Error!
E: Encountered a section with no Package: header
E: Problem with MergeList /var/lib/dpkg/status
E: The package lists or status file could not be parsed or opened.
```

The issue is with `/var/lib/dpkg/status`.

Make a backup first:

```
mv /var/lib/dpkg/status /var/lib/dpkg/status.old
```

Copy the latest backup:

```
ls -l /var/backups/dpkg.status*
cp /var/backups/dpkg.status.0 /var/lib/dpkg/status
```
