---
title: Themis/EmonCMS - using a SMP3 pyranometer
sidebar: themis_sidebar
permalink: Themis_smp3.html
---
## Using a SMP3 pyranometer to monitor infrared radiation

The Kipp and Zonen [SMP3-V](https://www.kippzonen.com/Product/201/SMP3-Pyranometer#.XncyLCODM2w) measures the infrared radiation 
(from 300 to 3000 nm). It is a full modbus device.



Installing the smart explorer software, and connect to the device

### configure the SMP3 in order to be connected to Themis RS485 bus

As the Enless radio receiver is the slave number on the Themis RS485 bus, we have to change the SMP3 modbus ID.
We can use the following settings :
- modbus ID : 2
- baudrate : 19200
- parity : None
- stop bits : 2
