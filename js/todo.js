const todoForm = document.querySelector('#todo_form')
const todoInput = todoForm.querySelector('input')
const todoList = document.querySelector('#todo_list')

const TODOS_KEY = "todos"

let todos = [];  // writeTodo()가 동작 할때마다 그 내용을 이 array에 push 하려 한다.

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}



function delTodo(event) {
    // console.log(event.target.parentNode) 아래랑 같음
    console.log(event.target.parentElement)
    const li = event.target.parentElement;
    li.remove();

}

function writeTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span')
    const btn = document.createElement('button')
    // console.log(newTodo, '작성!')
    li.appendChild(span)
    li.appendChild(btn)
    span.innerText = newTodo;
    btn.innerText = '❌';
    btn.addEventListener('click', delTodo)
    // console.log(li)
    todoList.appendChild(li)

}

function onTodoSubmit(event) {
    // console.log(event)
    event.preventDefault(); //기본 동작을 막는다.
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo)
    writeTodo(newTodo)
    saveTodos()
}

todo_form.addEventListener("submit", onTodoSubmit);

// 삭제하려면 먼저 여기서 손을보고...

const savedList = localStorage.getItem(TODOS_KEY);
// console.log(savedList)  // 문자열로 저장된 TODOS
if (savedList !== null){
    const parsedList = JSON.parse(savedList)
    // console.log(parsedList) // JSON parse 된 TODOS
    todos = parsedList;
    // parsedList.forEach((item) => console.log(item, ' 차례입니다.')); // 간단한 함수 한줄쓰기
    parsedList.forEach(writeTodo);


}