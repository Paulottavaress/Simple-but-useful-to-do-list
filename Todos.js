var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        var delElement = document.createElement('a');
        delElement.setAttribute('href', '#');
        var delText = document.createTextNode('Excluir');
           
        delElement.appendChild(delText);
        todoElement.appendChild(delElement);

        var pos = todos.indexOf(todo);
        delElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    }
}

renderTodos();


function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);  
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
