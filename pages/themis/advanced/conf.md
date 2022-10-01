---
title: managing configuration files
sidebar: themis_sidebar
permalink: conf.html
---

All THEMIS/BIOS specific conf files are stored in `/etc/conf/bios`

The edition can be done using the emoncms web interface, through the emoncms BIOS module, which is preinstalled on the SD card

# modbus

THEMIS/BIOS is using promux modbus modules :
- the PM6RTD for PT100,
- the PM8TC for thermocouples
- the PM16DI to collect digital boolean signals (high/low, open/closed, on/off)

To autodiscover which devices are on which bus, a tool is available.

```
cd /opt/openenergymonitor/BIOS/hardware
python3 promuxDiscovery.py
```

The modbus.conf file is structured in 3 sections : common, bus and slaves

The common section gathers the connexion parameters :

```
"common": {
    "modbus_IP": "192.168.2.1",
    "tcp_port": 503,
    "baudrate": 9600
}
```

The slaves section describes for each unitid on the bus which registers to read and how to format payloads for the MQTT broker.

For most common situations, minimalistic configurations are possible :

```
"slaves": {
    "PM6RTD": {"id": 0, "promux": 1, "mode": "input"},
    "PM8TC": {"id": 1, "promux": 4, "mode": "input"},
    "PM16DI": {"id":2, "promux": 1, "mode": "discrete"}
}
```
The promux key permits to autoconfigure the target module.

module type | value of the promux field
--|--
PM6RTD | 1=PT100, 3=PT1000
PM8TC | 1=thermocouple type J, 2=type K, 3=type E, 4=type T
PM16DI | 1=activate up counting, 2=up/down counting, 0=desactivate counting    
