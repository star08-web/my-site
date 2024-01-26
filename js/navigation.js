let menu = document.getElementById("menu")
let closeicn = document.getElementById("close-icon-menu")
let openicn = document.getElementById("open-icon-menu")
let cursor = document.querySelector('.cursor');
menu.addEventListener("mouseenter", () => {
    cursor.style.background = "salmon"
    if (document.body.dataset.nav === "false"){
        closeicn.style.opacity = 0
        openicn.style.opacity = 1
    } else {
        openicn.style.opacity = 0
        closeicn.style.opacity = 1
    }
})
menu.addEventListener("mouseleave", () => {
    cursor.style.background = "whitesmoke"
    if (document.body.dataset.nav === "false"){
        closeicn.style.opacity = 0
        openicn.style.opacity = 0
    } else {
        openicn.style.opacity = 0
        closeicn.style.opacity = 0
    }
})
menu.addEventListener("click", () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
    if (document.body.dataset.nav === "false"){
        closeicn.style.opacity = 0
        openicn.style.opacity = 1
    } else {
        openicn.style.opacity = 0
        closeicn.style.opacity = 1
    }
})