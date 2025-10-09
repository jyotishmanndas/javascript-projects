let user = [
    {
        user: "jyoti",
        dp: "https://images.unsplash.com/photo-1756296576509-e0d97f11cd3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
        status: "https://images.unsplash.com/photo-1744872665943-fd335d371059?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
    },
    {
        user: "Subodh",
        dp: "https://images.unsplash.com/photo-1743309425925-72a2e4dbb8a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
        status: "https://plus.unsplash.com/premium_photo-1759335746141-359da83fcc9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        user: "Rita",
        dp: "https://plus.unsplash.com/premium_photo-1759793983996-96f9b8caa21a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
        status: "https://images.unsplash.com/photo-1755956187917-65cbe263b4e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        user: "Himashri",
        dp: "https://images.unsplash.com/photo-1759845407006-dc69e591f506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
        status: "https://images.unsplash.com/photo-1756296576509-e0d97f11cd3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        user: "darshana",
        dp: "https://plus.unsplash.com/premium_photo-1753982281847-591a01b868fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
        status: "https://plus.unsplash.com/premium_photo-1759575073792-194b7d96793c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D"
    }
]

let allStatus = document.querySelector(".allStatus");
let full = document.querySelector(".full");
let progress = document.querySelector(".progress");
let profileImg = document.querySelector(".profile-img");
let username = document.querySelector(".username");

let sum = '';
user.forEach((val, idx) => {
    sum += `<div id=${idx} class="status">
                <img src=${val.dp}>
                <h4>${val.user}</h3>
            </div>`
});

allStatus.innerHTML = sum;

allStatus.addEventListener("click", (e) => {
    let grow = 0;
    full.style.display = "block";
    full.style.backgroundImage = `url(${user[e.target.id].status})`;

    profileImg.style.backgroundImage = `url(${user[e.target.id].dp})`;
    username.textContent = `${user[e.target.id].user}`;
    username.style.fontSize = '22px'

    let int = setInterval(() => {
        grow++;
        progress.style.width = grow + "%"
    }, 30);

    setTimeout(() => {
        full.style.display = "none";
        clearInterval(int)
    }, 3000);
})