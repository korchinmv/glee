$(function () {

	$('.main-slider__wrapper').slick({
		dots: true,
		arrows: false,

	});

	var containerEl1 = document.querySelector('[data-ref="container-1"]');  //микситап на 2 контейнера на странице
	var containerEl2 = document.querySelector('[data-ref="container-2"]');

	var config = {
		controls: {
			scope: 'local'
		}
	};

	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);
});