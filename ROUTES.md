# Routes
Ce document recense l'api proposée par le projet.

1. User
    1. Récupérer tous les utilisateurs
    2. Récupérer un utilisateur
    3. Création d'un utilisateur
    4. Mettre à jour un utilisateur
    5. Suppression d'un utilisateur
    6. Récupérer les publications d'un utilisateur
    7. Récupérer une publication d'un utilisateur
    8. Création d'une publication pour un utilisateur
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

![GET](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111698754.png) **/api/users/**

Retourne la liste des utilisateurs.

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

* id (integer) - l'identifiant de l'utilisateur
* firstName (string) - le prénom de l'utilisateur
* lastName (string) - le nom de l'utilisateur
* mail (string) - le mail de l'utilisateur
* password (string) - le mot de passe de l'utilisateur
* age (integer) - l'âge de l'utilisateur
* city (string) - la ville de l'utilisateur
* address (string) - l'adresse de l'utilisateur

## 1.2 Récupérer un utilisateur

![GET](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111698754.png) **/api/users/{userId}**

Retourne un utilisateur

### Paramètres url

* userId (integer) - l'identifiant de l'utilisateur

### Exemple

http://localhost:3000/api/users/1

```
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
}
```

Structure (objet)

* id (integer) - l'identifiant de l'utilisateur
* firstName (string) - le prénom de l'utilisateur
* lastName (string) - le nom de l'utilisateur
* mail (string) - le mail de l'utilisateur
* password (string) - le mot de passe de l'utilisateur
* age (integer) - l'âge de l'utilisateur
* city (string) - la ville de l'utilisateur
* address (string) - l'adresse de l'utilisateur

## 1.3 Création d'un utilisateur

![POST](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111384120.png) **/api/users/**

Créér un utilisateur.

## Request body

```
{
    "firstName": "Tobey",
    "lastName": "Maguire",
    "mail": "tobeymaguire@gmail.com",
    "password": "test",
    "age": "42",
    "city": "Santa Monica",
    "address": "13 rue wolf street"
}
```

Structure (objet)

* firstName (string) - le prénom de l'utilisateur
* lastName (string) - le nom de l'utilisateur
* mail (string) - le mail de l'utilisateur
* password (string) - le mot de passe de l'utilisateur
* age (integer) - l'âge de l'utilisateur
* city (string) - la ville de l'utilisateur
* address (string) - l'adresse de l'utilisateur

### Exemple

http://localhost:3000/api/users/

```
{
    "id": 5,
    "firstName": "Tobey",
    "lastName": "Maguire",
    "mail": "tobeymaguire@gmail.com",
    "password": "test",
    "age": "42",
    "city": "Santa Monica\n",
    "address": "13 rue wolf street\n",
    "updatedAt": "2018-05-14T11:36:17.887Z",
    "createdAt": "2018-05-14T11:36:17.887Z",
    "created": true
}
```

Structure (objet)

* id (integer) - l'identifiant de l'utilisateur
* firstName (string) - le prénom de l'utilisateur
* lastName (string) - le nom de l'utilisateur
* mail (string) - le mail de l'utilisateur
* password (string) - le mot de passe de l'utilisateur
* age (integer) - l'âge de l'utilisateur
* city (string) - la ville de l'utilisateur
* address (string) - l'adresse de l'utilisateur

## 1.4 Mettre à jour un utilisateur

![PUT](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111440019.png) **/api/users/{userId}**

Met à jour certaines propriétés de l'utilisateur

## Request body

```
{
    firstName : Peter
    lastName : Parker
}
```

Structure (objet)

* firstName (string) - le prénom de l'utilisateur
* lastName (string) - le nom de l'utilisateur
* etc.

### Exemple

http://localhost:3000/api/users/5

```
[
    1
]
```
Structure (array)

* Le résultat de l'opération.

## 1.5 Suppression d'un utilisateur

![DELETE](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111942008.png) **/api/users/{userId}**

Supprime l'utilisateur spécifié.

## Paramètres d'url

* userId (integer) - l'identifiant de l'utilisateur à supprimer

## Exemple

http://localhost:3000/api/users/5

```
1
```

## 1.6 Récupérer les publications d'un utilisateur

![GET](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111698754.png) **/api/users/{userId}/publications**

Retourne la liste de toutes les publications d'un utilisateur

## Paramètres d'url

* userId (integer) - l'identifiant de l'utilisateur

## Exemple

http://localhost:3000/api/users/1/publications

```
[
    {
        "id": 1,
        "content": "Première publication !",
        "id_user": 1,
        "createdAt": "2018-05-14T11:52:26.000Z",
        "updatedAt": "2018-05-14T11:52:26.000Z"
    }
]
```


## 1.7 Récupérer une publication d'un utilisateur

![GET](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111698754.png) **/api/users/{userId}/publications/{publicationId}**

Retourne une publication d'un utilisateur

## Paramètres d'url

* userId (integer) - l'identifiant de l'utilisateur
* publicationId (integer) - l'identifiant de la publication

## Exemple

http://localhost:3000/api/users/1/publications/1

```
{
    "id": 1,
    "content": "Première publication !",
    "id_user": 1,
    "createdAt": "2018-05-14T11:52:26.000Z",
    "updatedAt": "2018-05-14T11:52:26.000Z"
}
```

## 1.8 Création d'une publication pour un utilisateur

![POST](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111384120.png) **/api/users/{userId}/publications**

Crée une publication pour un utilisateur donné

## Paramètres d'url

* userId (integer) - l'identifiant de l'utilisateur

## Request body

```
{
    "content": "Une publication sans histoire"
}
```

Structure (objet)

* content (string) - le contenu de la publication

## Exemple

http://localhost:3000/api/users/1/publications/

```
{
    "id": 2,
    "id_user": "1",
    "content": "Une publication sans histoire",
    "updatedAt": "2018-05-14T12:11:53.001Z",
    "createdAt": "2018-05-14T12:11:53.001Z",
    "created": true
}
```

## 1.9 Mettre à jour une publication d'un utilisateur

![PUT](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111440019.png) **/api/users/{userId}/publications/{publicationId}**

Met à jour le contenu d'une publication d'un utilisateur

## Paramètres d'url

* userId (integer) - l'identifiant de l'utilisateur
* publicationId (integer) - l'identifiant de la publication

## Request body

```
{
    content : "Une publication avec histoire maintenant !"
}
```

Structure (objet)

* content (string) - le nouveau contenu de la publication

## Exemple

http://localhost:3000/api/users/1/publications/2

```
[
    1
]
```

## 1.10 Supprimer une publication d'un utilisateur

![DELETE](https://nsa39.casimages.com/img/2018/05/14/mini_180514013111942008.png) **/api/users/{userId}/publications/{publicationId}**

## Paramètres d'url

* userId (integer) - l'identifiant de l'utilisateur
* publicationId (integer) - l'identifiant de la publication à supprimer

## Exemple

http://localhost:3000/api/users/1/publications/7

```
1
```

# Groups
