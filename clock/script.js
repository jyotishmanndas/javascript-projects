let hourr = document.querySelector("#hourhand");
let min = document.querySelector("#minhand");
let sec = document.querySelector("#sechand")

let date = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minDegress = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hour / 12) * 360) + 90;

    if (secondDegrees === 90) {
        sec.style.transition = "none";
    } else {
        sec.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
    }

    sec.style.transform = `rotate(${secondDegrees}deg)`;
    min.style.transform = `rotate(${minDegress}deg)`;
    hourr.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(date, 1000)