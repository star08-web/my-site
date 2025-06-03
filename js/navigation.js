let menu = document.getElementById("menu")
let closeicn = document.getElementById("close-icon-menu")
let openicn = document.getElementById("open-icon-menu")
let navbar = document.querySelector('.navbar');
menu.addEventListener("mouseenter", () => {
    if (document.body.dataset.nav === "false") {
        closeicn.style.opacity = 0
        openicn.style.opacity = 1
    } else {
        openicn.style.opacity = 0
        closeicn.style.opacity = 1
    }
})
menu.addEventListener("mouseleave", () => {
    if (document.body.dataset.nav === "false") {
        closeicn.style.opacity = 0
        openicn.style.opacity = 0
    } else {
        openicn.style.opacity = 0
        closeicn.style.opacity = 0
    }
})
menu.addEventListener("click", () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
    menu.classList.toggle("menu-upper");

    if (document.body.dataset.nav === "false") {
        closeicn.style.opacity = 0;
        openicn.style.opacity = 1;
        navbar.classList.remove("open");
        menu.classList.remove("toggled");
    } else {
        openicn.style.opacity = 0;
        closeicn.style.opacity = 1;
        navbar.classList.add("open");
        menu.classList.add("toggled");
    }
});

function debugAccess(){
  const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  let position = 0;
  let timeoutId = null;
  const timeoutLimit = 1500;

  function resetSequence() {
    position = 0;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }

  function onKeyDown(e) {
    const key = e.key;

    if (key === konamiCode[position]) {
      position++;
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(resetSequence, timeoutLimit);

      if (position === konamiCode.length) {
        window.location.replace("/__debug.html");
        resetSequence();
      }
    } else {
      resetSequence();
    }
  }

  window.addEventListener("keydown", onKeyDown);
}

document.addEventListener("DOMContentLoaded", debugAccess);