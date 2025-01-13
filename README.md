## Intégration continue avec Github actions.

- Se déclenche sur n'importe quelle push/merge de la branche master. (Tuto complet dispo sur https://github.com/gregrickaby/nextjs-github-pages)

- Deploy sur github-pages pour être accessible sur https://jbigman.github.io/cv-nextjs

- jbigman.github.io redirige tous les utilisateurs sur jbigman.github.io/cv-nextjs

## Developpement en local

`yarn install` pour telecharger toutes les dépendances

`yarn serve` Pour tester l'application en localhost

## Dépendences

#### **[Next.js](https://nextjs.org/)** 
Next.js permet de créer des applications en étendant les fonctionnalités de **React**.

####  [@biomejs/biome](https://biomejs.dev/)
Biome analyse le code pour pour vérifier entre autre les règles et conventions de codage ainsi que les sources d'erreur courantes pour anticiper les problèmes
L'analyse est effectuée en temps réèl pendant le développement grâce à la prise en charge des IDE, mais aussi et surtout en intégration continue pendant la phase de build.
Pourquoi biome plutot qu'eslint ? Plus rapide, et moins de dépendences à ajouter à la main.

## Monitoring
#### [Snyk.io](https://snyk.io) [![Known Vulnerabilities](https://snyk.io/test/github/jbigman/cv-react/badge.svg)](https://snyk.io/test/github/jbigman/cv-react)
Verifie les failles de sécurités détectées dans le code, explique en détail les failles detectées et propose des solutions
#### [Depfu](https://depfu.com)  [![Depfu](https://badges.depfu.com/badges/fc60fb793d5d7bfc6e5888e14ea67a7f/count.svg)](https://depfu.com/github/jbigman/cv-react?project_id=39175)
Surveille les versions des dépendences et propose automatiquement de merge les mises à jours dans le package.json.

