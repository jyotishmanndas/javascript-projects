let hour = document.querySelector("#hourhand");
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


    sec.style.transform = `rotate(${secondDegrees}deg)`;
    min.style.transform = `rotate(${minDegress}deg)`;
    hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(date, 1000)