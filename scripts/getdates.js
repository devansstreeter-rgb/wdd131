const today = new Date();
const currentYear = document.querySelector('#currentyear');

currentYear.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
