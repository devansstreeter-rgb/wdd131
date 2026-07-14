const navi = document.getElementById("mobile-nav");
const menuButton = document.getElementById("menu-icon");

function activate() {
    navi.classList.toggle("rest");
    navi.classList.toggle("open");
    if (menuButton.innerHTML == "x") {
        menuButton.innerHTML = "≡";
    } else {
        menuButton.innerHTML = "x";
    }
}