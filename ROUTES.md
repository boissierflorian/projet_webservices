# Routes
Ce document recense l'api proposée par le projet.

1. User
    1. Récupérer tous les utilisateurs
    2. Récupérer un utilisateur
    3. Création d'un utilisateur
    4. Mettre à jour un utilisateur
    5. Suppression d'un utilisateur
    6. Création d'une publication pour un utilisateur
    7. Récupérer les publications d'un utilisateur
    8. Récupérer une publication d'un utilisateur
    9. Mettre à jour une publication d'un utilisateur
    10. Supprimer une publication d'un utilisateur
2. Groups
    1. Récupérer tous les groupes
    2. Récupérer un groupe
    3. Créer un groupe
    4. Mettre à jour un groupe
    5. Supprimer un groupe
    6. Ajoute un utilisateur à un groupe
    7. Supprimer un utilisateur d'un groupe

# User

## 1.1 Récupérer tous les utilisateurs

```
GET /api/users/
```

Retourne la liste des utilisateurs.

### Request parameters
Aucun.

### Request body
Aucune.

### Exemple

http://localhost:3000/api/users/

```
[
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Wayne",
        "mail": "abc@sfr.fr",
        "password": "abcdef",
        "age": 15,
        "city": "Gotham",
        "address": "15 rue gotham",
        "createdAt": "2018-04-13T00:00:00.000Z",
        "updatedAt": "2018-04-19T00:00:00.000Z"
    },
    {
        "id": 2,
        "firstName": "Henri",
        "lastName": "Masson",
        "mail": "mass@sfr.fr",
        "password": "aa",
        "age": 15,
        "city": "cc",
        "address": "ca",
        "createdAt": "2018-04-14T00:00:00.000Z",
        "updatedAt": "2018-04-14T00:00:00.000Z"
    }
]
```

Structure (collection)

* id (integer) - L'identifiant de l'utilisateur
* firstName (string) - le prénom de l'utilisateur
* lastName (string) - le nom de l'utilisateur
* mail (string) - le mail de l'utilisateur
* password (string) - le mot de passe de l'utilisateur
* age (integer) - l'âge de l'utilisateur
* city (string) - la ville de l'utilisateur
* address (string) - l'adresse de l'utilisateur



# Groups

