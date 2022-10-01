---
title: software architecture
sidebar: themis_sidebar
permalink: architecture.html
---

## [emoncms_mqtt and feewriter processes](https://github.com/dromotherm/sandbox/blob/master/bios/servicesEN.md)

THEMIS collects datas from various hardware services. Once collected from a sensor, data is processed by THEMIS/emoncms through a MQTT broker called mosquitto and a key value in memory database called Redis. At the end of this processing cycle, data is stored in binary feeds on a flash memory. 

When receiving new datas from sensors, the hardware service (ota2, modbus, emonhub) publishes one or several json payload(s) on one or several topic(s) of the MQTT broker. For a node identified by its id `nodeid`, the topic is `emon/nodeid` or `emon/userid/nodeid` in multi-user mode. For a temperature and humidity sensor, the payload can be `{temp:24.7, rh:56.8}` 

When a json payload is received from the broker, the emoncms_mqtt service updates the `lastvalue` hash and the `buffer` sorted set in redis.

At a regular time step (300s by default), the feedwriter service read the redis buffer and updates the binary feeds. 

![architecture](schema.svg)

As already mentionned, please note that injecting last values monitored into the redis database is part of the whole cycle processing.

## installing and removing hardware services

All you need is preinstalled on the SD card but by default, THEMIS is in standby mode  

Once the THEMIS machine booted with a freshly burned SD card, you can choose and activate the services you need.

To achieve this, just establish a SSH connection and move to the hardware folder service :

```
cd /opt/openenergymonitor/BIOS2/hardware
```

### over the air (ota) radio service

```
make install name=ota2
```
