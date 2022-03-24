setInterval(() => {
    let clock = document.getElementsByClassName("clock")[0];
    let currentTime = new Date();
    let hour = currentTime.getHours();
    if (hour < 10) {
        hour = `0${hour}`
    }
    let minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    let seconds = currentTime.getSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    clock.innerHTML = `${hour}:${minutes}:${seconds}`;
}, 1000);