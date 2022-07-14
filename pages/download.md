---
title: themis images
sidebar: themis_sidebar
permalink: download.html
---
{% include tip.html content="Download, unzip and burn on a blank SD card using [Balena Etcher](https://www.balena.io/etcher)" %}

If you have a Themis machine, checkout [how to replace the SD](Themis_change_SD) 

If you don't have a Themis machine, insert the SD in a raspberry PI3 (or 4), connect to your box and boot, that's all...

Assuming the raspberry is attributed the address 192.168.1.37 :
- to access to Themis, browse `http://192.168.1.37`
- to access to NodeRED (if preinstalled on the image), browse `https://192.168.1.37:1880`

{% include note.html content="these are big files, so be patient :-)" %}

Use xz to extract :

```
xz -d -v file_name.img.xz
```
Run `sudo apt install xz-utils` to install xz on debian/ubuntu

date | link
--|--
23/06/2022 | [Themis Bios - 16 Gb cards - linux kernel 5.15.32](https://drive.google.com/u/0/uc?id=1874vnJTrYKGkXykJvVuVlcXoWIYOKLQI&export=download)<br><br>[release notes](release_notes.txt)

check the release notes for all details about versioning and SHA256


## resizing partitions

**If using a 32 Gb card, use [gparted](https://gparted.org/) to extend filesystem**

The process is quite straightforward, and gparted will make all moving and resizing operations easy
