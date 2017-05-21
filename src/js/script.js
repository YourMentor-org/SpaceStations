var burger = document.getElementById("header__nav"); //обращаемся по id 

function showMenu(e) {
  e.preventDefault();
document.body.classList.toggle("open");
burger.classList.toggle("menu-expanded");
document.getElementById("nav-list").classList.toggle("show");
document.getElementById("bar").classList.toggle("bar-rot");
}

burger.addEventListener("click", showMenu, false);