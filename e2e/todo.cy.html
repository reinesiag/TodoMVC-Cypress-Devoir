import TodoPage from '../pages/TodoPage';

describe('Test E2E – Gestion des tâches TodoMVC', () => {
  const todoPage = new TodoPage();
  const tasks = [ "ouvre l'application",
    "lance le live",
    "activer le mode spectateur"];

  beforeEach(() => {
    todoPage.visit();
  });

  it('Ajout de plusieurs tâches', () => {
    cy.addMultipleTodos(tasks);
    todoPage.getTodoItems().should('have.length', 3);
  });

  it('Marquer une tâche comme complétée', () => {
    cy.addMultipleTodos(tasks);
    todoPage.toggleTodo(0);

    todoPage.getTodoItems()
      .eq(0)
      .should('have.class', 'completed');
  });

  it('Filtrer les tâches (Active / Completed / All)', () => {
    cy.addMultipleTodos(tasks);
    todoPage.toggleTodo(1);

    todoPage.filterActive();
    todoPage.getTodoItems().should('have.length', 2);

    todoPage.filterCompleted();
    todoPage.getTodoItems().should('have.length', 1);

    todoPage.filterAll();
    todoPage.getTodoItems().should('have.length', 3);
  });

  it('Modifier une tâche', () => {
    cy.addMultipleTodos(tasks);
    todoPage.editTodo(0, 'mettre pause');

    todoPage.getTodoItems()
      .eq(0)
      .should('contain.text', 'mettre pause');
  });

  it('Supprimer une tâche', () => {
    cy.addMultipleTodos(tasks);
    todoPage.deleteTodo(1);

    todoPage.getTodoItems().should('have.length', 2);
  });

  it('Effacer toutes les tâches complétées', () => {
    cy.addMultipleTodos(tasks);
    todoPage.toggleTodo(0);
    todoPage.toggleTodo(1);

    todoPage.clearCompleted();
    todoPage.getTodoItems().should('have.length', 1);
  });
});
it('Scénario 1 – Création de tâches', () => {
  cy.visit('https://todomvc.com/examples/react/dist/#/');

  cy.get('.new-todo').type('Tâche A{enter}');
  cy.get('.new-todo').type('Tâche B{enter}');
  cy.get('.new-todo').type('{enter}');

  cy.get('.todo-list li').should('have.length', 2);
  cy.get('.new-todo').should('have.value', '');
});

it('Scénario 2 – Complétion et décomplétion', () => {
  cy.get('.new-todo').type('Tâche C{enter}');
  cy.contains('Tâche C').parent().find('.toggle').check();
  cy.contains('Tâche C').parent().should('have.class', 'completed');
  cy.contains('Tâche C').parent().find('.toggle').uncheck();
  cy.contains('Tâche C').parent().should('not.have.class', 'completed');
});
it('Scénario 3 – Filtres', () => {
  cy.get('.new-todo').type('Tâche D{enter}');
  cy.get('.new-todo').type('Tâche E{enter}');
  cy.contains('Tâche D').parent().find('.toggle').check();

  cy.contains('Active').click();
  cy.contains('Tâche D').should('not.exist');

  cy.contains('Completed').click();
  cy.contains('Tâche D').should('exist');

  cy.contains('All').click();
});

it('Scénario 4 – Modification', () => {
  cy.get('.new-todo').type('Tâche F{enter}');
  cy.contains('Tâche F').dblclick();
  cy.get('.editing .edit').clear().type('Tâche F modifiée{enter}');
  cy.contains('Tâche F modifiée').should('exist');
});

it('Scénario 5 – Suppression', () => {
  cy.get('.new-todo').type('Tâche G{enter}');
  cy.contains('Tâche G')
    .trigger('mouseover')
    .find('.destroy')
    .click({ force: true });

  cy.contains('Tâche G').should('not.exist');
});

it('Scénario 6 – Clear completed', () => {
  cy.get('.new-todo').type('Tâche H{enter}');
  cy.get('.new-todo').type('Tâche I{enter}');
  cy.contains('Tâche H').parent().find('.toggle').check();
  cy.contains('Clear completed').click();
  cy.contains('Tâche H').should('not.exist');
  cy.contains('Tâche I').should('exist');
});
