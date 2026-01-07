// TEST E2E POUR TODO/support/commands.js
import TodoPage from './pageObjects/TodoPage';
import faker from 'faker';
Cypress.Commands.add('addMultipleTodos', (tasks) => {
  tasks.forEach(task => {
    cy.get('.new-todo').type(`${task}{enter}`);
  });
});


Cypress.Commands.add('addMultipleTasks', (tasks) => {
  tasks.forEach(task => {
    TodoPage.addTask(task);
  });
});

Cypress.Commands.add('addRandomTasks', (count) => {
  const randomTasks = [];
  for (let i = 0; i < count; i++) {
    randomTasks.push(faker.lorem.sentence()); 
  }
  cy.addMultipleTasks(randomTasks);
  return randomTasks; 
});

// Nouvelle commande : Charger des tâches depuis une fixture et les ajouter
Cypress.Commands.add('addTasksFromFixture', (fixtureKey) => {
  cy.fixture('tasks.json').then((data) => {
    const tasks = data[fixtureKey];
    cy.addMultipleTasks(tasks);
    return tasks; // Retourne pour vérification
  });
});