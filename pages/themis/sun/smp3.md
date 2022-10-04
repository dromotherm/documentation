---
title: using a SMP3 pyranometer to monitor infrared radiation
sidebar: themis_sidebar
permalink: Themis_smp3.html
---

The Kipp and Zonen [SMP3-V](https://www.kippzonen.com/Product/201/SMP3-Pyranometer#.XncyLCODM2w) measures the infrared radiation 
(from 300 to 3000 nm). It is a full modbus device.

![Kipp N Zonen SMP3-V](SMP3-V.jpg)

### connection to a computer using a MOXA uport 1150

On a window desktop, go to the device manager and check that the Moxa works in RS485(2W)

The SMP comes with a 8-wire cable :
- 1 - red : Not used
- 2 - blue : MODBUS GND
- 3 - green : analogue out
- 4 - yellow : MODBUS B+
- 5 - grey - MODBUS A-
- 6 - brown : analogue ground
- 7 - white : VCC (12 ACDC)
- 8 - black : GROUND

Connect the SMP as follow :

![wiring](wiring.jpg)

Install the Kipp and Zonen Smart Explorer software, and connect to the device

![KZSE](smart_explorer_1.png)

### configuration

As the Enless radio receiver is the slave number 1 on the Themis RS485 bus, we have to change the SMP3 modbus ID.
We can use the following settings :
- **modbus ID : 3**
- **baudrate : 9600**
- **parity : None**
- **stop bits : 1**

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

### Connection to a RS485 bus

![fix1](connect_to_SR303.jpg)

### modbus registers

| modbus_register| parameter | Name | Description |
|--------|--------|--------|--------|
| 0 | IO_DEVICE_TYPE | DevType | type of the sensor |
| 1 | IO_DATAMODEL_VERSION | DataSet | Version of the object data model |
| 2 | IO_OPERATIONAL_MODE | DevMode |Operational mode: normal, service, calibration and so on |
| 3 | IO_STATUS_FLAGS | Status | Device Status flags |
| 4 | IO_SCALE_FACTOR | Range | Range and scale factor sensor data (determines number of decimal places) |
| 5 | IO_SENSOR1_DATA | Sensor1 | Temperature compensated radiation in W/m2 (Net radiation for SGR) |
| 6 | IO_RAW_SENSOR1_DATA | RawData1 | Net radiation (sensor 1) in W/m2 |
| 7 | IO_STDEV_SENSOR1 | StDev1 | Standard deviation IO_SENSOR1_DATA |
| 8 | IO_BODY_TEMPERATURE | BodyTemp | temperature in 0.1 °C |
| 9 | IO_EXT_POWER_SENSOR | VSupply | External power voltage |
