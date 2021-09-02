---
title: Themis / from inputs to feeds !
sidebar: themis_sidebar
permalink: Themis_new_TRH_node.html
---

Themis uses different python services for most operations related to connectivity with sensors and real world. For modbusTCP and 169 Mhz radio, Themis has got its own intelligence, including devices autodiscovery and configuration. 

To monitor in realime electric consumption, Themis uses [emonhub](http://github.com/openenergymonitor/emonhub), which is maintained by a group of open source developers.

Emonhub's user interface permits :
- to visualize in real time if data processing is correctly performed
- to edit a config file, in order to activate new sensors, never activated before in the hub...

![emonhub UI](emonhub2.png)

## Fit Emonhub configuration

### Emonhub configuration file structure

the file has got 3 main sections : hub, interfacers and nodes

```
[hub]
.....
[interfacers]
.....
[nodes]
```

To declare a new sensor, you have to modify parts of the sections [interfacers] and [nodes] 

### Modify the [interfacers] section

Find the declaration of the ModbusTCP interfacer, which should look like that :

```
[interfacers]
[[ModbusTCP]]
    Type = EmonModbusTcpInterfacer2
    [[[init_settings]]]
        modbus_IP = 192.168.1.1
        modbus_port = 503
        fCode = 3
    [[[runtimesettings]]]
        nodeIds = 23
        pubchannels = ToEmonCMS,
        # time in seconds between checks, This is in addition to emonhub_interfacer.run() sleep time of .01
        interval = 60
```

Add a node number for your new sensor, making sure this number is not already in use.

```
nodeIds = 23,24
```

{% include note.html content="Enless is using function code 3" %}

{% include note.html content="define node numbers over 20 so you can use the standard emonhub configuration for electricity monitoring without modification" %}

### Define the node in the [nodes] section

```
[[24]]
    nodename = CO218251004
    [[[rx]]]
        names = SlaveType,Timer,RSSI,serHigh,serLow,co2,temp,hum
        registers = 31092,31093,31094,31095,31096,31097,31098,31099
        datacode = H
        scales = 1,1,0.5,1,1,1,0.1,0.1
```

{% include note.html content="register values are 1 more than the values indicated in the Enless datasheet.
<br>Some manufacturers practice an addition of 1, others not like Enless and it is difficult to make a common rule" %}

{% include tip.html content="the received value of RSSI has to be divided by 2" %}

{% include tip.html content="the received values of temperature and humidity have to be multiplied by 0.1 as the precision is 0.1" %}

{% include tip.html content="the co2 concentration is expressed in ppm and there is nothing to do on the received value" %}
