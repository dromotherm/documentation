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

if your themis IP is 192.168.1.37, just browse to https://192.168.1.37:1880

NodeRED is composed of nodes which you can find in the left column of the dashboard

We will use the following ones :

node name | action
--|--
inject | triggers the actions according to a regular time step
openweathermap | interrogate the OWM API - **requires the OWM API key**
function | javaScript function to produce a json object with the datas from the payload transmitted by openweathermap
emoncms | posts the json object to Emoncms - **requires the emonCMS write API key**
debug | displays selected message in the debug sidebar tab.

![nodeRED most basic nodes](images/post1/basicnodes.png)

At its final stage, the flow should look like that :

![the flow](images/post1/weatherflow.png)

{% include note.html content="Once configuration completed, don't forget to deploy (red button at the top right)" %}

### inject and OWM nodes configuration

Just define a polling interval (here 30 minutes) and enter your city name....

![nodes configuration part 1](images/post1/config_1.png)

An alternative is to provide geographic coordinates (latitude and longitude)

### emoncms node configuration

If your local emonCMS/themis server has not been configured, you have to do it providing its write API key.

To publish, the node needs a node number or string : just give `emonpi`...

![nodes configuration part 2](images/post1/config_2.png)

you can find the emonCMS API key within the account details

![emoncms API key](images/post1/emonAPIkeys.png)

### function node configuration

Use the following javascript code :

```
tempc = msg.payload.tempc;
hum = msg.payload.humidity;
msg = {temp_ext:parseInt(tempc),HR_ext:parseInt(hum)};
mytime = new Date().toISOString();
return {payload:msg, time: mytime};
```
## 3) check your values are coming in

Once the flow has been successfully deployed, you just have to browse themis inputs:

![emoncms inputs](images/post1/emonCMSinputs.png)

{% include links.html %}
