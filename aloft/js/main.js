$(document).ready(function() {
	// Sliders
	$('.control-prev').on('click', function() {
		$(this).parent().prev().slick('slickPrev');
	});
	$('.control-next').on('click', function() {
		$(this).parent().prev().slick('slickNext');
	});

	$('.client-slider').slick({
		draggable: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 9000,
		arrows: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.about-slider').slick({
		draggable: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 9000,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.review-slider').slick({
		draggable: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 9000,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.work-slider').slick({
		draggable: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 9000,
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// Masked
	$('.js-masked').mask('+7 (999) 999 99 99');

	// Burger
	$('.burger').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.menu-wrap').toggleClass('active');
	});

	$('.menu-close').on('click', function() {
		$('.menu-wrap').removeClass('active');
		$('.burger').removeClass('active');
	});

	// Spoiler
	$('.spoiler-item__title').on('click', function() {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	// Tabs
	$('.tabs-menu__item:first').addClass('active');
	$('.tabs-item').hide();
	$('.tabs-item:first').show();

	$('.tabs-menu__item').click(function() {
		$('.tabs-item').hide();
		var tabs = $(this).attr('rel');
		$('#'+tabs).fadeIn(0);
		$('.tabs-menu__item').removeClass('active');
		$(this).addClass('active');
		$('.work-slider').slick('setPosition');
	});

	//Map
	var map;
	var address;
	var mapId = 'map';
	function initialize() {
		address = new google.maps.LatLng(53.222490, 50.188793);
		var featureOpts = [
			{
				"featureType": "administrative.country",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "simplified"
					},
					{
						"hue": "#ff0000"
					}
				]
			}
		]

	var mapOptions = {
		zoom: 16,
		center: address,
		disableDefaultUI: true,
		zoomControl: true,
		scrollwheel: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, mapId]
		},
		mapTypeId: mapId
	};

	var styledMapOptions = {
		name: 'map'
	};

	map = new google.maps.Map(document.getElementById('address'),
		mapOptions);
		var image = '';
		var myLatLng = new google.maps.LatLng(53.222490, 50.188793);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image
		});
	var blueMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	map.mapTypes.set(mapId, blueMapType);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
});