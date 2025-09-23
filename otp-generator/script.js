let btn = document.querySelector("button");
let p = document.querySelector("#otp-box p");
let h3 = document.querySelector("h3");

function generateOtp(num) {
    let otp = ""
    for (let i = 0; i < num; i++) {
        otp += Math.floor(Math.random() * 10)
    };
    return otp;
};

btn.addEventListener("click", () => {
    let otp = generateOtp(6);

    startTimer()
    p.textContent = otp;
    p.style.fontSize = "20px";
    btn.style.display = "none";
})

function startTimer() {
    let count = 10;
    const id = setInterval(() => {
        h3.textContent = `this otp is valid for next ${count} second`;
        h3.style.fontSize = "20px";
        h3.style.fontWeight = "400"
        count--
        if (count < 0) {
            location.reload();
            clearInterval(id)
        }
    }, 1000);
}