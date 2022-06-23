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

{% include note.html content="Please note these are big files, so be patient :-)" %}

Check [release notes](release_notes.txt) - to check versioning and SHA256

To install on a 32 Gb card, use gparted to extend filesystem

date | link, emoncms version, md5 hash
--|--
23/06/2022 | [Themis Bios - 16 Gb cards - linux kernel 5.15.32](https://drive.google.com/u/0/uc?id=1874vnJTrYKGkXykJvVuVlcXoWIYOKLQI&export=download) 
29/08/2021 | [Themis - 16 Gb cards - pi version](https://drive.google.com/uc?id=1SM9nP_75u8EXGqZST3VIVUsi-6czyYox&export=download) <br> **emoncms version : 10.8.1** <br> (zip) b2a2ea2d8b040bffa1026f8964787a3c <br> (img) 6470a1c94e1476ea6a96ca5c55adf35b
