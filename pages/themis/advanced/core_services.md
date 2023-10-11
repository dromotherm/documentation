---
title: core services
sidebar: themis_sidebar
permalink: core_services.html
---


All the sofware you need is preinstalled on the SD card but by default, THEMIS is in standby mode.

Once the THEMIS machine booted with a freshly burned SD card, you can choose and activate the services you need.

To achieve this, just establish a SSH connection and move to the hardware folder service :

```
cd /opt/openenergymonitor/BIOS2/hardware
```

## over the air (ota) radio service

{% include note.html content="
On the enless radio receiver, adjust the position of the DIP switches as follow :
<br><br>
- DIP1 : 1,2,3,4 OFF **5,6 ON**<br>
- DIP2 : 1,2,3 OFF
<br>
Connect the receiver to the emonpi/BIOS machine via USB.
<br><br>
Launch `./ota2.py` to create a `ota2.conf` file in the hardware folder."
%}

If you you want to manage the services through systemd, install the service with the makefile : `make install ota2`, and remove the radio service with : `make uninstall ota2`. Please note that during the installation process, the conf file is copied by the makefile to the `/etc/conf/bios` folder

## modbus RTU/TCP sniffer

Just launch modbus.py to create a sample conf file : 

- `./modbus.py --mode=tcp` in TCP mode
- `./modbus.py --mode=multitcp` if you plan to target multiple modbus TCP servers 
- `./modbus.py --mode=rtu` or simply `./modbus.py` in RTU mode

If you want to manage your services through systemd, install the service with `make install modbus` in RTU mode or `make install modbus mode=tcp` in TCP mode. To remove the service : `make uninstall modbus`

Supposing you already operate a RTU bus on your THEMIS machine and you want to interrogate a PLC using the modbus TCP protocol. Systemd will not permit you to create a second service named modbus, so you have to give a `label` argument to the makefile. Create a conf file with a name mixing the word `modbus` and the target label, here `tcp`:

```
./modbus.py --conf=modbustcp.conf --mode=tcp
```
To install, A SINGLE INSTRUCTION : `make install modbus label=tcp mode=tcp`

To remove : `make uninstall modbus label=tcp` or simply `make uninstall name=modbustcp`

{% include note.html content="**As far as TCP mode is concerned, please note you have to adjust the IP address and the port number in the common section of the conf file.**" %}

