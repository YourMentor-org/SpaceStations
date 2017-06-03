// var burger = document.getElementById("header__nav"); //обращаемся по id 

// function showMenu(e) {
//   e.preventDefault();
// document.body.classList.toggle("open");
// burger.classList.toggle("menu-expanded");
// document.getElementById("nav-list").classList.toggle("show");
// document.getElementById("bar").classList.toggle("bar-rot");
// }

// burger.addEventListener("click", showMenu, false);


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

//new burger menu more responsive

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
      elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}



//slider for contacts

var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#catalog .catalog__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'catalog__item';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'catalog__item showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
  pauseButton.innerHTML = '&#9658;'; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
  pauseSlideshow();
  nextSlide();
};
previous.onclick = function(){
  pauseSlideshow();
  previousSlide();
};
