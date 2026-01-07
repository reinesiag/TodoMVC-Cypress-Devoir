TodoMVC – Cypress E2E Tests
Présentation
Ce projet démontre la mise en place de tests End-to-End (E2E) automatisés pour l’application TodoMVC (React) à l’aide de Cypress.
Il a été conçu pour illustrer de bonnes pratiques en test automatisé, avec une approche orientée maintenabilité, lisibilité et qualité logicielle, telles qu’attendues dans un contexte professionnel QA.

Fonctionnalités couvertes:
Les scénarios automatisés valident notamment :
-Création, modification et suppression de tâches
-Marquage de tâches comme complétées
-Filtres All / Active / Completed
-Complétion en masse
-Persistance des données après rafraîchissement
-Tests de robustesse (ajout massif de tâches)

Stack technique
Cypress (tests E2E),JavaScript,Page Object Model (POM),Commandes personnalisées Cypress,Git / GitHub

Bonnes pratiques QA mises en œuvre
Séparation claire entre :
-logique de test
-interactions UI (POM)
-Réduction de la duplication de code via des commandes personnalisées
-Tests orientés comportement utilisateur
-Scénarios réalistes inspirés du quotidien d’un testeur QA
-Code lisible, maintenable et facilement extensible

Pourquoi Cypress ?
Cypress a été choisi pour les raisons suivantes :
 -Exécution rapide des tests directement dans le navigateur
 -Accès natif au DOM et aux requêtes réseau
-API simple et lisible pour les tests E2E
 -Outils intégrés de debug (time-travel, screenshots, logs)
-Idéal pour les applications web modernes (React, Angular, Vue)
Cypress permet ainsi de produire des tests fiables, faciles à maintenir et proches de l’expérience utilisateur réelle.

Structure du projet
cypress/
├─ e2e/            # Scénarios de tests
├─ support/
│  ├─ commands.js  # Commandes personnalisées
│  └─ pages/       # Page Object Model
cypress.config.js
README.md

Exécution des tests
npm install
npx cypress open

ou en mode headless :
npx cypress run

 Auteur

reine SIAGO
Projet réalisé dans une démarche de démonstration de compétences QA / Test automatisé E2E.


