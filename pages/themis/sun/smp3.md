---
title: Themis/EmonCMS - using a SMP3 pyranometer
sidebar: themis_sidebar
permalink: Themis_smp3.html
---
## Using a SMP3 pyranometer to monitor infrared radiation

The Kipp and Zonen [SMP3-V](https://www.kippzonen.com/Product/201/SMP3-Pyranometer#.XncyLCODM2w) measures the infrared radiation 
(from 300 to 3000 nm). It is a full modbus device.

![Kipp N Zonen SMP3-V](SMP3-V.jpg)

### connection to a computer using a MOXA uport 1150

On a window desktop, go to the device manager and check that the Moxa works in RS485(2W)

Connect the SMP as follow :

![wiring](wiring.jpg)

Install the Kipp and Zonen Smart Explorer software, and connect to the device

![KZSE](smart_explorer_1.png)

### configuration for connection to the Themis RS485 bus

As the Enless radio receiver is the slave number 1 the Themis RS485 bus, we have to change the SMP3 modbus ID.
We can use the following settings :
- modbus ID : 2
- baudrate : 19200
- parity : None
- stop bits : 2

Please note that that factory configuration is :
- modbus ID : 1
- baudrate : 19200
- parity : even
- stop bits : 1

To fix the configuration in the SMP :
- change mode from normal network use to single instrument use
- go to the configuration tab
- press update

![fix1](smart_explorer_single_instrument_use.png)

![fix2](smart_explorer_modbus.png)

![fix3](smart_explorer_update.png)

### Connection to the Themis RS485 bus

