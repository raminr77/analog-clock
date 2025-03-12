const barsContainer = document.querySelector('.bars');
const hoursContainer = document.querySelector('.numbers');
const digitalClock = document.querySelector('.digital-clock');
// HANDS
const handHours = document.querySelector('.h-hand');
const handMinutes = document.querySelector('.m-hand');
const handSeconds = document.querySelector('.s-hand');

const init_UI = () => {
    const bars = [];
    const numbers = [];

    for (let i = 1; i <= 60; i++) {
        if (i <= 12) {
            numbers.push(`<span style="--index:${i}"><p>${i}</p></span>`);
        }
        bars.push(`<span style="--index:${i}"><p></p></span>`);
    }

    barsContainer.insertAdjacentHTML('afterbegin', bars.join(''));
    hoursContainer.insertAdjacentHTML('afterbegin', numbers.join(''));
};

const getCurrentTime = () => {
    const date = new Date();
    const h = date.getHours();
    const s = date.getSeconds();
    const m = date.getMinutes();

    handSeconds.style.transform = `rotate(${s * 6}deg)`;
    handMinutes.style.transform = `rotate(${m * 6}deg)`;
    handHours.style.transform = `rotate(${h * 30 + m / 2}deg)`;

    digitalClock.innerHTML = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
};

init_UI();
setInterval(getCurrentTime, 1000);
