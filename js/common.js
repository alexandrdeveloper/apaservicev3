$(document).ready(function() {
	
	

	

	$('.menu-toggle').on('click', function() {
		$(this).toggleClass('menu-toggle_close');
		$('.wrapper').toggleClass('wrapper_moved');
		$('body').toggleClass('no-scroll');
	});


	var acc = $('.accordeon__item > .accordeon__title');

	$('.accordeon__item_active>.accordeon__info').slideDown(300);

	acc.on('click', function() {
		if ($(this).parent('.accordeon__item').hasClass('accordeon__item_active')) {
			$(this).next('.accordeon__info').slideUp(300);
			$(this).parent('.accordeon__item').removeClass('accordeon__item_active');
			
		} else {
			$('.accordeon__item').removeClass('accordeon__item_active');
			$('.accordeon__info').slideUp(300);
			$(this).next('.accordeon__info').slideDown(300)
			$(this).parent('.accordeon__item').toggleClass('accordeon__item_active');
			;
		}
	});


	var formInit = $('.price__modal-init');
	var priceModal = $('.price-modal');
	var priceModalClose = $('.price-modal__close');

	

	formInit.on('click', function(e) {
		e.preventDefault();
		priceModal.toggleClass('price-modal_active');
	});

	priceModalClose.on('click',  function(e) {
		e.preventDefault();
		priceModal.removeClass('price-modal_active');	
	});

	$('.certificate__carousel2').slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 420,
			settings: {
				slidesToShow: 1
			}
		}]
	});


	$('.b-banner-bg').slick({
		slidesToShow: 1,
		asNavFor: $('.b-banner-content'),
		fade: true,
	});
	$('.b-banner-content').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: $('.b-banner-bg'),
	});

	$('.certificate__link').magnificPopup({
	  type: 'image'
	});

	$('.calc-open').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('calc-open_active');
		$('.calc').toggleClass('calc_visible-mobile');
	});
	

	$('.header-categories').waypoint(function() {
		$('.calc').toggleClass('calc_visible');
	});

	$('.contacts').waypoint(function() {
		if($('.calc').hasClass('calc_visible')){
			$('.calc').removeClass('calc_visible');
		} else {
			$('.calc').toggleClass('calc_visible');
		}
		
	}, { offset: '50%' });

		
	$(".phone-num-input").inputmask("+7 (999) 999 99 99");

		
	var rooms = $('#rooms-num');
	var bath = $('#bath-num');
	var roomSelectInd = 0;

	$('.rooms-minus').on('click', function(e) {
		e.preventDefault();
		if (rooms.val() > 1) {
			rooms.val(Number(rooms.val()) - 1);
			$('.rooms').val(rooms.val()  + '-комнатная');
			
		} 
				
	});

	$('.rooms-plus').on('click', function(e) {
		e.preventDefault();
		if (rooms.val() < 5) {
			rooms.val(Number(rooms.val()) + 1);
			$('.rooms').val(rooms.val()  + '-комнатная');
			$('#rooms-select option:eq(roomSelectInd)').prop('selected',true);
			roomSelectInd++;			
			
		}				
	});

	$('.bathroom-minus').on('click', function(e) {
		e.preventDefault();
		if (bath.val() > 1) {
			bath.val(Number(bath.val()) - 1);
			if (bath.val() == 1) {
				$('.bathroom').val(bath.val()  + ' санузел');
			} else {
				$('.bathroom').val(bath.val()  + ' санузла');
			}
			
		} 
				
	});

	$('.bathroom-plus').on('click', function(e) {
		e.preventDefault();
		if (bath.val() < 3) {
			bath.val(Number(bath.val()) + 1);
			if (bath.val() == 1) {
				$('.bathroom').val(bath.val()  + ' санузел');
			} else {
				$('.bathroom').val(bath.val()  + ' санузла');
			}
		}				
	});

	//********************* New **************************/

	
	$('.page-banner__slider').slick({
		slidesToShow: 1,
		autoplay: true
	});
	

	$('.cleaner-team__more').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('no-scroll');
		$('.include-modal').fadeIn(300);
	});

	$('.include-modal__close').on('click', function(e) {
		e.preventDefault();
		$('.include-modal').fadeOut(300);
		$('body').removeClass('no-scroll');
	});

	$(document).mouseup(function (e) {
	    var container = $(".include-modal");
	    if (container.has(e.target).length === 0){
	        container.fadeOut(300);
	    }
	});
		

	

	let menuBurger = document.querySelector('.b-navbar-burger');
	let menuMobile = document.querySelector('.b-menu');
	let catToggle = document.querySelector('a.b-menu-cat');
	let catWin = document.querySelector('.b-submenu');

	

	menuBurger.addEventListener('click', function(e) {
		e.stopPropagation();
		if (this.classList.contains('b-navbar-burger_catactive')) {
			catWin.classList.remove('b-submenu_visible');
			this.classList.remove('b-navbar-burger_catactive');
		} else {
			this.classList.toggle('b-navbar-burger_active');
			menuMobile.classList.toggle('b-menu_visible');
		}
		
		
	});

	

	catToggle.addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.toggle('b-menu-cat_active');
		menuBurger.classList.add('b-navbar-burger_catactive');
		catWin.classList.toggle('b-submenu_visible');
	});

	document.addEventListener('click', function (event) {
		var target = event.target;
		var its_menu = target == menuMobile || menuMobile.contains(target);
		var its_hamburger = target == menuBurger;
		var its_catmenu = target == catWin;
		var menu_is_active = menuMobile.classList.contains('b-menu_visible');
		var burger_is_active = menuBurger.classList.contains('b-navbar-burger_active');
		
	  
		if (!its_menu && !its_hamburger && !its_catmenu && menu_is_active && burger_is_active) {
			menuBurger.classList.remove('b-navbar-burger_active');
			menuBurger.classList.remove('b-navbar-burger_catactive');
			menuMobile.classList.remove('b-menu_visible');
			catWin.classList.remove('b-submenu_visible');
		}
	});

	let mobileLogo = document.querySelector('.logo');
	let winPos = window.pageYOffset;

	document.addEventListener('scroll', function() {
		let winPos = window.pageYOffset;
		if (winPos > 10) {
			mobileLogo.classList.add('logo_scrolled');
		} else {
			mobileLogo.classList.remove('logo_scrolled');
		}

	});


	let callFormWin = document.querySelector('.b-modal_call');
	let formCloseBtn = document.querySelector('.b-modal__close');

	

	for (const modalInit of document.querySelectorAll(".b-call-form-init")) {
        modalInit.addEventListener('click', function(e) {
			e.preventDefault();
			let title = this.getAttribute('modalTitle');
			let btn = this.getAttribute('modalBtn');
			console.log(title, btn);
	
			let modal = callFormWin;
			let modalTitle = callFormWin.querySelector('.b-modal__title');
			let modalBtn = callFormWin.querySelector('.b-modal__submit');
	
			
	
			modalTitle.innerText = title;
			modalBtn.innerText = btn;
			callFormWin.classList.add('b-modal_visible');
		});
        
    }

	formCloseBtn.addEventListener('click', function(e) {
		e.preventDefault();
		callFormWin.classList.remove('b-modal_visible');
	});

	

	
	
	

	
	
		

});