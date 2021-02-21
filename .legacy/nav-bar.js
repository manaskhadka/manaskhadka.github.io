'use strict';

// Creating a sticky nav bar
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

const enableSticky = function () {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
};

window.onscroll = function () {
	enableSticky();
};
