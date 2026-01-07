import { todoPage } from '../support/pages/todoPage';

describe('TodoMVC – Scénarios E2E avancés', () => {

  const qaTasks = [
    'Écrire les cas de test',
    'Exécuter les tests de régression',
    'Reporter les bugs critiques'
  ];

  beforeEach(() => {
    todoPage.visit();
  });

  it('Filtrer les tâches actives et complétées', () => {
    cy.addMultipleTodos(qaTasks);

    todoPage.toggleTodo(qaTasks[0]);

    todoPage.filterActive();
    todoPage.todoItems().should('have.length', 2);

    todoPage.filterCompleted();
    todoPage.todoItems().should('have.length', 1);

    todoPage.filterAll();
    todoPage.todoItems().should('have.length', 3);
  });

  it('Persistance des tâches après rafraîchissement', () => {
    cy.addMultipleTodos(qaTasks);
    todoPage.toggleTodo(qaTasks[1]);

    cy.reload();

    todoPage.todoItems().should('have.length', 3);
    todoPage.todoByText(qaTasks[1]).should('have.class', 'completed');
  });

  it('Compléter toutes les tâches en une seule action', () => {
    cy.addMultipleTodos(qaTasks);

    todoPage.toggleAll();

    todoPage.todoItems().each(item => {
      cy.wrap(item).should('have.class', 'completed');
    });

    todoPage.itemsLeft().should('contain', '0');
  });

  it('Ajout massif de tâches (test de robustesse)', () => {
    const bulkTasks = Array.from({ length: 15 }, (_, i) => `Tâche QA ${i + 1}`);

    cy.addMultipleTodos(bulkTasks);

    todoPage.todoItems().should('have.length', 15);
    todoPage.itemsLeft().should('contain', '15');
  });

  it('Cycle complet QA : créer → modifier → compléter → supprimer', () => {
    todoPage.addTodo('Créer un test E2E');
    todoPage.editTodo('Créer un test E2E', 'Créer un test E2E Cypress');
    todoPage.toggleTodo('Créer un test E2E Cypress');
    todoPage.deleteTodo('Créer un test E2E Cypress');

    todoPage.todoItems().should('have.length', 0);
  });

});
