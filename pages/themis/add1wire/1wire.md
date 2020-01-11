---
title: Themis/EmonCMS - adding a self made 1wire temperature sensor to the emonPI
sidebar: themis_sidebar
permalink: 1wire.html
summary: You can connect a single wire sensor to the emonPI in order to monitor the temperature inside the Themis main box, which can be in a very hot place...this post explains how to build yourself the sensor from the electronic component, using a RJ45 cable.
---

## the DS18B20 sensor
The [DS18B20P](DS18B20-PAR.pdf) is a parametric version of the classic [DS18B20](DS18B20.pdf) temperature sensor from maxim integrated. Only 2 pins are to be connected : data and ground. The sensor is powered through the data pin.
![DS18B20 parametric](DS18B20P.jpg)

you can buy some single wire sensors through the [Farnell reseller](https://fr.farnell.com/maxim-integrated-products/ds18b20-par/capteur-temperature-nv-alarm-3to92/dp/2519162)

## the Emonpi RJ45 connector
The emonPI embed an RJ45 port for connecting single-wire temperature sensors. 
The DS18B20P has to be connected through pins 4 and 5. If using a classic DS18B20, also plan to use pin 2 for 5V power.

![emonpiRJ45 connector](emonpiRJ45connector.jpg)

## soldering the DS18B20
You can use a T568B RJ45 cable to make the connection

![RJ45 568B cable](568B.jpg)

Cut the RJ45 cable, identify its 4 pairs : blue, orange, green and brown. 

The DS18B20 will have to be connected to the wires of the blue pair.

![RJ45 blue pair](1_RJ45_blue_pair.png)

Strip the wires of the blue pair with a wire stripper (you can find some at [FACOM](https://www.fac18.eu/dz-fr/categorie/electricite)).



To identify the pins of the DS18B20, you must distinguish the front panel (on which you can read the brand and type).

![TO92 box](TO-92_Front_and_back_view_with_Pin_Numbers.png)

Add some soldering on pins 1 and 2 of the DS19B20.

![solder on 1wire pins](1wire_sensor_w_solder.png)


## anatomy of a 568B RJ45 cable

### the 4 pairs of wires of an RJ45 cable

![RJ45 pairs view](ethernet_Pairs.jpg)

pair|number
--|--
blue/white|1
orange/white|2
green/white|3
brown/white|4

### Link to the pins of the RJ45 connector, for a T568B cable

pin|wire color|pair number
--|--|--
1|![white-orange](90px-Wire_white_orange_stripe.svg.png)|2
2|![orange](90px-Wire_orange.svg.png)|2
3|![white-green](90px-Wire_white_green_stripe.svg.png)|3
4|![blue](90px-Wire_blue.svg.png)|1
5|![white-blue](90px-Wire_white_blue_stripe.svg.png)|1
6|![green](Wire_green.svg.png)|3
7|![white-brown](90px-Wire_white_brown_stripe.svg.png)|4
8|![brown](90px-Wire_brown.svg.png)|4

for more complete information, check [wikipedia](https://fr.wikipedia.org/wiki/RJ45)
