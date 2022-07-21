let inputField = document.querySelector('.input-field');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo-list');
let taskRemover = document.querySelectorAll(".delete");
let taskChecker = document.querySelectorAll(".check")

let todoList = [];



addButton.addEventListener("click", function() {
    if(!inputField.value) return;

    let newTodo = {
        todo: inputField.value,
    }

    
    todoList.push(newTodo);
    displayMessages ();
    checkRemoveComplete ();
    inputField.value = '';
});

function displayMessages () {
    let displayMessage = "";
    if (todoList.length === 0) todo.innerHTML = '';
    todoList.forEach(function(item, index) {
        displayMessage += `
        <li class="todo-item ${item.checked ? 'complete' : ''}" id="item_${index}">
            <button class="check" id="btn_check_${index}"><ion-icon class="check-icon" name="checkmark-outline"></ion-icon></button>
            <p>${item.todo}</p>
            <button class="delete" id="btn_del_${index}"><ion-icon class="delete-icon"name="close-outline"></ion-icon></button>
        </li>
        `;
        todo.innerHTML = displayMessage;

        taskRemover = document.querySelectorAll(".delete");
        taskChecker = document.querySelectorAll(".check")
    });
}

function checkRemoveComplete () {
    taskChecker.forEach(function(item, index) {
        item.addEventListener("click", function (event_comp) {
            if (todo.contains(event_comp.target)) {      
                todo.children[index].classList.toggle("complete");
                todo.children[index].childNodes[1].childNodes[0].classList.toggle("active");
                

            }
            
        })
    })
    taskRemover.forEach(function (item, index) {
        item.addEventListener("click", function (event_del) {
            if(todo.contains(event_del.target)) {
                todo.children[index].remove();



            }
        })
    })
}




window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});
  
  