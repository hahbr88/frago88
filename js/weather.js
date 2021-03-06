const API_KEY = "9eb9bef9a874a362a38c4362cb02b64e";

function onGeoSuc(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}`;
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            const WIcon = document.querySelector("#weather span:first-child");
            const WMain = document.querySelector("#weather span:nth-child(2)");
            const WDesc = document.querySelector("#weather span:last-child");
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            console.log(WIcon);
            // console.log(WMain)
            // console.log(WDesc)
            console.log(iconUrl);
            WIcon.innerHTML = `<img src="${iconUrl}">`;
            WMain.innerText = data.weather[0].main;
            WDesc.innerText = data.weather[0].description;

            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.weather[0].icon);
        });
}

function onGeoErr() {
    alert("사용자의 위치를 찾을 수 없어, 날씨가 정확히 표시되지 않습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuc, onGeoErr);



// weather.js 에 변동사항

// weather.js 에 추가적인 변동사항

// weather.js 에 또 한번 추가적인 변동사항


// 병합후 푸시하고 작업작업
// 커밋 하고 또또 작업작업

// 병합후 푸시하고 작업작업
// 커밋 하고 또또 작업작업
// 병합후 푸시하고 작업작업
// 커밋 하고 또또 작업작업