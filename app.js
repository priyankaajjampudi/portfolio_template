const ham=document.querySelector('.header .nav-bar .nav-list .ham');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

ham.addEventListener('click', () => {
	ham.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		ham.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});