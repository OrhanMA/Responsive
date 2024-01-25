# Créer un site responsive

Ce projet est réalisé dans le cadre de la formation Concepteur de développeur d'applications à [Simplon Grenoble](https://simplon.co/).

## Contexte

Intégration de pages pour un client en HTML et CSS

Le but était de reproduire les demandes des clients avec des pages responsives, c'est-à-dire s'adaptant à toutes les tailles d'écrans couramment utilisées.

## Installation du projet

### Cloner le projet en local

```
git clone git@github.com:OrhanMA/Responsive.git
```

### Installer SASS sur votre machine

Vous pouvez installer SASS sur le projet seulement ou bien l'installer en global sur votre machine.

Pour l'installer en global:

```
npm install -g sass
```

Pour les autres configurations: [voir la documentation de Sass](https://sass-lang.com/install/)

### Démarrer un server local

Pour visualiser le projet, vous aurez besoin d'un serveur local. Pour cela, vous pouvez utiliser l'extension vscode [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&ssr=false#review-details) qui vous permet de lancer un server local en 1 clique.

### Accéder au projet

Rendez-vous sur http://localhost:5500/ si vous utilisez Live Server.

### Activer la compilation Sass

Pour voir votre style mis à jour lors de changement, lancez la commande npm run watch. Sass compilera automatiquement votre code.

### Mofidier le code Typescript

Si vous modifier le code Typescript, vous aurez besoin de compiler le fichier vers du Javascript classique. Pour cela, vous pouvez utiliser la commande `npm run tsc` ou `tsc script.ts` depuis le dossier contenant le script.

Si vous n'avez pas tsc sur votre machine, vous pouvez l'installer de la manière suivante:

```
npm install -g typescript
```

Cette commande installera Typescript en global sur votre machine et vous donnera accès à la commande tsc pour compiler vos fichiers.

Voir la documentation pour plus d'informations: [documentation Typescript](https://www.typescriptlang.org/download).

#### Créer d'autres scripts

Si vous souhaitez créer d'autres script, vous pouvez le faire dans le fichier `package.json`.

## Crédits

- Template 'Tinker': https://templatemo.com/tm-506-tinker
- Template 'Isadora': https://isadoradigitalagency.com/
- Icons réseaux sociaux: https://fontawesome.com/
