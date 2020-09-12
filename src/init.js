'use strict';

import { createNewListHandler } from './handlers/create-new-list.js'


document.getElementById('btn-createTodo')
  .addEventListener('click', createNewListHandler);

 // let createBtn = document.getElementById('btn-createTodo');  list-name-input
 // createBtn.addEventListener('click', createNewListHandler()); keyup
