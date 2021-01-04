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
```

Télécharger un fichier quant ssh est activé : utilisation de la commande scp.

Il faut connaître l'emplacement du fichier sur la machine distante, içi `/var/log/bios/bios.log.1`
Le `.` à la fin de la commande signifie que le fichier téléchargé sera dans le répertoire courant
```
scp user@176.149.2.179:/var/log/bios/bios.log.1 .
```
