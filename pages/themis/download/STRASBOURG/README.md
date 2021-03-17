# Architecture LAN

## Primary

192.168.2.1 : adresse du routeur quant on est connecté en WIFI

DHCP Client : disabled

le raspberry (MAC b8:27:eb:de:87:48) a un bail fixe sur 192.168.2.2

IP Pool de 192.168.2.3 à 192.168.2.254

## secondary

DHCP Client : enabled

default gateway : 192.168.1.1

la case "Enable dynamic DHCP leases" n'est pas cochée

**Cette configuration secondaire permet d'utiliser le second port éthernet à un réseau de type livebox, configuré en 192.168.1.1, ce qui est utile pour disposer d'un accès internet quant il n'y a pas de carte SIM dans le routeur** 
