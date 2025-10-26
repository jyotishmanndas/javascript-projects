let input = document.querySelector("input");
let button = document.querySelector("button");
let profileCard = document.querySelector("#profile-card")

button.addEventListener("click", () => {
    getUsers(input.value);
    input.value = ""
})

async function getUsers(username) {
    if (!username) return;
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);

    card(data)
}

function card(data) {
    let div = document.createElement("div");
    div.classList.add("card")

    let img = document.createElement("img");
    img.classList.add("profile-img")
    img.src = data.avatar_url

    let username = document.createElement("span");
    username.textContent = `Username: ${data.login}`

    let name = document.createElement("span");
    name.textContent = `Name: ${data.name}`

    let followers = document.createElement("p");
    followers.textContent = `Followers: ${data.followers}`

    let bio = document.createElement("p");
    bio.textContent = `Bio: ${data.bio}`

    let email = document.createElement("p");
    email.textContent = `Email: ${data.email}`

    let location = document.createElement("p");
    location.textContent = `Location: ${data.location}`

    let link = document.createElement("a");
    link.setAttribute("target", "_blank")
    link.href = `${data.html_url}`
    link.classList.add("link")
    link.textContent = `View Profile`

    div.appendChild(img);
    div.appendChild(username);
    div.appendChild(name);
    div.appendChild(followers);
    div.appendChild(bio);
    div.appendChild(email);
    div.appendChild(location);
    div.appendChild(link)

    profileCard.appendChild(div)
}