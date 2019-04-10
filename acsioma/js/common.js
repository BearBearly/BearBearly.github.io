$(document).ready(function() {
	
	$('.galery_popup').magnificPopup({type:"image"});

	$('.popup').magnificPopup({type: 'inline'});

	$(".navigation a").mPageScroll2id({ scrollSpeed : 550 });

	$('.reviews').slick({
		slidesToShow: 4,
		slidesToScroll: 4,

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
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true
			}
		}
		]
	});
	
});