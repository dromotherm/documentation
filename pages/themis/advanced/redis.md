# Utilisation de la ligne de commande redis

## les commandes redis 

datatype | lister tous les éléments | ajout d'un élément
--|--|--
hash| hgetall | hset
set ou liste | smembers | sadd
key | get | set

## fonctionnement d'EmonCMS

la route `feed/list.json` du contrôleur feed fait appel à la méthode `get_user_feeds` du modèle `feed` qui lance la méthode `redis_get_user_feeds`. Cette dernière s'occupe du chargement des numéros de flux de l'utilisateur dans la liste redis `user:feeds:1` via la méthode privée `load_to_redis` uniquement si la liste est vide :
```
if (!$this->redis->exists("user:feeds:$userid")) $this->load_to_redis($userid);
```

## application à THEMIS/BIOS

Il peut-être assez essentiel sur le terrain de vérifier ce que la base redis a en mémoire.

En effet, EmonCMS n'est pour l'instant pas tout à fait conçu pour parfaitement exploiter les flux redis temporaires que THEMIS/BIOS utise pour les prévisions météo. 

Il a été prévu que ces flux temporaires soient visualisables par EmonCMS, pour pouvoir comparer les données chaudes de prévisions avec les données froides de la vérité terrain, stockées dans des flux PHPFINA....

En cas de crash d'EmonCMS (ultra rare), il peut arriver que les flux de prévisions météo soient reconstruits et attribués à l'utilisateur 1 (le maître sur un serveur EmonCMS) avant que le serveur EmonCMS ait eu le temps de mettre à jour la liste redis `user:feeds:1` depuis la base MYSQL.

Vu l'architecture du module feed d'EmonCMS, il n'est pas prévu de routine pour mettre à jour la liste redis `user:feeds:1` dès lors qu'elle existe. 
On se contente d'ajouter des éléments dans la pile...

Si la liste redis `user:feeds:1` ne contient pas les numéros de flux des données froides, ceux-ci ne seront pas listés sur la page feed, ni par le module graph

**La solution est d'arrer BIOS, de faire un flush de la base redis depuis la page admin d'emoncms, qui va reconstruire les clés, puis de redémarrer BIOS.**

Avant de rebooter, il faut vérifier le contenu de la liste redis `user:feeds:1`. 

En mode développement, on peut vérifier avec phpRedisAdmin par exemple, mais en mode exploitation sur le terrain, ce n'est pas envisageable

On utilisera donc la ligne de commande :

```
redis-cli
```
Une fois connecté, on lance une commande smembers :
```
smembers user:feeds:1
```
Si on obtient quelque chose mélangeant une numérotation depuis 1 et des numéros de type unix timestamp, c'est que tout va bien 
```
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
6) "6"
7) "7"
8) "8"
9) "9"
10) "10"
11) "11"
12) "12"
13) "13"
14) "14"
15) "15"
16) "16"
17) "17"
18) "18"
19) "19"
20) "20"
21) "21"
22) "22"
23) "23"
24) "24"
25) "25"
26) "26"
27) "27"
28) "28"
29) "29"
30) "31"
31) "32"
32) "33"
33) "34"
34) "35"
35) "36"
36) "37"
37) "38"
38) "39"
39) "40"
40) "45"
41) "46"
42) "47"
43) "48"
44) "49"
45) "50"
46) "51"
47) "52"
48) "53"
49) "54"
50) "55"
51) "56"
52) "57"
53) "58"
54) "59"
55) "60"
56) "61"
57) "62"
58) "63"
59) "66"
60) "68"
61) "70"
62) "76"
63) "80"
64) "81"
65) "82"
66) "83"
67) "84"
68) "85"
69) "1606744369"
70) "1606744371"
71) "1606744373"
72) "1606744375"
```

Si on obtient uniquement des timestamps, c'est qu'il y a un problème :
```
1) "1606688283"
2) "1606688285"
3) "1606688287"
4) "1606688289"
5) "1606716002"
6) "1606716005"
7) "1606716007"
8) "1606730401"
9) "1606730405"
10) "1606730406"
```


