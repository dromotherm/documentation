---
title: managing the modbus sniffer configuration file
sidebar: themis_sidebar
permalink: conf.html
---

As a reminder, all THEMIS/BIOS specific conf files are stored in `/etc/conf/bios`

The edition can be done using the emoncms web interface, through the emoncms BIOS module, which is preinstalled on the SD card

THEMIS/BIOS is using **PROMUX** modbus modules :
- PM6RTD for PT100,
- PM8TC for thermocouples
- PM16DI to collect digital boolean signals (high/low, open/closed, on/off)

To autodiscover which devices are on a bus, a tool is available.

```
cd /opt/openenergymonitor/BIOS/hardware
python3 promuxDiscovery.py
```

The modbus.conf file is structured in 3 sections : common, bus and slaves

## common section

The common section gathers the connexion parameters :

```
"common": {
    "modbus_IP": "192.168.2.1",
    "tcp_port": 503,
    "baudrate": 9600
}
```

## slaves section

For most common situations, a minimalistic configuration is possible :

```
"slaves": {
    "PM6RTD": {
        "id": 0,
        "promux": 1,
        "mode": "input"
    },
    "PM8TC": {
        "id": 1,
        "promux": 4,
        "mode": "input"
    },
    "PM16DI": {
        "id":2,
        "promux": 1,
        "register": 0,
        "mode": "discrete"
    }
}
```
It is possible to have 2 equipments of the same model on the bus, as long as you take care to give them each a unique modbus identifier. 
It is enough to use different names: PM6RTD-1 and PM6RTD-2 for example, but the model **MUST** appear in the hardware name.

The `promux` key permits to autoconfigure the target module.

You can add a `register` key to specify at which address to start reading. 

Default value for the `register` key is 1 : 
- when reading input registers, like PM6RTD or PM8TC, with an offset of 30001, reading will start at register 30002. 
- when reading discrete registers with a PM6DI, with `"register": 0`, reading will start at address 10001  

module type | value of the promux field
--|--
PM6RTD | 1=PT100, 3=PT1000
PM8TC | type of thermocouple <br> 1=type J, 2=type K, 3=type E, 4=type T
PM16DI | 32 bits counters <br> 0=Disable, 1=Up Counting, 2=Up/Down Count

A more complex configuration can be achieved in order to describe for each unitid on the bus :
- which registers to read
- how to format payloads for the MQTT broker

To refine the configuration of a module/node, you can add :

- a unique datacode ("datacode" key) or an array of datacodes ("datacodes" key) with as many elements as we have registers to read
- an array of names to be used in the MQTT publication process ("names" key)
- a multiplier coefficient ("scale" key) or an array of multiplier coefficients ("scales" key)

Please note :
- the default datacode is h, ie 16 bits signed integer
- the default multiplier coefficient is 1

Below is transcripted what could be a complete configuration for a PM8TC :

```
"PM8TC": {
    "id":1,
    "promux": 4,
    "registers": [0,1,2],
    "names": ["serial","TC_1","TC_2"],
    "datacode":"h",
    "scales":[1,0.1,0.1]}
}
```
## bus section

The bus section is a table listing the names of the equipments in activity on the bus. 

```
bus = [ "PM6RTD", "PM8TC" ]
```
With such a bus section, the modbus service will only retrieve datas coming from the (PM6RTD, id=0) and from the (PM8TC, id=1). 
