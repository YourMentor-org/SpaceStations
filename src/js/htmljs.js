var elem = document.createElement('ul'); // create ul element
elem.className = 'services';
document.body.appendChild(elem); // set up in inside body

var list = document.createElement('li'); //create li
list.className = 'services__item';
elem.appendChild(list); // li set up inside ul

var msg = '<span class="services__logo"><img src="src/img/logo-web.png" alt="" class="services__pic services__pic_web" width="40" height="40"></span>';
msg += '<h2 class="services__heading">Web Design</h2>';
msg += '<p class="services__text">This is&nbsp;Photoshop`s version of&nbsp;Lorem Ipsum. proim gravida nibh vel velit auctor aliquet mauris.</p>';

list.innerHTML = msg; // html inside li


var list2 = document.createElement('li');
list2.className = 'services__item';
elem.appendChild(list2);

var msg2 = '<span class="services__logo"><img src="src/img/logo-design.png" alt="" class="services__pic services__pic_anchor" width="40" height="40"></span>';
msg2 += '<h2 class="services__heading">Logo Design</h2>';
msg2 += '<p class="services__text">This is&nbsp;Photoshop`s version of&nbsp;Lorem Ipsum. proim gravida nibh vel velit auctor aliquet mauris.</p>';

list2.innerHTML = msg2;

var list3 = document.createElement('li');
list3.className = 'services__item';
elem.appendChild(list3);

var msg3 = '<span class="services__logo"><img src="src/img/logo-print.png" alt="" class="services__pic services__pic_print" width="40" height="40"></span>';
msg3 += '<h2 class="services__heading">Print Design</h2>';
msg3 += '<p class="services__text">This is&nbsp;Photoshop`s version of&nbsp;Lorem Ipsum. proim gravida nibh vel velit auctor aliquet mauris.</p>';

list3.innerHTML = msg3;
