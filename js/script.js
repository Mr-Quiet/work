window.addEventListener('DOMContentLoaded', () => {
	let burger = document.querySelector('.menu__burger');
	let header_menu = document.querySelector('.menu__burger-list');

	burger.addEventListener('click', function () {
		this.classList.toggle("active");
		header_menu.classList.toggle("active");
	});
});



/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
	showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
	showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("item");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}


const smoothLinks = document.querySelectorAll('a[href^="#"]');

// smoothLinks.scrollIntoView({ behavior: 'smooth' });
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}

// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;

// 	console.log(scrollDistance);

// 	document.querySelectorAll('.anchor').forEach((el, i) => {
// 		if (el.offsetTop = document.querySelector('.nav').clientHeight <= scrollDistance) {
// 			document.querySelectorAll('.nav ul').forEach((el) => {
// 				if(el.classList.contains('active')) {
// 					el.classList.remove('active');
// 				}
// 			});

// 			document.querySelectorAll('.nav ul')[i].querySelector('li').classList.add('active');
// 		}
// 	});
// });