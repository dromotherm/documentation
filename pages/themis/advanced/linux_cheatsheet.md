Voir le partionnement du disque dur

```
df -h
```

Vérifier le modèle de raspberry : `cat /proc/device-tree/model` ou `pinout`


Vérifier l'état des services, gérés par systemd

```
systemctl status
systemctl status bios
journalctl -f -u bios
sudo systemctl daemon-reload
```

Télécharger un fichier quant ssh est activé : utilisation de la commande scp.

Il faut connaître l'emplacement du fichier sur la machine distante, içi `/var/log/bios/bios.log.1`
Le `.` à la fin de la commande signifie que le fichier téléchargé sera dans le répertoire courant
```
scp user@176.149.2.179:/var/log/bios/bios.log.1 .
```

pour créer un utilisateur avec des privilèges particuliers sur le port série : 
```
sudo useradd -M -r -G dialout,tty -c "emonHub user" emonhub
```

Si l'utilisateur est existant : 
```
sudo usermod -a -G dialout,tty alexandrecuer
```
il y a aussi la commande adduser :
```
sudo adduser alexandrecuer dialout
```
pour lister les groupes et les utilisateurs qu'ils contiennent :
```
cat /etc/group
```

pour ajouter un répertoire dans le path, içi celui de platformio :
```
cd ~
nano .profile
```
a la fin, on rajoute la ligne suivante :

```
PATH=$PATH:/home/pi/.platformio/penv/bin
```

