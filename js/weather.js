const API_KEY = "9eb9bef9a874a362a38c4362cb02b64e"

function onGeoSuc(position) {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}`
    fetch(API_URL).then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        weather = data.weather[0].main
        console.log(data.weather[0].main)
        console.log(data.weather[0].description)
        console.log(data.name)
    })

}

function onGeoErr() {
    alert("사용자의 위치를 찾을 수 없어, 날씨가 정확히 표시되지 않습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoSuc, onGeoErr)




let weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
  };