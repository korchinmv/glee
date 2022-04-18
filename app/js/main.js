$(function () {
	const buttonMenu = document.querySelector('.burger');
	const menuActive = document.querySelector('.menu');

	buttonMenu.onclick = function () {
		menuActive.classList.toggle('menu--active');
		buttonMenu.classList.toggle('burger--active');
	};

	$('.tabs__top-item').on('click', function (e) {   //ТАБЫ//
		e.preventDefault();  //Отключаем нажатие (переход) по ссылке//
		$('.tabs__top-item').removeClass('tabs__top-item--active');
		$(this).addClass('tabs__top-item--active');

		$('.tabs__content-item').removeClass('tabs__content-item--active');
		$($(this).attr('href')).addClass('tabs__content-item--active');
	});

	$('.related-products__list').slick({
		slidesToShow: 4,
		infinite: 'false',
		prevArrow: '<button type="button" class="related-products__slick-prev"><svg><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
		nextArrow: '<button type="button" class="related-products__slick-next"><svg><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
	});

	$('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big',
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		vertical: true,
		draggable: false,
		arrows: false,
	});

	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',
		arrows: false,
		fade: true,
		draggable: false,
	});

	$('.filter-price__input').ionRangeSlider({
		type: "double",
		prefix: "$",
		step: '0.010',
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		}
	});

	$('.main-slider__wrapper').slick({
		dots: true,
		arrows: false,
	});

	$('.shop-content__btn').on('click', function () {
		$('.shop-content__btn').removeClass('shop-content__btn--active');
		$(this).addClass('shop-content__btn--active');
	});

	$('.btn-list').on('click', function () {
		$('.product-card').addClass('product-card--list');
		$('.shop-content__item').addClass('shop-content__item--list');
		$('.pagination').addClass('pagination--list');
	});

	$('.btn-grid').on('click', function () {
		$('.product-card').removeClass('product-card--list');
		$('.shop-content__item').removeClass('shop-content__item--list');
		$('.pagination').removeClass('pagination--list');
	});

	$('.stepper').styler();

	$('.star').rateYo({
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		numStars: '5',
		fullStar: 'true',
		starWidth: "11px",
		readOnly: 'true',
		"starSvg": `<?xml version="1.0" encoding="iso-8859-1"?>
		<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">
			<path style="fill:;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
			c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
			c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
			c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
			c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
			C22.602,0.567,25.338,0.567,26.285,2.486z"/>
		</svg>`,
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

let center = [55.60870614221721, 37.71377349545635];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 16,
	});

	//подключаем кастомную метку на карты
	let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: 'Хедер балуна',
		balloonContentBody: 'Боди балуна',
		balloonContentFooter: 'Подвал'
	}, {
		iconLayout: 'default#image',
		iconImageHref: '../images/icons/icon-location-dot.svg',
		iconImageSize: [40, 40], //размер метки на карте
		iconImageOffset: [-20, -40]  //точные координаты иконки подстраиваем тут
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark);
}
ymaps.ready(init);

