---
title: Themis/EmonCMS - measuring a fluid temperature
sidebar: themis_sidebar
permalink: Themis_fluid_T_mes.html
---
## Using PT 100 to measure fluid temperatures in a heating network

A convenient solution is to use a [modbus](http://www.simplymodbus.ca/exceptions.htm) module, such as Promux [PM6RTD](https://www.proconel.com/product/pm6rtd-6-rtd-input-module/)

In a nutshell, keep the factory settings on the PM6RTD : 9600 bauds, 1 stop bit, no parity. Adjust the modbus address with the switches on the front
modbus address | switches
--|--
1|S1 ON
2|S2 ON 
3|S1 & S2 ON 

PM6RTD RS485 terminal block|4|3|2|1
--|--|--|--|--
connector|4-|3+|12V+|GND

### RTU wiring

To check the module without any integration into Themis, we will use a USB to serial adapter : the moxa uport 1150 - [download MOXA uport drivers](https://www.moxa.com/en/products/industrial-edge-connectivity/usb-to-serial-converters-usb-hubs/secure-routers/uport-1000-series#resources)

On a window desktop, go to the device manager and fit the Moxa so it works in RS485(2W). Here the Moxa appears to be on COM1

![moxa uport conf](uport_conf.png)

promux|4-|3+
--|--|--
cable|white|green
uport 1150|R-(D-)=4|R+(D+)=3

### modbusTCP wiring

smartflex RS485 terminal block|1|2|3
--|--|--|--
connector|GND|TxRx+|TxRx-

promux|4-|3+
--|--|--
cable|white|green
smartflex|2|3

### basic testing

Once the promux **PM6RTD** powered and connected via RTU or TCP, make a simple test with [modbus doctor](http://www.kscada.com/modbusdoctor.html). Even without any sensor, you can check the serial on register 0. It should be something like 96D (upper byte = software version, here 9, lower byte always = 109 ie 6D) 

### emonhub configuration
Interfacer section :
```
[[Enless]]
    Type = EmonModbusTcpInterfacer2
    [[[init_settings]]]
        modbus_IP = 192.168.1.1
        modbus_port = 503
        fCode = 3
    [[[runtimesettings]]]
        nodeIds = 21
        pubchannels = ToEmonCMS,
        # time in seconds between checks, This is in addition to emonhub_interfacer.run() sleep time of .01
        interval = 60
```
node :
```
[[21]]
    nodename = circuits_PT100
    [[[rx]]]
        names = serial,PT100_1,PT100_2
        registers = 1,2,3
        unitId = 1
        datacode = H
        scales = 1,0.1,0.1
```
**with the PM6RTD, sensors values can be found from register 2 to 7**

## Using thermocouple (Seebeck effect)

Type T

Composition : copper / Constantan (copper + nickel)

From −185 °C to 300 °C ;

accuracy  +/-0,1 °C from −200 °C to 200 °C.

CEI 584-3  
> - brown rubber sheath
> - brown = +
> - white = -

Use the [PM8TC isolated](https://www.proconel.com/product/pm8tc-iso-8-thermocouple-input-module-isolated/) module

**with the PM8TC, sensors values can be found from register 2 to 9**

## industrial approach

in case of a demonstrator instrumentation, with a lot of data to record, the HIOKI 8402-20 is a good choice

Using the HIOKI 8402-20 datalogger with a universal analog input unit LR8501

[Hioki 8402 product page](https://www.hioki.com/en/products/detail/?product_key=5613)

![HIOKI_full_view](HIOKI8402.jpg)

![HIOKI_TC connexion](HIOKI_connect_TC.jpg)

Configure the HIOKI 8204 for DHCP and connect it to the smartflex via an ethernet cable

Define a static DHCP lease for the HIOKI, using its MAC address :

![smartflex LAN conf](HIOKI_smartflex_LAN_conf.jpg)

use the specific Hioki socket interfacer for emonhub :

```
[[HiokiTCP]]  
    Type = EmonHiokiTcpInterfacer
    [[[init_settings]]]
	    IP = 192.168.2.3   # ip address of client to retrieve data from
	    port = 8802          # Portclient listens on
    [[[runtimesettings]]]
           pubchannels = ToEmonCMS,
           nodeId = 1
           # interrogation interval in seconds 
           interval = 10
```

node configuration

```
[[1]]
    nodename = Hioki8402
    [[[rx]]]
       names = TC1,TC2,TC3
       channels = 1,1,1
       voice = 1,2,3
```

There is no datacode to fix : the HIOKI is streaming ASCII and the decoding is integrated to the interfacer
