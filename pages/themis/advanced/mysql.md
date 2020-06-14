# En cas de crash de raspbian et si on a oublié de faire un backup, on peut toujours récupérer les données et recréer un serveur

**Prérequis : une station linux Ubuntu !!!**

On copie les fichiers dat et meta dans un répertoire sur une station linux

On se place dans ce répertoire

On insère dans la machine linux une carte SD qui contient un système emoncms vierge

Le répertoire `/var/opt/emoncms` de cette carte, qui est destiné à héberger les datas, est monté dans `/media/alexandrecuer/00c03d3b-ec3e-4b4a-b7d3-3fb3a1cdc01a`

```
sudo cp * /media/alexandrecuer/00c03d3b-ec3e-4b4a-b7d3-3fb3a1cdc01a/phpfina
cd /media/alexandrecuer/00c03d3b-ec3e-4b4a-b7d3-3fb3a1cdc01a/phpfina
sudo chown www-data:www-data *
ls -al
```
On obtient le retour suivant :

```
-rw-r--r-- 1 www-data      www-data      4532560 avril 19 18:14 10.dat
-rw-r--r-- 1 www-data      www-data           16 avril 19 18:13 10.meta
-rw-r--r-- 1 www-data      www-data      4532504 avril 19 18:13 11.dat
-rw-r--r-- 1 www-data      www-data           16 avril 19 18:12 11.meta
-rw-r--r-- 1 www-data      www-data      4532504 avril 21 22:28 13.dat
-rw-r--r-- 1 www-data      www-data           16 avril 21 22:28 13.meta
-rw-r--r-- 1 www-data      www-data      4532504 avril 21 22:39 14.dat
-rw-r--r-- 1 www-data      www-data           16 avril 21 22:39 14.meta
-rw-r--r-- 1 www-data      www-data      4532504 avril 22 14:14 16.dat
-rw-r--r-- 1 www-data      www-data           16 avril 22 14:14 16.meta
-rw-r--r-- 1 www-data      www-data        98892 juin  14 14:59 1.dat
-rw-r--r-- 1 www-data      www-data           16 mars  20 17:51 1.meta
-rw-r--r-- 1 www-data      www-data        98892 juin  14 14:59 2.dat
-rw-r--r-- 1 www-data      www-data           16 mars  20 17:51 2.meta
-rw-r--r-- 1 www-data      www-data      2898456 juin  14 14:59 4.dat
-rw-r--r-- 1 www-data      www-data           16 mars  22 17:11 4.meta
-rw-r--r-- 1 www-data      www-data      2898364 juin  14 14:59 5.dat
-rw-r--r-- 1 www-data      www-data           16 mars  22 17:16 5.meta
-rw-r--r-- 1 www-data      www-data      2892960 juin  14 14:59 6.dat
-rw-r--r-- 1 www-data      www-data           16 mars  22 21:01 6.meta
-rw-r--r-- 1 www-data      www-data      4532576 avril 19 18:12 7.dat
-rw-r--r-- 1 www-data      www-data           16 avril 19 18:12 7.meta
-rw-r--r-- 1 www-data      www-data      4532572 avril 19 18:15 8.dat
-rw-r--r-- 1 www-data      www-data           16 avril 19 18:14 8.meta
-rw-r--r-- 1 www-data      www-data      4532572 avril 19 18:14 9.dat
-rw-r--r-- 1 www-data      www-data           16 avril 19 18:14 9.meta
```

On peut désormais démonter la carte SD, la replacer dans le rapsberry et le rebooter

```
cd /var/opt/emoncms
nano restore_feeds.sql
```

On injecte dans ce fichier les commandes suivantes :
```
LOCK TABLES `feeds` WRITE;
/*!40000 ALTER TABLE `feeds` DISABLE KEYS */;
INSERT INTO `feeds` VALUES 
(1,'feed1',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(2,'feed2',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(4,'feed4',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(5,'feed5',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(6,'feed6',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(7,'feed7',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(8,'feed8',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(9,'feed9',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(10,'feed10',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(11,'feed11',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(13,'feed13',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(14,'feed14',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,''),
(16,'feed16',1,'restore',NULL,NULL,1,1,15542244,5,0,NULL,'');
/*!40000 ALTER TABLE `feeds` ENABLE KEYS */;
UNLOCK TABLES;
```

