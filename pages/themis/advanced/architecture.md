---
title: software architecture and core services
sidebar: themis_sidebar
toc: false
permalink: architecture.html
---

## emoncms_mqtt and feewriter processes

THEMIS collects datas from various hardware services. Once collected from a sensor, data is processed by THEMIS/emoncms through a MQTT broker called mosquitto and a key value in memory database called Redis. At the end of this processing cycle, data is stored in binary feeds on a flash memory. 

When receiving new datas from sensors, hardware services (ota2, modbus, emonhub) publish one or several json payload(s) on one or several topic(s) of the MQTT broker. For a node identified by its id `nodeid`, the topic is `emon/nodeid` or `emon/userid/nodeid` in multi-user mode. For a temperature and humidity sensor, the payload can be `{temp:24.7, rh:56.8}` 

When a json payload is received from the broker, the emoncms_mqtt service updates a hash called `lastvalue` and a sorted set called `buffer` in redis.

At a regular time step (300s by default), the feedwriter service reads the redis buffer and updates the binary feeds. 

![architecture](schema.svg)

As already mentionned, please note that injecting last values monitored into the redis database is part of the whole cycle processing.

[FOR MORE DETAILS](https://github.com/dromotherm/sandbox/blob/master/bios/servicesEN.md)
