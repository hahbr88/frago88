const todoForm = document.querySelector('#todo_form')
const todoInput = todoForm.querySelector('input')
const todoList = document.querySelector('#todo_list')


const TODO_KEY = "todo";

function writeTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span')
    const btn = document.createElement('button')
    // console.log(newTodo, '작성!')
    li.appendChild(span)
    span.innerText = newTodo;
    btn.innerText = 'done'
    li.appendChild(btn)
    // console.log(li)
    todoList.appendChild(li)

}

function onTodoSubmit(event) {
    event.preventDefault(); //기본 동작을 막는다.
    const newTodo = todoInput.value;
    todoInput.value = "";
    writeTodo(newTodo)
}

todo_form.addEventListener("submit", onTodoSubmit);