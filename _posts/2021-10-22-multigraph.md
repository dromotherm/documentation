---
title:  "Construire un multigraphe puis un diagramme psychrométrique"
published: true
permalink: multigraph.html
summary: "L'interface THEMIS permet de réaliser des analyses de données, en particulier des diagrammes psychrométriques."
tags: [learn, get_started, themis]
---

## Le multigraphe

La fonction multigraphe permet de compiler plusieurs données en un graphe, pour l’exploiter ensuite. Pour construire ensuite un diagramme psychrométrique ensuite, il faut par exemple coupler pour chaque lieu instrumenté les données de température et d’humidité relative. Il est aussi possible de la faire pour plusieurs lieux (par exemple plusisuers bureaux dans un même bâtiment) ; pour cela, il faut injecter Tzone1, puis RHzone1, puis Tzone2 puis RHzone2, etc etc , dans cet ordre-là puis définir une couleur pour Tzone1 et RHzone1 (bleu) et une couleur pour Tzone2 et RHzone2 (vert) etc etc

![](images/post7/Multigraph.png)

## Diagramme psychrométrique 
Le diagramme psychrométrique permet d’afficher un diagramme de confort, de façon directe, qui consiste à l’affichage de l’humidité relative en fonction de la température. L’approche retenue ici est celle de Fauconnier, plutôt adaptée aux bureaux climatisés, dont les limites sont les suivantes : 

- Sommet bas/gauche 17°C, humidité absolue correspondant à 17°C 40%HR
- Sommet bas/droite 26°C, humidité absolue correspondant à 26°C 30%HR
- Sommet haut gauche 17°C, humidité absolue correspondant à 17°C 80%HR
- Sommet haut droite 26°C, humidité absolue correspondant à 26°C, 50%HR

Pour le construire, il suffit de sélectionner Psychrometric diagramm dans l’onglet Visualisation, de sélectionner le multigraph préalablement préparé, et afficher. Dans le cas d’un multigraph multizone, plusieurs nuages de points de différentes couleurs apparaitront.

![](images/post7/diag_confort.png)

