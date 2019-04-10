$(function(){
	
	$('.slider').slick();

	$("#datepicker").datepicker();

	$('select').jselector();

	$('.mnu_toggle').click(function(){
		if ($(this).hasClass('active')){
			$('.main_menu nav').slideUp();
			$(this).removeClass('active');
		}else{
			$('.main_menu nav').slideDown();
			$(this).addClass('active');
		}
	});
	
	$('.fancy').fancybox();

});