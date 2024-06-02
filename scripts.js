let ms = document.getElementById("miliSecond");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let Min = document.getElementById("minute");
let sec = document.getElementById("second");
let Hrs = document.getElementById("hours");

let set;
let mili = 0;
let second = 0;
let minutes = 0;
let hours = 0;

function MiliSecond() {
    mili++;
    if (mili === 100) {
        mili = 0;
        second++;
        if (second === 60) {
            second = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    ms.innerText = mili < 10 ? `0${mili}` : mili;
    sec.innerHTML = (second > 9) ? `${second}.` : `0${second}.`;
    Min.innerHTML = (minutes > 9) ? `${minutes}:` : `0${minutes}:`;
    Hrs.innerHTML = (hours > 9) ? `${hours}:` : `0${hours}:`;
}

start.addEventListener('click', () => {
    set = setInterval(MiliSecond, 10);
    start.disabled = true;
    stop.disabled = false;
});

stop.addEventListener('click', () => {
    clearInterval(set);
    start.disabled = false;
    stop.disabled = true;
});

reset.addEventListener('click', () => {
    clearInterval(set);
    mili = 0;
    second = 0;
    minutes = 0;
    hours = 0;
    ms.innerHTML = "00";
    sec.innerHTML = "00.";
    Min.innerHTML = "00:";
    Hrs.innerHTML = "00:";
    start.disabled = false;
    stop.disabled = true;
});