On exécute ces commandes de la manière suivante :

```
mysql -u emoncms -pemonpiemoncmsmysql2016 emoncms < restore_feeds.sql
```

Nota : si on veut au préalable vérifier la structure de la tables feeds :

```
mysql -u emoncms -pemonpiemoncmsmysql2016

MariaDB [(none)]> USE emoncms

Database changed
MariaDB [emoncms]> show tables;
+-------------------+
| Tables_in_emoncms |
+-------------------+
| app_config        |
| dashboard         |
| demandshaper      |
| device            |
| feeds             |
| graph             |
| input             |
| multigraph        |
| postprocess       |
| rememberme        |
| schedule          |
| setup             |
| sync              |
| users             |
+-------------------+
14 rows in set (0.001 sec)

MariaDB [emoncms]> describe feeds;
+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| id          | int(11)     | NO   | PRI | NULL    | auto_increment |
| name        | text        | YES  |     | NULL    |                |
| userid      | int(11)     | YES  |     | NULL    |                |
| tag         | text        | YES  |     | NULL    |                |
| time        | int(10)     | YES  |     | NULL    |                |
| value       | double      | YES  |     | NULL    |                |
| datatype    | int(11)     | NO   |     | NULL    |                |
| public      | tinyint(1)  | YES  |     | 0       |                |
| size        | int(11)     | YES  |     | NULL    |                |
| engine      | int(11)     | NO   |     | 0       |                |
| server      | int(11)     | NO   |     | 0       |                |
| processList | text        | YES  |     | NULL    |                |
| unit        | varchar(10) | YES  |     |         |                |
+-------------+-------------+------+-----+---------+----------------+
13 rows in set (0.007 sec)
```

On peut dès lors reprendre les noms de flux, les unités via emoncms

```
mysql -u emoncms -pemonpiemoncmsmysql2016
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 571
Server version: 10.3.22-MariaDB-0+deb10u1 Raspbian 10

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> USE emoncms
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
MariaDB [emoncms]> select * from feeds;
+----+--------------+--------+---------+------+-------+----------+--------+---------+--------+--------+-------------+------+
| id | name         | userid | tag     | time | value | datatype | public | size    | engine | server | processList | unit |
+----+--------------+--------+---------+------+-------+----------+--------+---------+--------+--------+-------------+------+
|  1 | T int        |      1 | restore | NULL |  NULL |        1 |      1 |   98908 |      5 |      0 | NULL        | °C   |
|  2 | RH int       |      1 | restore | NULL |  NULL |        1 |      1 |   98908 |      5 |      0 | NULL        | %    |
|  4 | glob_sun_rad |      1 | restore | NULL |  NULL |        1 |      1 | 2898472 |      5 |      0 | NULL        | W/m2 |
|  5 | feed5        |      1 | restore | NULL |  NULL |        1 |      1 | 2898380 |      5 |      0 | NULL        |      |
|  6 | feed6        |      1 | restore | NULL |  NULL |        1 |      1 | 2892976 |      5 |      0 | NULL        |      |
|  7 | feed7        |      1 | restore | NULL |  NULL |        1 |      1 | 4532592 |      5 |      0 | NULL        |      |
|  8 | feed8        |      1 | restore | NULL |  NULL |        1 |      1 | 4532588 |      5 |      0 | NULL        |      |
|  9 | feed9        |      1 | restore | NULL |  NULL |        1 |      1 | 4532588 |      5 |      0 | NULL        |      |
| 10 | feed10       |      1 | restore | NULL |  NULL |        1 |      1 | 4532576 |      5 |      0 | NULL        |      |
| 11 | feed11       |      1 | restore | NULL |  NULL |        1 |      1 | 4532520 |      5 |      0 | NULL        |      |
| 13 | feed13       |      1 | restore | NULL |  NULL |        1 |      1 | 4532520 |      5 |      0 | NULL        |      |
| 14 | feed14       |      1 | restore | NULL |  NULL |        1 |      1 | 4532520 |      5 |      0 | NULL        |      |
| 16 | feed16       |      1 | restore | NULL |  NULL |        1 |      1 | 4532520 |      5 |      0 | NULL        |      |
+----+--------------+--------+---------+------+-------+----------+--------+---------+--------+--------+-------------+------+
13 rows in set (0.001 sec)
```
