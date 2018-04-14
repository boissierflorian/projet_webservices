# Projet WebServices - Réseau Social

Projet de Master 1 Ingénierie du Logiciel Libre - Module Web Services.

L'objectif du projet est de réaliser un web service à l'aide d'une technologie choisie arbitrairement.
Ce projet fournira une couche API, qui permettra de récupérer des informations sur le réseau social.

## Technologies

<img src="https://nodejs.org/static/images/logo-light.svg" width="400" />
<img src="https://cdn-images-1.medium.com/max/661/1*XcE0wR1ZmWLFbdF2dE5WuA.png" width="400" />


## Procédure d'installation
```
#1 git clone https://github.com/boissierflorian/projet_webservices.git
#2 cd projet_webservices
#3 npm i
#4 nano config.json
#5 npm start
```

- #1 Téléchargement du projet.
- #2 On se place à la racine du projet.
- #3 Installation des dépendances.
- #4 Ajout des identifiants de connexion à la base de données.
- #5 Lancement du serveur.

À partir de là tester les requêtes avec Postman.

## Structure du projet
```
bin/
models/
node_modules/
public/
  images/
  javascripts/
  stylesheets/
routes/
services/
views/
app.js
package.json
```
- **bin/** : wrapper d'express
- **models/** : définition des modèles
- **node_modules/** : les packages de node.js
- **public/** : les fichiers (images, css, scripts) accessibles par le client.
- **routes/** : définition des routes
- **services/** : définition des services
- **views/** : définition des templates
- **app.js** : le point d'entrée de l'application
- **package.json** : propriétés du projet et ses dépendances

## Liens utiles
- [Kanban](https://github.com/boissierflorian/projet_webservices/projects/1)
- [Guide de contribution](https://github.com/boissierflorian/projet_webservices/blob/master/CONTRIBUTING.md)
