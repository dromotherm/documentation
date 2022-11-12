---
title: The Themis softwares
sidebar: themis_sidebar
permalink: Themis_softs.html
---

## real world connectivity

The Themis tools are developped on the basis of the [emoncms](http://github.com/emoncms) ecosystem. 
Themis has got its own intelligence, including devices autodiscovery. 

**THERE IS LITTLE OR NO CONFIGURATION** 

Themis uses different python services for most operations related to connectivity with sensors and real world :

- a over the air service for **long range 169Mhz sensors**, with on the fly autodectection
- a modbus service to interact with modbus devices (eg promux) in order to easily operate thermocouple sensors and PT100

*Please note that for modbus/RS485, default configuration is the following : `9600 bauds, 1 stop bit, 8 data bits, no parity`. You can change this but keep it simple*

To monitor in realime electric consumption, Themis uses [emonhub](http://github.com/openenergymonitor/emonhub), which is maintained by the emoncms developers

We maintain a specific version of emonhub including a specific interfacer to manage ethernet sockets on a **HIOKI 8204-20** datalogger


## data processing

Datas recorded to feeds can be easily processed by well known python frameworks : numpy and tensorflow.

![logos](logos.png)

A specific library named [PyFina](https://pypi.org/project/PyFina/) has been developped for that purpose.
