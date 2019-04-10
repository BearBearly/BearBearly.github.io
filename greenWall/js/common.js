$(document).ready(function() {
	
	$('.galery_popup').magnificPopup({type:"image"});

	$('.popup').magnificPopup({type: 'inline'});

	$(".main_nav a").mPageScroll2id({ scrollSpeed : 550 });

	$('.works_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1000,

		responsive: [
		{
			breakpoint: 1320,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}
		}
		]
	});

	$(".tel").mask("+7 (999) 99-99-999");

	/*Акардеон делел не я, просто было 3:48 утра и я искал хоть чтото подходящее */

	! function(i) {
		var o, n;
		i(".title_block").on("click", function() {
			o = i(this).parents(".accordion_item"), n = o.find(".info"),
			o.hasClass("active_block") ? (o.removeClass("active_block"),
				n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
				o.siblings(".active_block").removeClass("active_block").children(
					".info").stop(!0, !0).slideUp())
			})
	}(jQuery);
	
});