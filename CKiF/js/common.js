$(document).ready(function() {
	
	$('.galery_popup').magnificPopup({type:"image"});

	$('.popup').magnificPopup({type: 'inline'});

	$(".main_nav a").mPageScroll2id({ scrollSpeed : 550 });

	$(".tel").mask("+7 (999) 99-99-999");
	
	$('select').jselector();
});