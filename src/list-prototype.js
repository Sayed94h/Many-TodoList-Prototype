'use strict';

/* List Prototype

  This object will contain all the methods for your many lists
  in your app you will use Object.create(listPrototype) to create many lists
  it will include all the functions you need for a list:
    logic
    views
    handlers

  You will need to use binding (or arrow functions) to connect handlers to views

*/

export const listPrototype = {
  printState: function () {
    console.log(this.state.name);
  },
  render: function () {
    let todoContainer = document.createElement("div");
    todoContainer.id = "wrapper";
    let todoTitle = document.createElement("h2");
    todoTitle.innerHTML = this.state.name; //document.getElementById("list-name-input").value;

    let todosInput = document.createElement("input");
    todosInput.type = "text";
    todosInput.style.padding = "0.5em";
    todosInput.placeholder = "Enter Todos Items";
    todosInput.id = `${this.state.name}HaveTodo`;

    let addTodosBtn = document.createElement("button");
    addTodosBtn.id = "addBtn";
    addTodosBtn.innerHTML = "Add To list";
    addTodosBtn.addEventListener("click", this.addItems.bind(this));

    let todosOl = document.createElement("ol");
    todosOl.id = `${this.state.name}ol`;

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todosInput);
    todoContainer.appendChild(addTodosBtn);
    todoContainer.appendChild(todosOl);
    return todoContainer;
  },

  addItems: function(){

  },
  displayItems: function(){

  },
  deleteItems: function(){
    
  }
};
