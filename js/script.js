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