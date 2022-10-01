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

On the enless radio receiver, adjust the position of the DIP switches as follow :

- DIP1 : 1,2,3,4 OFF **5,6 ON**
- DIP2 : 1,2,3 OFF

Connect the receiver to the emonpi/BIOS machine via USB.

Launch `./ota2.py` to create a `ota2.conf` file in the hardware folder.
During the installation process, this conf file will be copied by the makefile to the `/etc/conf/bios` folder

Install the service with the makefile :

```
make install name=ota2
```
To remove the radio service :

```
make uninstall name=ota2
```
## modbus RTU and TCP sniffer

Just launch modbus.py to create a sample conf file : 

- `./modbus.py --mode=tcp` in TCP mode
- simply `./modbus.py` or `./modbus.py --mode=rtu` in RTU mode

To install the service :

- `make install name=modbus` in RTU mode
- `make install name=modbus mode=tcp` in TCP mode

To remove the service :

```
make uninstall name=modbus
```

Supposing you already operate a RTU bus on your THEMIS machine and you want to interrogate a PLC using the modbus TCP protocol. systemd will not permit you to create a second service named modbus, so you have to give a `label` argument to modbus.py.

```
./modbus.py --conf=modbustcp.conf --mode=tcp
```
To install, A SINGLE INSTRUCTION :

```
make install name=modbus label=tcp mode=tcp
```

To remove : `make uninstall name=modbus label=tcp` or simply `make uninstall name=modbustcp`

**As far as TCP mode is concerned, please note you have to adjust the IP address and the port number in the common section of the conf file.**
