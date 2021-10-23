---
title:  "Comment effacer des valeurs aberrantes"
published: true
permalink: correct_feeds.html
image: images/post3/error.png
summary: "Quand la qualité radio n'est pas au rendez-vous et que des valeurs aberrantes viennent s'enregistrer, il peut être utile de les effacer."
tags: [learn, get_started, themis]
---
Dans certains cas (problème de transmission, batterie faible...), les mesures enregistrées par les capteurs peuvent prendre des valeurs incohérentes. L'interface Themis permet de les corriger directement. 

Pour cela, il suffit de rejoindre l'onglet visualisations, sélectionner `edit real time` et choisir le flux de valeur correspondant au capteur en cause, comme présenté dans la capture ci-dessous. 

![](images/post3/visualisation.png)

Ensuite, il faut cliquer sur <span class="label label-info">full screen</span>. Dans la nouvelle fenêtre qui s'ouvre, il faut alors localiser la période de bug et zoomer dessus avec la souris de façon à n'avoir dans la fenêtre plus que cette erreur. 

Enfin, il suffit de saisir NAN dans l'input `multiply data in the window by a float or a fraction` puis valider par <span class="label label-info">save</span>. La capture ci-dessous illustre ces étapes. 

![](images/post3/correction.png)

Comme mesure de prévention afin d'éviter ces corrections fastidieuses, on peut mettre en place un process à l'historisation.

![](images/post3/prevention_aberrations_1.png)
![](images/post3/prevention_aberrations_2.png)
