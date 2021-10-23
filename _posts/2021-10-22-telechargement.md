---
title:  "Télécharger et sauvegarde des jeux de données "
published: true
permalink: telechargement.html
summary: "Les données enregistrées peuvent être téléchargées pour des traitement via d'autres logiciels. Il faut aussi penser à effectuer des sauvegardes."
tags: [learn, get_started, themis]
---

Pour télécharger des données, plusieurs méthodes sont possibles.

## Onglet Graphs
La plus directe est de passer par l’onglet Graphs, de cocher les données d’intérêt et les périodes souhaitées et de télécharger ensuite les données au format .csv. Il est ici possible aussi de choisir la précision de la mesure que l’on veut, en sélectionnant dans DP le nombre souhaité de chiffre après la virgule.  

![](images/post8/csv.PNG)

## Onglet Feeds

![](images/post6/export_feed_1.png)
![](images/post6/export_feed_2.png)

## Sauvegarde
Autre méthode, qui sert également pour faire une sauvegarde des données enregistrées. 

Il faut cette fois aller sur l’onglet Bios, puis API Help > Backup

1) on lance un backup via le lien 2 (« générer un backup »)

2) on utilise le lien 3 « vérifier le backup » pour contrôler l'avancement (actualiser de temps en temps le chemin). La fin du backup est indiquée par `===Emoncms export complete ! ===`

3) On utilise le lien 1 « télécharger le dernier backup » pour récupérer l'archive

![](images/post8/backup.PNG)
