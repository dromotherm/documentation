---
title:  "Using openweathermap.org and Themis"
published: true
permalink: OWMwithThemis.html
summary: "How to start monitoring without a themis machine and without any sensor...."
tags: [learn, get_started, themis, nodeRED]
---
You have downloaded the themis image, but don't have any wired or wireless temperature sensor. 

No problem ! We'll use openweathermap and nodeRED, which is preinstalled on the themis image.

[openweathermap](https://openweathermap.org) provides current weather all over the world through a network of weather stations. Thanks to its API, it is very easy to integrate and historise datas from OWM into Themis. And everything is free !

## 1) create an OWM account

[sign up to OWM](https://home.openweathermap.org/users/sign_up)

You will need to choose a username and to provide a valid email address. Signup process as usual : the system will send you a confirmation email to activate your account.....

once logged in OWM, go to the `API keys` tab and copy the default key (generated during account activation

## 2) open nodeRED and construct a flow

if your themis IP is 192.168.1.2, just browse to https://192.168.1.2:1880





{% include links.html %}
