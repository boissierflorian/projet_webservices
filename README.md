# Projet WebServices - Réseau Social

Projet de Master 1 Ingénierie du Logiciel Libre - Module Web Services.

L'objectif du projet est de réaliser un web service à l'aide d'une technologie choisie arbitrairement.
Ce projet fournira une couche API, qui permettra de récupérer des informations sur le réseau social.

## Technologies

<p align="center">
<img src="https://nodejs.org/static/images/logo-light.svg" width="200" />
<img src="https://cdn-images-1.medium.com/max/661/1*XcE0wR1ZmWLFbdF2dE5WuA.png" width="200" />
<img src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" width="200" />
</p>

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

À partir d'ici tester les requêtes avec Postman.

## Configuration du projet
Le fichier de configuration (config.json) se présente comme ceci :
```
{
    "username": "",
    "password": "",
    "database_name": "",
    "host": "localhost",
    "dialect": "mysql",
    "pool": {
        "max": 5,
        "min": 0,
        "acquire": 30000,
        "idle": 10000
    }
}
```
Ce JSON correspond exactement aux options attendues par le [constructeur](http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor) de sequelize.

Le dialect doit correspondre à votre type de base données, par exemple:
- *mysql, sqlite ,postgres ou encore mssql.*

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
config.json
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
- **config.json** : le fichier de configuration de la base de données
- **package.json** : propriétés du projet et ses dépendances

## Liens utiles
- [Kanban](https://github.com/boissierflorian/projet_webservices/projects/1)
- [Guide de contribution](https://github.com/boissierflorian/projet_webservices/blob/master/CONTRIBUTING.md)
- [Issues](https://github.com/boissierflorian/projet_webservices/issues)
- [Sequelize](http://docs.sequelizejs.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/fr/)
