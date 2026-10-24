# TP4 - Gestion des commandes

## 1. Description du projet

Ce projet consiste à développer une application web de gestion des commandes en utilisant HTML, CSS, JavaScript et Bootstrap.

Les données des clients, des produits et des commandes sont stockées dans des fichiers JSON.

## 2. Structure du projet


tp4.js
├── index.html
├── style.css
├── data
│   ├── customer.json
│   ├── product.json
│   └── orders.json
└── js
    ├── app.js
    ├── dataservices.js
    ├── state.js
    ├── selectors.js
    └── view.js


## 3. Fonctionnalités

- Chargement des données depuis les fichiers JSON.
- Recherche des commandes par nom du client.
- Filtrage des commandes par statut.
- Filtrage des commandes par catégorie de produit.
- Calcul du montant des lignes de commande et du montant total.
- Affichage des détails d'une commande.
- Affichage des indicateurs : nombre de clients, nombre de produits, nombre de commandes et montant total.
- Gestion des erreurs de chargement des données.

## 4. Technologies utilisées

- HTML5
- CSS3
- JavaScript ES6
- Bootstrap 5
- JSON
- Git

## 5. Organisation du code

- `index.html` : structure de la page web.
- `style.css` : mise en forme de l'application.
- `customer.json` : données des clients.
- `product.json` : données des produits.
- `orders.json` : données des commandes.
- `dataservices.js` : chargement des données.
- `state.js` : gestion de l'état de l'application.
- `selectors.js` : recherche, filtrage et calculs.
- `view.js` : affichage des données dans la page.
- `app.js` : initialisation de l'application et gestion des événements.

## 6. Lancement de l'application

1. Ouvrir le dossier du projet dans Visual Studio Code.
2. Lancer `index.html` avec l'extension Live Server.
3. Utiliser la barre de recherche et les filtres pour consulter les commandes.
4. Cliquer sur le bouton « Détail » pour afficher les informations d'une commande.

