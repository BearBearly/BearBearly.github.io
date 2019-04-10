$(function() {

	$(".btn_skroll_bot >a").mPageScroll2id();

	$(".mm-listitem >a").mPageScroll2id();

	$('#my-menu').mmenu({
		"extensions": [
		"pagedim-black",
		"position-right",
		"theme-dark"
		]
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
		$('.name').fadeOut();
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
		$('.name').fadeIn();
	});

	var API = $("#my-menu").data( "mmenu" );

	$('.mm-listitem').click(function(){
		if ($(this).hasClass('open'))
		{
			API.open();
		}
		else
		{
			API.close();
		}
	});

	$('.slick_slider').slick({
		dots: true
	});


	$('.popup').magnificPopup();

	var coordinats = $('header').offset().top;
	
	$(window).scroll(function(){

		var windowScrollTop = $(window).scrollTop();

		if (windowScrollTop >= coordinats) {
			$('.btn_to_top').addClass('active');
		}else{
			$('.btn_to_top').removeClass('active');
		}

	});

	$(function() {
		$.fn.scrollToTop = function() {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
				var scrollDiv = $(this);
			$(window).scroll(function() {
				if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
					else $(scrollDiv).fadeIn("slow")
				});
			$(this).click(function() {
				$("html, body").animate({scrollTop: 0}, "slow")
			})
		}
	});

	$(function() {
		$(".btn_to_top").scrollToTop();
	});

});