# Kanban React Refactoring

Bravo ! Si tu es là, c'est que tu as retenu notre attention et j'ai bien besoin de ton aide pour m'aider à terminer à développer un kanban en React. S'il te plait, aide moi à implémenter les fonctionnalités manquantes car mon chef me met la pression pour que je termine aujourd'hui!

## # Description du projet

Pour rappel, un kanban est un outil de gestion visuel pour le suivi d'un projet / des tâches à réaliser par une équipe. Il est dans notre cas, organisé en 3 colonnes __Todo - Doing - Done__ correspondant au statut dans lequel peut être une tâche. Chacune d'entre elle est contituée d'un identifiant, d'un titre, d'une description et d'un statut. 

![kanban](https://user-images.githubusercontent.com/14977469/116710296-dfa00f80-a9d1-11eb-9cac-449f9bb192ce.jpg)

Sur ce kanban, on affiche uniquement le titre et la decription de la tâche. Chacune doit pouvoir être déplacée de colonne en colonne à l'aide de flêches présentes sur chacun de leurs côtés, celles dans les colonnes __Todo__ et __Done__ ne pouvant aller que sur la colonne __Doing__.

Par simple "click" sur le corps de la tâche, on souhaite pouvoir en afficher l'ensemble des attributs.

## # Ce qui fonctionne ou pas....

Pour ce projet, les éléments suivants ont déja été implémentés:


#### Une page affichant le kanban au global

Visible à l'adresse http://localhost:3000/kanban, on y retrouve l'ensemble des tâches avec leurs titre et description réparties dans les trois colonnes. Les flêches de navigation sont également présentes en fonction des déplacements permis.

Malheureusement cette navigation des tâches n'est pas fontionnelle. De plus, il n'est pas encore possible de sélectionner une tâche pour en afficher les détails. Si ce n'est pas trop demandé....


#### Une page affichant le détail d'une tâche données

A l'adresse http://localhost:3000/kanban/task/1/details sont affichés l'ensemble des attributs de la tâche N°1. 

Malheureusement, http://localhost:3000/kanban/task/2/details affiche également les détails de la tâche N°1 (c'est gênant :grimacing:). En réalité, les données utilisées par cette page ne sont pas dynamiques: toutes les urls http://localhost:3000/kanban/task/?/details affichent les mêmes informations. J'aimerais plutôt un fonctionnement de type:
http://localhost:3000/kanban/task/1/details => affichage des détails de la tâche N°1
http://localhost:3000/kanban/task/2/details => affichage des détails de la tâche N°2
http://localhost:3000/kanban/task/3/details => affichage des détails de la tâche N°3


#### Côté craft

Nouvellement convaincu du TDD, j'ai une baterie de tests pour décrire les comportements attendus de mon kanban.

Malheureusement, je n'ai pas réussi à implementer tous les comportements attendus et certains tests échouent encore mais ils pourront certainement t'aider (enfin j'espère!).  
Niveau qualité de code, je ne crois pas que l'existant soit une référence non plus. N'hésite pas à faire des changements si ça peut t'aider.


## # Que dois-tu faire concrètement ?

__Le but de l'exercie__ est donc de terminer au mieux l'implémentation de ce kanban commencée tant bien que mal. Produis le code comme si tu le faisais "en vrai", sauf qu'on se concentre sur le code métier : pas besoin de gérer les logs, appels à un back, sécurité...

__Tu as oublié une synthaxe?__ pas de soucis, tu as le droit d'utiliser tous les outils que tu veux : Documentation en ligne, StackOverflow, Google... fais en bon usage.


## # Infos tech

Node 18.16.0 et npm 9.6.5.

L'application a été générée en RactJS via [son CLI](https://github.com/facebook/create-react-app) et tourne parfaitement avec __node 18.16.0__ et __npm 9.6.5__.

Les commandes classiques de ce genre de projets sont disponibles:

| commande  | Description  |
|---|---|
| npm start | Lance l'application et ouvre [http://localhost:3000](http://localhost:3000) pour la voir dans ton navigteur  |
| npm test  | Lance les tests unitaires en mode interactif |
| npm build | Build l'application en mode <em>production</em> en vu d'un déploiement |
| npm eject |   |
