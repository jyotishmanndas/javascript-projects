let username = document.querySelector("#name");
let des = document.querySelector("#des");
let img = document.querySelector("#img");
let form = document.querySelector("form");
let main = document.querySelector("#main")

let userdata = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userdetails = {
        username: username.value,
        des: des.value,
        img: img.value
    }
    userdata.push(userdetails);
    card()
    form.reset()
});

function card() {
    let sum = '';
    userdata.forEach((data, idx) => {
        sum += `<div class="card">
        <div class="profile-card">
            <img src=${data.img}>
        </div>
        <p>${data.username}</p>
        <p>${data.des}</p>
        <button id=${idx} class="dlt">Delete</button>
    </div>`
    });

    document.querySelector("#main").innerHTML = sum
}

main.addEventListener("click", (e) => {
    let id = e.target.id
    userdata.splice(id, 1)
    card()
})
card()