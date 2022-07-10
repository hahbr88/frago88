const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

// 버튼
// const loginBtn = document.querySelector(".loginBtn")
// const logoutBtn = document.querySelector(".logoutBtn")

const HIDDEN_CLASS_NAME = "hidden";
const STORAGE_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본 동작을 막는다.
    loginForm.classList.add(HIDDEN_CLASS_NAME); // 'hidden' 클래스에 추가
    const userName = loginInput.value;
    localStorage.setItem(STORAGE_KEY, userName);
    showGreetings();
}

function showGreetings() {
    const userName = localStorage.getItem(STORAGE_KEY);
    greeting.innerText = `${userName}님 안녕하세요!`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
    // logoutBtn.classList.remove(HIDDEN_CLASS_NAME);
}

const savedUserName = localStorage.getItem(STORAGE_KEY);

// TODO
// 로그아웃도 구현해보자

// 로그아웃 버튼을 누르면 스토리지에 있는 username을 삭제하고 페이지를 reload 하는 함수
// 근데 버튼을 두번 눌러야 동작한다...
// function logOut(){
//     if (savedUserName === null) {
//         console.log('이미 스토리지는 비어있습니다.')
//     } else {
//         localStorage.removeItem(STORAGE_KEY)
//     }
//     window.location.reload()
// }
// logoutBtn.addEventListener('click', logOut)

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    showGreetings();
}

// addEventListener() 를 만들고 거기에 함수를 준걸 JS가 확인하면, JS는 링크를 클릭(이벤트)할 때 함수를 실행한다.
// addEventListener() 안에 함수를 넣을 때 onLoginSubmit(), onClickLink() 이런식으로 괄호를 붙이게 되면
// 이 함수들은 한번만 실행되고 더 이상 실행 되지 않는다.
// JS에게 함수의 이름만 주고 실행하는건 JS가 하게 한다.

// 하지만 때때로 기본 동작을 막아야 할 때 가 있다. 뭐가 클릭됐는지 혹은 어디가 클릭됐는지 알고 싶을 때
// 그럴때 JS는 단순히 함수를 실행시키기만 하는게 아니라, 함수를 실행시키는 동시에 그 함수에 첫번째 인자(argument)로 객체(object)를 널는다

// 함수명({지금 일어난 event에 대한 정보})
// 이런식이다.
