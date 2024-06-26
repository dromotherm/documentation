---
title:  "Effacer des valeurs aberrantes"
published: true
permalink: correct_feeds.html
---
Dans certains cas (problème de transmission, batterie faible...), les mesures enregistrées par les capteurs peuvent prendre des valeurs incohérentes. 

L'interface Themis permet de les corriger directement. 

Pour cela, il suffit de rejoindre l'onglet visualisations, sélectionner `edit real time` et choisir le flux correspondant au capteur en cause, comme présenté dans la capture ci-dessous. 

![](images/post3/visualisation.png)

Ensuite, il faut cliquer sur <span class="label label-info">full screen</span>. 

Dans la nouvelle fenêtre qui s'ouvre, il faut alors localiser la période de bug et zoomer dessus avec la souris de façon à n'avoir dans la fenêtre plus que cette erreur. 

Enfin, il suffit de saisir NAN dans l'input `multiply data in the window by a float or a fraction` puis valider par <span class="label label-info">save</span>. 

La capture ci-dessous illustre ces étapes. 

![](images/post3/correction.png)

## mise en place d'un process à l'historisation

La mise en place d'un process `skip next` qui permet de sauter l'enregistrement d'une valeur dès lors qu'elle dépasse un certain seuil est une mesure de prévention afin d'éviter ces corrections fastidieuses.

![](images/post3/prevention_aberrations_1.png)
![](images/post3/prevention_aberrations_2.png)
