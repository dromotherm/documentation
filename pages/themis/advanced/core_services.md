---
title: core services
sidebar: themis_sidebar
permalink: core_services.html
---

A factory THEMIS machine is generally in standby mode.

Once the THEMIS machine booted, you have to choose and activate the services you need.

Standalone python sniffers are in the hardware folder service :

```
cd /opt/openenergymonitor/BIOS2/hardware
```
A convenient way to run them is to use docker containers.

## over the air (ota) radio service

{% include tip.html content="<br>
On the enless radio receiver, adjust the position of the DIP switches as follow :
<br><br>
- DIP1 : 1,2,3,4 OFF **5,6 ON**<br>
- DIP2 : 1,2,3 OFF
<br><br>
Power the receiver with the green power connector using a 12 or 24V power supply. If receiver is only powered through USB connector, it can be damaged.<br><br>
Connect the receiver to the emonpi/BIOS machine via USB.
<br><br>
Launch `python3 ota2.py` to create a `ota2.conf` file in the hardware folder."
%}

## modbus RTU/TCP sniffer

{% include tip.html content="<br>
Just launch modbus.py, it will create a sample conf file if it does not exist : 
<br><br>
- `python3 modbus.py --mode=tcp` in TCP mode<br>
- `python3 modbus.py --mode=multitcp` if you plan to target multiple modbus TCP servers<br>
- `python3 modbus.py --mode=rtu` or simply `python3 modbus.py` in RTU mode
<br><br>
**As far as TCP mode is concerned, please note you have to adjust the IP address (field modbus_IP) and the port number (field tcp_port) in the conf file.**" %}

## using the makefile and systemd

If you you want to manage the services through systemd, install the service with the makefile : `make install ota2`, and remove with : `make uninstall ota2`. Please note that during the installation process, the conf file is copied by the makefile to the `/etc/conf/bios` folder

Same for modbus, install with `make install modbus` in RTU mode or `make install modbus mode=tcp` in TCP mode. To remove : `make uninstall modbus`

Supposing you already operate a RTU bus on your THEMIS machine and want to interrogate a PLC using the modbus TCP protocol. Systemd will not permit you to create a second service named modbus, so you have to give a `label` argument to the makefile. Create a conf file with a name mixing the word `modbus` and the target label, here `tcp`:

```
python3 modbus.py --conf=modbustcp.conf --mode=tcp
```
To install, A SINGLE INSTRUCTION : `make install modbus label=tcp mode=tcp`

To remove : `make uninstall modbus label=tcp` or simply `make uninstall name=modbustcp`

