---
title: Overview - what is Themis ? 
sidebar: themis_sidebar
permalink: Themis_overview.html
summary: Themis is dedicated to the monitoring of large tertiary buildings.
---

The basic Themis kit contains :
- indoor temperature and humidity sensors (x10)
- outside temperature sensor (x1)
- a radio energy sensing node, to monitor electric current (x3) and voltage (x1)
- a box containing all devices necessary for datas aggregation and online availability in real time

{% include note.html content="for real time supervision 24/24, Themis needs a M2M SIM (2FF mini)" %}

M2M : {{site.data.glossary.M2M}}

![TRH sensors](TRH_indoor_outside.jpg)

![emonTx](emontx.jpg)

![themis](themis_000051.png)

In the basic edition, the themis box includes :

- a radio receiver 169 Mhz for the link with the temperature sensors
- a 4G router
- an emonPI, dedicated to data recording and featuring a 868 Mhz radio receiver to catch data from power consumption sensors (electrical)

All THEMIS software is embedded on a SD card.