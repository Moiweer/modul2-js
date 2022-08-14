const deadline = new Date(2023, 0, 1);
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

function timer() {
    const today = new Date();
    const delta = deadline - today;

    const days = Math.floor(delta / 1000 / 60 / 60 / 24);
    const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(delta / 1000 / 60)  % 60;
    const seconds = Math.floor(delta / 1000) % 60;

    daysElement.textContent = days < 10 ? `0${days}` : days;
    hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(timer, 1000);