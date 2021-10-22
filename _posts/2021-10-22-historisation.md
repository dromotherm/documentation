---
title:  "Lancer et arrêter l’historisation des données "
published: true
permalink: historisation.html
summary: "Pour lancer l'enregistrement des données mesurées par les capteurs, il suffit de suivre cette procédure"
tags: [learn, get_started, themis]
---

## Enregistrement

Après l’installation des capteurs et l’établissement de la connexion avec THEMIS, il est nécessaire de construire les données que l’on souhaite suivre et enregistrer ; sans cela, il sera simplement possible de voir les données en temps réel. 

Pour cela, cliquer sur la clé à droite de l’écran (1). Une nouvelle fenêtre apparait ; il suffit de modifier le pas de temps que l’on souhaite pour la réception des données (2). Le pas d'enregistrement doit être un multiple entier de l'intervalle auquel le capteur transmet ses données : si le capteur est configuré pour transmettre une mesure toutes les 5 minutes, le pas doit être fixé à 5 ou 10 minutes, mais en aucun cas à 60 secondes. Puis « Add » and « Save ». 

![](images/post5/clé_molette.png)

![](images/post5/fréquence.png)

L’enregistrement est alors actif (« log » apparait à côté de la donnée) et les flux apparaissent désormais dans l’onglet Feeds. Il est ici possible de modifier les flux, et notamment de les renommer : sélectionner les flux souhaités, aller dans « Edit » et renommer le flux. Cela peut être le n° de bureau ou de logement instrumenté par exemple. 

## Arrêt de l’enregistrement 

Il suffit de de cliquer la clé à molette au niveau de l'input, puis on jette le process à la poubelle. Si on veut poursuivre la récupération des données de ce capteur sous la forme d’un autre flux (changement de localisation du capteur par exemple), on en recrée un nouveau dans la foulée en suivant la procédure ci-dessus.

A noter : on ne perd les données enregistrées que quand on supprime un flux, ce qui se fait dans l'onglet feeds. L’arrêt de l’historisation se fait dans l'onglet inputs. 