# Cinephoria GraphQL
___

Microservice dédié à GraphQL qui va permettre de préparer des requêtes complètes en interagissant 
avec plusieurs microservices.

## Installation

### Logiciels
- [Docker](https://www.docker.com/) et [Docker compose](https://docs.docker.com/compose/)
- [Deno](https://deno.com/)

### Librairies

Lancez la commande suivante pour générer les librairies nécessaires au bon fonctionnement du microservice :

```bash
  deno run build
```

### Variables d'environnement

Vous aurez besoin de générer un fichier `.env.local` avec différentes variables d'environnement pour mettre en
marche le microservice **Cinéphoria Showtime**.
Un fichier `.env` est disponible dans le projet.

## Déploiement en local

Lancez la commande suivante pour lancer le microservice **Cinéphoria Showtime** :

```bash
docker compose --env-file .env.local up -d --build
```

Le microservice est désormais disponible en local.