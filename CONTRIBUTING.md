# Guide de développement

## Normes des commits

Chaque commit doit inclure un **type**, une **scope** et un **sujet** :

```
<type>(scope): <subject>
```

## Type
Peut-être l'un des suivants:

- **feat**: une feature
- **fix**: Un fix
- **docs**: Documentation *uniquement !*
- **style**: Formattage du code (espaces, tabs, points virgules, ...)
- **refactor**: Du refactoring
- **test**: Tests unitaires
- **config**: Configuration (paquets, bdd)

## Scope
La scope concerne la partie sur laquelle le développement a été effectuée. Exemple (front, model, routing, etc.)

## Subject
Le sujet correspond à une définition succinte du développement.

- le message doit être en minuscule
- pas de "point" à la fin du message

## Workflow

- Choisir une issue
- Créér une branche du type *'1-model-utilisateur'*
- Faire les modifications
- Faire une pull request vers develop/master 
