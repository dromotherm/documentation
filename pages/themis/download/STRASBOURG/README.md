# Architecture LAN

## Primary

192.168.2.1 : adresse du routeur quant on est connecté en WIFI

DHCP Client : disabled

le raspberry `MAC b8:27:eb:de:87:48` a un bail fixe sur 192.168.2.2

IP Pool de 192.168.2.3 à 192.168.2.254

## secondary

DHCP Client : enabled

default gateway : 192.168.1.1

la case "Enable dynamic DHCP leases" n'est pas cochée

## NAT

Configuration > NAT : on coche les cases `Enable remote HTTP access on port 80` et surtout `Enable remote HTTPS access on port 443`

## Synthèse

**Cette configuration secondaire permet d'utiliser le second port éthernet à un réseau de type livebox, configuré en 192.168.1.1, ce qui est utile pour disposer d'un accès internet quant il n'y a pas de carte SIM dans le routeur** 

Nota : quant on n'a pas de carte SIM dans le routeur, il faut aller dans Configuration > Mobile WAN, et décocher la case "create connection to mobile network". Sinon le routeur va chercher à établir une connection en permanence.

# dyndns (quant le routeur contient une SIM)

Configuration > Service > DynDNS

la case "Enable DynDNS Client" est cochée

Hostname : dromotherm.ddns.net
