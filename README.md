# Charleville à vélo à vélo 🚲
 
<img src="https://github.com/Flav-ien/Charleville-a-velo/blob/master/img/opengraph.png" width="300"/>

Charleville à vélo est une carte de Charleville et des alentours, montrant comme seules informations les temps de parcours à vélo entre divers points d’intérêt de la région carolomacérienne. C'est un fork d'une carte "Paris à vélo" proposée par @Joachimesque

Les points sont choisis pour leur pertinence. Ce sont des gares, des points reconnus (ex: place Ducale, CHU Manchester, etc), des points de passages obligés (ponts sur la Meuse et enjambant les voies ferrées, place ou carrefour central d'un village). De manière générale ces points sont situés dans des carrefours routiers pour que les distances cumulées soient calculées de la façon la plus juste possible.

↓↓ Ci après Readme de @joachimesque non modifié ↓↓

Les temps de trajets sont renseignés au début à titre indicatif, mais sont destinés à être affinés avec le temps, pour correspondre le plus possible à l’expérience de cyclistes normaux. Pas des bêtes de course ou des vélos à assistance électrique. Je tiens en créant ce projet à être le plus utile possible aux nouvelles (et nouveaux) cyclistes, qui viennent juste de sortir leur vélo de la cave, de l’asso, ou du bouclard.

## Transposer cette carte pour une autre ville

Pour adapter cette page à une autre ville, c’est assez simple à condition de connaitre le HTML et des bases de JS. Tout le code présent est réutilisable, à condition de respecter la [license GNU General Public License v3.0](https://github.com/joachimesque/paris-a-velo/blob/master/LICENSE), c’est à dire qu’il est obligatoire de repartager tout code fait à partir de celui-ci sous la même license.

### Fond de carte

Le fond de carte est contenu dans l’élément SVG `g#bg_map`, qui est le premier élément du `svg#map` dans le fichier `index.html`. Ce contenu SVG a été généré par un programme d’édition vectoriel (Affinity Designer en l’occurence, mais Adobe Illustrator, Sketch ou [Inkscape](https://inkscape.org/fr/)), puis passé dans l’outil [SVGOMG](https://jakearchibald.github.io/svgomg/) pour enlever les données superflues. Attention, lors de l’édition de `index.html`, il ne faut pas enlever les éléments à la fin de `svg#map`, ils sont utiles pour l’exécution du script. Une foix les éléments SVG rajoutés, pensez aussi à modifier l’attribut `viewBox` de l'élément `svg#map`, pour correspondre avec les valeurs du SVG de votre carte.

### Points et lignes

Une fois que le fond de carte est en place et qu’il s’affiche bien avec le zoom et tout ça, il est temps de placer les points et les trajets.

Toutes ces données sont contenues dans le fichier `js/data.js`. Ce fichier contient un objet `data`, qui contient 3 éléments :

- `defaultPointsDisplayed` est un tableau qui contient le nom des points dont le nom est affiché par défaut ;
- `lines` est un tableau qui contient des objets définissant chaque ligne ;
- `points` est un objet qui contient des objets définissant les coordonnées de chaque point.

Chaque point est défini par des coordonnées `x` et `y` relatives aux coordonnées du fichier SVG. Il ne s’agit pas de coordonnées latitude/longitude. Pour les trouver, il y a un événement de clic sur la surface du SVG, qui retourne les coordonnées dudit clic en console (ouvrir la console via les outils de développement F12). _Attention : cette manipulation ne marque qu’avec [Firefox](https://www.mozilla.org/fr/firefox/new/) (testé sur la version 76), à cause de la différence d'implémentation de `UIEvent.layerX` et `UIEvent.layerY`_.

Avec ces coordonnées on peut ajouter les objets de points sur le modèle

```
    "Nom du Point": { x: 144, y: 288 },
```

En adaptant bien sûr le nom du point et les coordonnées.

Une fois qu’assez de points ont été ajoutés, on peut tracer les lignes.

Chaque objet de ligne est composé comme suit :

- pour un trajet plat

```
    {
      start: "Nom du Point A",
      end: "Nom du Point B",
      difficulty: 0,
      displayMin: true,
      time: 6,
      align: "top",
    }
```

- pour un trajet en montée/descente

```
    {
      start: "Nom du Point C",
      end: "Nom du Point D",
      difficulty: 1,
      displayMin: true,
      time: 6,
      times: { hard: 7, easy: 5 },
      align: "top",
    },
```

Chacunes de ces propriétés doivent être définies :

- `start` et `end` sont les noms exacts des points tels que définis dans l’objet `points` ;
- `difficulty` renseigne la difficulté : `0` pour un chemin plat, `1` pour une montée entre le point C et D, `-1` pour une descente (il y a quelques imprécisions dans le code qui font que les valeurs sont parfois prises à l’envers, c'est un bug à résoudre—si ça marche pas du premier coup ça marchera en inversant la valeur) ;
- `displayMin` spécifie si “min” est ajouté après le chiffre de la durée _par défaut sur `true`_ ;
- `time` définit le temps de trajet affiché pour terrain plat et utilisé pour tous les calculs d’itinéraires ;
- `times` est un objet qui n’est nécessaire que pour les trajets en montée/descente, il contient deux valeurs :
    * `hard` la durée du trajet en montée ;
    * `easy` la durée du trajet en descente ;
- `align` précise si le texte de la durée est affiché au dessus ou au dessous de la ligne (ne marche que pour les trajets plats) _par défaut sur "top"_.

L’affichage des points et des lignes ne se fera pas complètement si les données ne sont pas bien renseignées.

## Remerciements

C’est une infographie du Parisien : [Les temps de parcours à vélo dans Paris](http://www.leparisien.fr/info-paris-ile-de-france-oise/transports/greve-dans-les-transports-a-paris-les-temps-de-parcours-a-velo-en-une-infographie-21-12-2019-8222538.php) qui m’a mis sur la voie. Je voulais la même chose, mais en pouvant mieux lire la présence de côtes (pour pouvoir mieux les éviter) et en incluant la région parisienne (en commençant par la petite couronne). Merci à eux pour ce travail.

La typo utilisée s’appelle [Work Sans](https://github.com/weiweihuanghuang/Work-Sans), elle a été tracée par Wei Huang, et est distribuée sous license libre.

Une partie des données cartographiques utilisées (le dessin de la Seine par exemple) ainsi que certains contenus vectoriels dans les fichiers d’images sources sont issus d’[OpenStreetMap](https://www.openstreetmap.org) et sont partagés sous leur license originelle spécifique. Ces contenus sont sous © les contributeurs d’OpenStreetMap.

### Contributions de timings

[@pschtt](https://twitter.com/pschtt), [@yaaax](https://github.com/yaaax)

---

Copyright 2020 Joachim Robert (sauf mentions)

fait à Montreuil 🍑 (puis repris à Charleville 🐗) avec fierté
