---
title:  "Lancer et arrêter l’historisation des données "
published: true
permalink: historisation.html
summary: "Pour lancer l'enregistrement des données mesurées par les capteurs, il suffit de suivre cette procédure"
tags: [learn, get_started, themis]
---

## Enregistrement

Après l’installation des capteurs et l’établissement de la connexion avec THEMIS, il est nécessaire de configurer l'enregistrement dans les flux pouf les données qud l'on souhaite suivre; sans cela, il sera simplement possible de voir les données en temps réel. 

Pour procéder à une historisation, cliquer sur la clé à droite de l’écran. 

![](images/post5/Clé_molette.PNG)

Une nouvelle fenêtre apparait ; il suffit de modifier le pas de temps que l’on souhaite pour la réception des données. 

![](images/post5/fréquence.PNG)

Le pas d'enregistrement doit être un multiple entier de l'intervalle auquel le capteur transmet ses données : si le capteur est configuré pour transmettre une mesure toutes les 5 minutes, le pas doit être fixé à 5 ou 10 minutes, mais en aucun cas à 60 secondes. 

Pour valider, on clique sur <span class="label label-info">Add</span> et <span class="label label-info">Save</span>

L’enregistrement est alors actif (« log » apparait à côté de la donnée) et les flux apparaissent désormais dans l’onglet Feeds. Il est ici possible de modifier les flux, et notamment de les renommer : sélectionner les flux souhaités, aller dans « Edit » et renommer le flux. Cela peut être le n° de bureau ou de logement instrumenté par exemple. 

## Arrêt de l’enregistrement 

Il suffit de de cliquer sur la clé à molette au niveau de l'input, puis on jette le process à la poubelle. Si on veut poursuivre la récupération des données de ce capteur sous la forme d’un autre flux (changement de localisation du capteur par exemple), on en recrée un nouveau dans la foulée en suivant la procédure ci-dessus.

A noter : on ne perd les données enregistrées que quand on supprime un flux, ce qui se fait dans l'onglet feeds. L’arrêt de l’historisation se fait dans l'onglet inputs. 
