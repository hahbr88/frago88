const clock = document.getElementById('clock')

// function getClock() {
//     const dt = new Date();
//     const hours = String(dt.getHours()).padStart(2, "0");
//     const mins = String(dt.getMinutes()).padStart(2, "0");
//     const secs = String(dt.getSeconds()).padStart(2, "0");
//     clock.innerText = `${hours}:${mins}:${secs}`;
// }
// getClock()
// setInterval(getClock, 1000)

function simpleClock() {
    time = new Date().toTimeString().split(" ")[0]
    clock.innerText = time
}
simpleClock()
setInterval(simpleClock, 1000)


function getDate() {
    YYYYMMDD = new Date().toISOString().split("T")[0]
}
