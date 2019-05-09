$(function() {
/*---------------- Modal -------------------*/
	$('.header-profile_login').on('click', function(e){
		e.preventDefault();
		var modal = document.querySelector('.modal');
		var btnClose = modal.querySelector('.modal-close');

		animateActive(modal);	
		$('body').css('overflow-y', 'hidden');
		
		//удаление формы после закрытия окна и отправки сообщения
		function closeModal(modal){
			animateExit(modal);
			$('body').css('overflow-y', 'scroll');
		};
		btnClose.addEventListener('click', function(){
			closeModal(modal);
		}, false);
	});

	$('.modal-tab').on('click', function(e){
		e.preventDefault();
		var ind = parseInt($(this).attr('data-index'));
		var modalOld = document.querySelector('.modal-content.active');
		var tabOld = document.querySelector('.modal-tab.active');
		var modalNew = document.querySelector('.modal-content[data-index="' + ind + '"]');
		if(!this.classList.contains('active')){
			tabOld.classList.remove('active');
			animateExit(modalOld);
			this.classList.add('active');
			function enter(){
				animateActive(modalNew);
			};
			setTimeout(enter, 310);
		}
	})

	//анимация
	function animateActive (modal){
		var handler = function(){
			modal.classList.remove('active');
			modal.removeEventListener('transitionend', handler);
		};

		modal.classList.add('enter');

		raf(function(){
			modal.classList.add('active');
			modal.classList.remove('enter');
		});
	};

	function animateExit (modal){
		var handler = function (){
			modal.classList.remove('exit');
			modal.classList.remove('active');
			modal.removeEventListener('transitionend', handler);
		};
		modal.classList.add('exit');
		modal.addEventListener('transitionend', handler);
	};


	function raf(fn){
		window.requestAnimationFrame(function(){
			window.requestAnimationFrame(function(){
				fn();
			})
		})
	}

/*----------------ScrollBar -------------------*/
        $('.scroll-pane').jScrollPane();
/*----------------HEADER-------------------*/
    $(window).on('scroll', function() {
        var height = $(window).scrollTop();
        if(height > 150){
            $('.header').addClass('active');
        } else{
            $('.header').removeClass('active');
        }
    });
/*----------------MASONRY-------------------*/
    var $container = $(".grid");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".col-md-3",
            itemSelector: ".grid-item"
        });
        $(".grid-item_bg").imagefill();
    });
/*----------------slick -------------------*/
//-------Gallery
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
//-------Revies
    $('.slider-dots').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        dots: true,
        appendDots: $('.dot_custom'),
        prevArrow: $('.prev_custom'),
        nextArrow: $('.next_custom')
    });
/*----------------Magnific Popup -------------------*/
    $(document).ready(function() {
        $('.popup').magnificPopup({type:'image'});
    });

// -----------------------------TABS filter----------------------
    $(".filter-title").click(function( e ){ e.preventDefault(); });
    $(".filter-title").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).parent(".filter-wrapp").removeClass("active");
            $(this).parent(".filter-wrapp").children(".filter").removeClass("active");
        } else {
            $(this).toggleClass("active");
            $(this).parent(".filter-wrapp").toggleClass("active");
            $(this).parent(".filter-wrapp").children(".filter").toggleClass("active");
        }

    });
// -----------------------------Style filter----------------------
    $(document).ready(function() {
        var cssValues = {
            "max-height":"0",
            "visibility":"hidden",
            "opacity":"0",
            "padding":"0"
        }
        $('.filter').css(cssValues)
    });
// -----------------------------Price----------------------
     $("#slider-range").rangeSlider({
         bounds:{
             min: 0,
             max: 25000
         },
         formatter:function(val){
             var value = Math.round(val),
                 decimal = value - Math.round(val);
             return decimal == 0 ? value.toString() + "руб." : value.toString();
         }
     });

// -----------------------------Product img slider ----------------------
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        prevArrow: $('.prev_thumb-img'),
        nextArrow: $('.next_thumb-img')
    });

    $(window).scroll(function (){
        if ($(this).scrollTop() > 900){
            $(".up").addClass('active');
        } else{
            $(".up").removeClass('active');
        }
    });

    $(".up").click(function (){
        $("body,html").animate({
            scrollTop:0
        }, 800);
        return false;
    });

    $(".js-photo").imagezoomsl({
	  
        innerzoommagnifier: true,
        classmagnifier: window.external ? window.navigator.vendor === "Yandex" ? "" : "round-loupe" : "",
        magnifierborder: "5px solid red",	  
        zoomrange: [2, 8],
        zoomstart: 4,
        magnifiersize: [150, 150]		
		});
});




