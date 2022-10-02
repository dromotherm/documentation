---
title: Overview - what is Themis ? 
sidebar: themis_sidebar
permalink: Themis_overview.html
toc: false
summary: Themis is dedicated to the management of energy in large tertiary buildings. Themis is short for THermic and Energetic MonItoring System as it started as a monitoring system only. It can now act as a full Building Management System (BMS) and the system is now referred to as THEMIS/BIOS, the BIOS acronym standing for Building Intelligent Operating System .
---

![the basic kit](basic_kit.jpg)

## the Themis basic monitoring kit
### indoor temperature and humidity sensors (x10) plus outside temperature sensor (x1)

![TRH sensors](TRH_indoor_outside.jpg)

### radio energy sensing node, to monitor electric current (x3) and voltage (x1)

![emonTx](emontx.jpg)

{% include note.html content="for real time supervision 24/24, Themis needs a M2M SIM (2FF mini)<br> 
Please note Themis is shipped without any SIM card !<br>
You will need to purchase the SIM card separately. <b>A SIM with public IP address is strongly recommended</b>" %}

M2M : {{site.data.glossary.M2M}}

### the Themis box , ie the "heart" of the system containing all devices necessary for datas aggregation and online availability in real time

![themis](themis_000051.png)

In the basic edition, the Themis box includes :

- a radio receiver 169 Mhz for the link with the temperature sensors
- a 4G router
- an emonPI, dedicated to data recording and featuring a 868 Mhz radio receiver to catch data from power consumption sensors (electrical)

{% include note.html content="All Themis software is embedded on a SD card." %}


