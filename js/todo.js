const todoForm = document.querySelector("#todo-form");
const todoUl = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
let todos = [];


function delTodo(event){
    const li = event.target.parentElement;
    const span = event.target.innerText;
    todos = todos.filter(toDo => toDo.id !== parseInt(li.id))
    saveTodo();
    li.remove();
    if(span == "✔️"){
        if(todos.length == 0){
            answerContent.innerText = `You did it, ${localStorage.getItem("username")}!`;
        } else{
            answerContent.innerText = `Just keep trying, ${localStorage.getItem("username")}!`;
        }
    }
    
}
function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos))
}
function paintTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const secondSpan = document.createElement("span");
    secondSpan.innerText = '✔️';
    const thirdSpan = document.createElement("span");
    thirdSpan.innerText = '❌';
    
    secondSpan.addEventListener("click", delTodo)
    thirdSpan.addEventListener("click", delTodo)

    li.appendChild(span);
    li.appendChild(secondSpan);
    li.appendChild(thirdSpan);
    todoUl.appendChild(li);
}

function submitTodo(event){
    event.preventDefault();
    const todo = todoInput.value;
    answerContent.innerText = `Let's try our best, ${localStorage.getItem("username")}!`

    const todoObj = {
        text: todo,
        id: Date.now()
    }
    paintTodo(todoObj);
    todos.push(todoObj);
    saveTodo();
    todoInput.value = '';
    // localStorage.setItem("todos", JSON.stringify(todos))
}

function talkAboutTodo(){
    answerContent.innerText = `Write a to do and press enter.`;
}


const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null){
    todos = JSON.parse(savedTodos);
    todos.forEach(paintTodo);
    if(todos.length >= 1){
    answerContent.innerHTML += `<br>You have things to do, right?`;}
}

todoInput.addEventListener("click", talkAboutTodo)
todoForm.addEventListener("submit", submitTodo)