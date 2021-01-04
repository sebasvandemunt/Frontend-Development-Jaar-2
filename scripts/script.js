// Javascript Document
var menu = document.getElementById('menu');

menu.addEventListener('click', function () {
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
});