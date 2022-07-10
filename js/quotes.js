const quotes = document.querySelector("#quotes span");
const quotes_api_url = "https://api.adviceslip.com/advice";

function loadQuotes() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this);
        if (this.readyState === 4 && this.status === 200) {
            let qq = this.responseText;
            quotes.innerText = '"' + qq.split('"')[7] + '"';
        }
    };
    xhttp.open("GET", quotes_api_url, true); // (요청방식, url, 비동기로)
    xhttp.send(); // 요청!(submit!)
}
loadQuotes();
setInterval(loadQuotes, 5000);

// 더 간단하게 할 수도 있겠는데..?
// const simpleWay = document.createElement('span');

// .appendChild(simpleWay);

// function loadQuotes1() {

// }

// 1) XMLHttpRequest 객체 생성
// 2) onreadystatechange는 Ajax요청에 대한 서버응답의 readyState가 변할 때 마다 호출되는 함수이다.
// 3) readyState == 4, status == 200 이 정상적인 서버응답의 조건이므로, 이 조건문 안에 응답받았을 때 실행될 로직을 작성한다.(다른 함수에 로직을 작성하고 호출해도 좋음.)
// 4) open()는 요청을 특정하는 메소드.(파라미터를 이용해 요청방식을 정함)
// 5) send()는 서버로 요청을 보내는 메소드.
// 6) 제어순서 : loadDoc()이 호출될 때, open() -> send() -> 조건문 안의 로직(정상적인 응답이 왔을 때)
