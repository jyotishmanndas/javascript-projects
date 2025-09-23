let theme = localStorage.getItem("theme");
if (theme) {
    document.body.classList.add(theme);
} else {
    setDarkOrLight()
};


function setDarkOrLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
    if (!theme) {
        setDarkOrLight();
    }
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
})