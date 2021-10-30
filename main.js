let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 3000 / goal);
}
////////////////////////////////////////////////////////////////////////


let countdowndate = new Date("Dec 31, 2021 23:59:59").getTime();
let counter = setInterval(() => {
    let datenow = new Date().getTime();
    let datedif = countdowndate - datenow;
    let days = Math.floor(datedif / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datedif % ( 1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let minutes = Math.floor((datedif % ( 1000 * 60 * 60)) / ( 1000 * 60) );
    let seconds = Math.floor((datedif % ( 1000 * 60)) / ( 1000));
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
},1000)

///////////////////////////////////

