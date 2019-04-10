$(function () {

	$("header nav ul li a").mPageScroll2id();

	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true,
		gallery:{enabled:true}
	});	

	$(".popup_content_g").magnificPopup({
		type:"inline",
		midClick: true,
		gallery:{enabled:true}
	});
	
});

