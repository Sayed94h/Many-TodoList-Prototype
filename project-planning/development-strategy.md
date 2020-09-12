# JavaScript Todo Lis Manager

This project is a group project to build multiple todo lists with their own list's title using prototype functionality and feature


## User Story Dependencies

[Story Dependency Diagram](https://excalidraw.com/)

---

## WIREFRAME

![wireframe]()

---

## 0.Setup

> assigned to _Sayed Kazimi_

1. Created the project repo from HYF template repo
1. Wrote a short README in the main directory of the repo
1. Turned on GitHub webpage
1. Invited collaborators
1. Created Group issue
1. Created a simple project board

---

## 1. Initialize Application

> assigned to _Sayed Kazimi_

__As a user I want to see the initial page when I load the site__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `Finish-html`.
- This branch is merged to `master` branch after completion.

### HTML & CSS

1. Added `header tag`
1. Added `h1 tag` and `h2 tag` with a little info about the website
1. Added `button tag` to create lists with given title
1. Added `script tags` for project's script files
1. Added some style in the `style.css` file

### Development Strategy

1. Wrote the first part of the development strategy

### Task ...

---

## 2. Render Todo List

> assigned to _Sayed Kazimi_

__As a user I want to see all my todo lists__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `renderList`.
- This branch is merged to `master` branch after completion.

### HTML & CSS

1. Removed unneeded script tags added in branch `Finish-html`
1. Added style for `todo container`, `addButton`, added `media query`

### JavaScript

1. render function:
```js
render: function () {
    let todoContainer = document.createElement("div");
    todoContainer.id = "wrapper";
    let todoTitle = document.createElement("h2");
    todoTitle.innerHTML = this.state.name; //document.getElementById("list-name-input").value;

    let todosInput = document.createElement("input");
    todosInput.type = "text";
    todosInput.style.padding = "0.5em";
    todosInput.style.maxWidth = "120px";
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
  ```

### Task ...

---

## 3. Add Items to the list

> assigned to _Sayed Kazimi_

__As a user I want to be able to add todos(items) to my todo lists__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `addItems`.
- This branch is merged to `master` branch after completion.

### HTML & CSS

1. Created html tags and css style on the fly(dynamically in the DOM)

### JavaScript

1. addItems function:
```js
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
  
  ```
  ---
  
## 4. Display each todo item in each todo list

> assigned to _Sayed Kazimi_

__As a user I want to be able to add todos(items) to my todo lists__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `displayItems`.
- This branch is merged to `master` branch after completion.

### HTML & CSS

1. Created html tags and css style on the fly(dynamically in the DOM)

### JavaScript

1. displayItems function:
```js
displayItems: function () {
    debugger;
    let itemLists = document.getElementById(`${this.state.name}ol`);
    itemLists.innerHTML = "";
    this.state.allTodo.forEach(function (todo, position) {
      let todoItems = document.createElement("li");
      todoItems.id = position;
      checkItem = document.createElement('input'); 
      checkItem.type = "checkbox";
      checkItem.className = "checkItem";
      checkItem.value = todo.items;
      //toggle items as completed
      checkItem.addEventListener("change", this.toggleComplete.bind(this, todo));
      if(todo.completed){
        checkItem.checked = true;
      }
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
      itemLists.appendChild(todoItems);
    }, this);
  },
```

---

## 5. Be able to Delete each todo item in each todo list

> assigned to _Sayed Kazimi_

__As a user I want to be able to delete todos(items) from my todo lists__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `deleteItems`.
- This branch is merged to `master` branch after completion.

### HTML & CSS

1. Created html tags and css style on the fly(dynamically in the DOM) for deleting part inside the displayItems function

### JavaScript

1. deleteItems function:
```js
  deleteItems: function (position) {
    debugger;
    this.state.allTodo.splice(position, 1);
    this.displayItems();
    logger.push({
      action: "Delete item",
      stateName: this.state.name,
      state: this.state,
    });
  },
```
---

## 6. Be able to check each todo item in each todo list as completed

> assigned to _Sayed Kazimi_

__As a user I want to be able to check each todo item in each todo list as completed__

- _Given [context] when [a specific action is performed] then [a set of consequences should occur]__
- ...

### REPO

- This user story is developed on branch `toggleItems`.
- This branch is merged to `master` branch after completion.

### HTML & CSS

1. Created html tags and css style on the fly(dynamically in the DOM) for checking and unchecking part inside the displayItems function

### JavaScript

1. toggleComplete function:
```js
toggleComplete: function(){
    debugger;
    this.state.allTodo.forEach(function (todo) {
        if(checkItem.checked){
          todo.completed = true;
        }
        logger.push({
          action: "Checked as complete",
          stateName: this.state.name,
          state: this.state,
        });
      
    }, this);
  }
```

---

## Finishing Touch

> assigned to Sayed Kazimi

- Create Issues
- Validate HTML, CSS

