var burger = document.getElementById("header__nav"); //обращаемся по id 

function showMenu(e) {
  e.preventDefault();
document.body.classList.toggle("open");
burger.classList.toggle("menu-expanded");
document.getElementById("nav-list").classList.toggle("show");
document.getElementById("bar").classList.toggle("bar-rot");
}

burger.addEventListener("click", showMenu, false);


// function for slider

var slideIndex = 1;
showSlide(slideIndex);

function currentDiv(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("slider__button");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slider__button_active", "");
  }

  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " slider__button_active";
}

var paginationItem =[].slice.call(document.getElementsByClassName("slider__button"));

paginationItem.forEach(function (elem, i){
  elem.addEventListener("click", function(){
    currentDiv(i+1)
  });
});