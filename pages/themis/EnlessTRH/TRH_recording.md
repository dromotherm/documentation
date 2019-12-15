---
title: Themis/EmonCMS - wireless measurement of ambiant temperature and humidity
sidebar: themis_sidebar
permalink: TRH_recording.html
---

For ambiant temperature and humidity measurement, we use the Enless 169 Mhz sensors - TX TEMP HUM AMB 700-022.

They embed a [SHT21](https://www.sensirion.com/en/environmental-sensors/humidity-sensors/humidity-temperature-sensor-sht2x-digital-i2c-accurate/)
manufactured by [Sensirion](https://www.sensirion.com/en/)

[SHT21 datasheet](Sensirion_Humidity_Sensors_SHT21_Datasheet.pdf)

The Enless toolkit consists of a set of temperature and humidity transmitters matching a receiver

Once you receive the package use the [Enless Field software](https://enless-wireless.com/ressources/Enless%20Field%20Installation.zip) to create the sensors ecosystem

At this stage, you do not need to have the hardware connected to the computer on which the software is installed    

On the receiver, position the switches as follow :
- DIP1 : 1,2,3,4 OFF 5,6 ON
- DIP2 : 1,2,3 OFF
    
Power the receiver
    
On the receiver, all 5 LEDs should alternatively blink, then L5 should produce a constant orange light
```
[15-déc.-2019 20:14:47] Port série connecté COM9@19200
```