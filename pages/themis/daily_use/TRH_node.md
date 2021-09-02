---
title: Themis / from inputs to feeds !
sidebar: themis_sidebar
permalink: Themis_new_TRH_node.html
---

Data from the sensors are displayed in real time in the inputs tab and can be historized into feeds.

Themis uses different python services for most operations related to connectivity with sensors and real world. For modbusTCP and 169 Mhz radio, Themis has got its own intelligence, including devices autodiscovery. There is little configuration. Please note that for modbus/RS485, default configuration is the following :

```
bauds : 9600
1 stop bit
8 data bits
no parity
```

To monitor in realime electric consumption, Themis uses [emonhub](http://github.com/openenergymonitor/emonhub), which is maintained by a group of open source developers.


