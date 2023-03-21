/* Navigation  */
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const logo = document.querySelector('.logo-small');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
	logo.classList.toggle('logo-small--fixed');
});

navLinks.forEach(function (item, index) {
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('nav--active');
		logo.classList.remove('logo-small--fixed');

	});

	item.addEventListener('keydown', function (event) {
		if (nav.classList.contains('nav--active') && event.keyCode === 9) {
			if (event.shiftKey) {
				if (index === 0) {
					event.preventDefault();
					navIcon.focus();
				}
			} else {
				if (index === navLinks.length - 1) {
					event.preventDefault();
					navIcon.focus();
				}
			}
		}
	});
});

navIcon.addEventListener('keydown', function (event) {
	if (nav.classList.contains('nav--active') && event.keyCode === 9) {
		event.preventDefault();
		navLinks[0].focus();
	}
});

document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('nav--active');
	}
});

//# sourceMappingURL=main.js.map
