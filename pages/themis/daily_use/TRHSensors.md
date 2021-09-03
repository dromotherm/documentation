---
title: thermal confort monitoring
sidebar: themis_sidebar
permalink: long_range_sensors.html
---

The long range 169 Mhz standard toolkit consists of a set of transmitters plus a receiver.

{% include note.html content="To operate battery connection on the sensors or to handle the DIPs on the receiver, you will need a cruciform/cross-point screwdriver size 1 50mm<br>[wikipedia](https://en.wikipedia.org/wiki/List_of_screw_drives)" %}

## temperature and humidity sensors

The temperature and humidity Enless sensors - TX TEMP HUM AMB 700-022 - embed a [SHT21](https://www.sensirion.com/en/environmental-sensors/humidity-sensors/humidity-temperature-sensor-sht2x-digital-i2c-accurate/)
manufactured by [Sensirion](https://www.sensirion.com/en/)

![Enless TRH circuit](long_range/enless_TRH_circuit_small.jpg)

[SHT21 datasheet](long_range/Sensirion_Humidity_Sensors_SHT21_Datasheet.pdf)

- L2 and L3 (on the transmitter) remain lit for 1 minute if radio quality is good
- L1, L2 and L3 (on the transmitter) remain lit for 1 minute if radio communication quality is poor.
- With a repeater, you can have L2 and L3 blinking on the transmitter, even though the data packet is correctly repeated

## temperature, humidity and CO2 Sensors

2 modes : calibration and communication

When powered, the sensor can be either in calibration or communication mode

mode | sequence
--|--
calibration |L1,L2,L3 blinks successively<br>then remain **all** lit for one minute
communication | L1,L2,L3 blink successively<br>L1 blink each 2 second<br>L3 remain lit if radio quality is good

If you are in calibration mode and want to enter communication mode (or vice versa), just power off the sensor for one-minute and power on.

[more info](long_range/enless_CO2.pdf)
