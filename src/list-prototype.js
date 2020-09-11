'use strict';

import { logger } from '../lib/logger.js';
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
  displayItems: function () {
    debugger;

    let itemLists = document.getElementById(`${this.state.name}ol`);
    itemLists.innerHTML = "";

    this.state.allTodo.forEach(function (todo, position) {
      let todoItems = document.createElement("li");
      todoItems.id = position;
      let checkItem = document.createElement('input'); 
      checkItem.type = "checkbox";
      checkItem.checked = false; 
      checkItem.className = "checkItem";
      checkItem.value = todo.items;
      let spanEl = document.createElement('span');
      spanEl.innerHTML = todo.items;
      todoItems.appendChild(checkItem);
      todoItems.appendChild(spanEl);

      //delete button
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = `<i class="fa fa-trash-o" style= "font-size:1.7em;color:red; font-weight: bold;"></i>`;
      deleteButton.style.color = "red";

      deleteButton.style.fontWeight = "bold";
      
      deleteButton.className = "deleteItemList";

      todoItems.appendChild(deleteButton);
      deleteButton.addEventListener(
        "click",
        this.deleteItems.bind(this, position)
      );

      if (todo.completed) {
        let checkBoxEl = todoItems.children[0];
        checkBoxEl.setAttribute("checked", true);
        if (todo.completed) {
          todoItems.className = "checkbox";
        }
      }
      itemLists.appendChild(todoItems);
    }, this);
  },

  addItems: function () {
    debugger;

    let inputID = `${this.state.name}HaveTodo`;
    let itemValue = document.getElementById(inputID).value;

    if (itemValue === "") {
      alert("Enter something to add in your Todo List!");
      return;
    }

    this.state.allTodo.push({
      items: itemValue,
      completed: false,
    });
    this.displayItems();
    document.getElementById(inputID).value = "";
    logger.push({
      action: "Add Items to the list",
      stateName: this.state.name,
      state: this.state,
    });
  },

};


