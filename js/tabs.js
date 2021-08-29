$(document).ready(function() {

	var tab = $('.tab');
	var tabToggle = tab.find('.tab-toggle__item');


	tabToggle.on('mouseover', function() {
		tabToggle.removeClass('tab-toggle__item_active');
		$(this).toggleClass('tab-toggle__item_active');
		tabulate($(this));

	});


	function tabulate(a){
		var tabLink = a.attr('href');
		var tabCont = $('.tab-content__item');
		tabCont.removeClass('tab-content__item_visible');
		$(tabLink).toggleClass('tab-content__item_visible');		
		
	}

});
	



