class TodoPage {
  visit() {
    cy.visit('https://todomvc.com/examples/react/dist/#/');
  }

  getInput() {
    return cy.get('.new-todo');
  }

  getTodoItems() {
    return cy.get('.todo-list li');
  }

  addTodo(task) {
    this.getInput().type(`${task}{enter}`);
  }

  toggleTodo(index) {
    this.getTodoItems().eq(index).find('.toggle').click();
  }

  editTodo(index, newText) {
    this.getTodoItems()
      .eq(index)
      .dblclick()
      .find('.edit')
      .clear()
      .type(`${newText}{enter}`);
  }

  deleteTodo(index) {
    this.getTodoItems().eq(index).trigger('mouseover');
    this.getTodoItems().eq(index).find('.destroy').click({ force: true });
  }

  filterActive() {
    cy.contains('Active').click();
  }

  filterCompleted() {
    cy.contains('Completed').click();
  }

  filterAll() {
    cy.contains('All').click();
  }

  clearCompleted() {
    cy.contains('Clear completed').click();
  }
}

export default TodoPage;
