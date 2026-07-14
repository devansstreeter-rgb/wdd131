const navi = document.getElementById("mobile-nav");
const menuButton = document.getElementById("menu-icon");

menuButton.addEventListener("click", function() {
    navi.classList.toggle("rest");
    navi.classList.toggle("open");
    if (menuButton.innerHTML == "x") {
        menuButton.innerHTML = "≡";
    } else {
        menuButton.innerHTML = "x";
    }
});