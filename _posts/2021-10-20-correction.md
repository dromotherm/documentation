---
title:  "Comment effacer des valeurs aberrantes"
published: true
permalink: correct_feeds.html
summary: "Quand la qualité radio n'est pas au rendez-vous et que des valeurs aberrantes viennent s'enregistrer, il peut être utile de les effacer."
tags: [learn, get_started, themis]
---
Dans certains cas (problème de transmission, batterie faible...), les mesures enregistrées par les capteurs peuvent prendre des valeurs incohérentes. L'interface Themis permet de les corriger directement. 

Pour cela, il suffit de suivre la procédure suivante : rejoindre l'onglet visualisations, sélectionner edit real time et choisir le flux de valeur correspondant au capteur en cause, comme présenté dans la capture ci-dessous. 

![](images/post3/visualisation.png)

Ensuite, il faut cliquer sur "full screen". Dans la nouvelle fenêtre qui s'ouvre, il faut alors localiser la période de bug et zoomer dessus avec la souris de façon à n'avoir dans la fenêtre plus que cette erreur. Enfin, il suffit d'écrire NAN dans l'input "multiply data in the window by a float or a fraction" puis faire "save". La capture ci-dessous illustre ces étapes. 

![](images/post3/correction.png)

