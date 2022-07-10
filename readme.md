# 22.07.09 첫 커밋!

> ### 구현내용
>-   현재 시간 출력
>-   유저 이름을 입력해서 로그인
>-   로그인 확인 후 인삿말 출력
>-   무작위 영문 명언(?) 출력
>-   무작위 백그라운드 이미지 출력
>-   Todo List 입력, 저장, 출력, 삭제
>-   API로 현재 위치 날씨 정보 출력

<br>

---
<br>

> ### TODO
>
>-   로그 아웃 기능
>-   날짜 출력 추가
>-   CSS 완성하기

<br>

---

### 구현 과정 정리
<br>

#### 시계

`<body>`

```html
<body>
    <form class="hidden" id="login_form">
        <input required maxlength="15" type="text" placeholder="당신의 이름은?" />
        <button class="loginBtn">Log In</button>
    </form>
    <h2 id="clock">00:00:00</h2>
    <h1 id="greeting" class="hidden"></h1>
    <form id="todo_form">
        <input type="text" placeholder="오늘의 할 일을 적어보세요!" required />
    </form>
    <ul id="todo_list">
        <!-- 여기에 Todo list -->
    </ul>
    <div id="quotes">
        <span></span>
    </div>
    <div id="weather">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <!-- JS -->
    <script src="js/greeting.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quotes.js"></script>
    <script src="js/background.js"></script>
    <script src="js/todo.js"></script>
    <script src="js/weather.js"></script>
</body>
```

```javascript
const clock = document.getElementById("clock");

function getClock() {
    const dt = new Date();
    const hours = String(dt.getHours()).padStart(2, "0");
    const mins = String(dt.getMinutes()).padStart(2, "0");
    const secs = String(dt.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${mins}:${secs}`;
}
getClock()
setInterval(getClock, 1000)
```
처음엔 Date 에서 각각 시, 분, 초 를 가져와서 1의자리 일 때 padStart()를 사용하여 앞에 '0'을 하나 padding 하도록 만들었다.

그리고 setInterval() 으로 1초마다 내용이 갱신되게 하였다.

하지만 더 쉬운 방법이 있다.

```javascript
function simpleClock() {
    time = new Date().toTimeString().split(" ")[0];
    clock.innerText = time;
}
simpleClock();
setInterval(simpleClock, 1000);
```
Date().toTimeString()을 쓰면 바로 문자열로 시간을 가져오게 되고 필요한대로 슬라이싱 하면 된다.
같은 내용을 더 적은 코드로 구현할 수 있다.

setInterval() 위에 한번 더 함수를 실행시키는 이유는 사이트가 로딩 되자마자 시계를 출력하기 위해서다. 그러지 않으면 1초뒤에 시계가 나타나게 된다.