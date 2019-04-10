$(function(){

	'use strict';

	$('.countdown').final_countdown({
		'start': 1362139200,
		'end': 1388461320,
		'now': 1387461319        
	});

	$('.mnu_toggle').click(function(){
		if ($(this).hasClass('active')){
			$('header nav').removeClass('active');
			$(this).removeClass('active');
		}else{
			$('header nav').addClass('active');
			$(this).addClass('active');
		}
	});

	$('.main_slider').each(function(){
		var $li = $('li', this);
		var $prev = $('.prev', this);
		var $next = $('.next', this);
		var $current = $('.main_slider_controls_count span', this);
		var $count = $('.main_slider_controls_count ins', this);
		var $pags = $('.main_slider_controls_pags', this);

		$li.eq(0).addClass('active');
		$count.text($li.length);
		$current.text($li.filter('.active').index()+1);

		$li.each(function(){
			$pags.append('<span></span>');
		});

		var $pag = $($pags.find('span'));

		$pag.eq($li.filter('.active').index()).addClass('active');

		$prev.click(function(){
			var index = $li.filter('.active').index();
			if(index == 0){
				index = $li.length
			}
			$li.eq(index-1).addClass('active').siblings().removeClass('active');
			$pag.eq(index-1).addClass('active').siblings().removeClass('active');
			$current.text(index);
		});

		$next.click(function(){
			var index = $li.filter('.active').index();
			if(index == $li.length-1){
				index = -1
			}
			$li.eq(index+1).addClass('active').siblings().removeClass('active');
			$pag.eq(index+1).addClass('active').siblings().removeClass('active');
			$current.text(index+2);
		});

		$pag.click(function(){
			$li.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
			$current.text($li.filter('.active').index()+1);
		});

	});

	$('.popular_gallery').each(function(){
		var $mainImg = $('.popular_gallery_main img', this);
		var $prevImg = $('.popular_gallery_prev span', this);

		$prevImg.click(function(){
			$mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		}).eq(0).click();
	});

	$('.popular_product').each(function(){
		var $tabBlock = $('.popular_product_all_tabs_block ul', this);
		var $tabBtn = $('.popular_product_tab_btns a', this);

		$tabBtn.click(function(){
			$tabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
			return false;
		}).eq(1).click();
	});

	$('.deals_carusel li').each(function(){
		var $mainImg = $('.deals_left_block_img img', this);
		var $prevImg = $('.deals_left_block_prev_img span', this);

		$prevImg.click(function(){
			$mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		}).eq(0).click();
	});

	$('.deals_carusel').each(function(){
		var $li = $('li', this);
		var $prev = $('.prev', this);
		var $next = $('.next', this);

		$li.eq(0).addClass('active');

		$prev.click(function(){
			var index = $li.filter('.active').index();
			if(index == 0){
				index = $li.length
			}
			$li.eq(index-1).addClass('active').siblings().removeClass('active');
		});

		$next.click(function(){
			var index = $li.filter('.active').index();
			if(index == $li.length-1){
				index = -1
			}
			$li.eq(index+1).addClass('active').siblings().removeClass('active');
		});
	});

	$('header a').click(function(){
		var link = $(this).attr('href');
		var coordinats = $(link).offset().top;
		$('html, body').animate({scrollTop:coordinats}, 650);
		return false;
	});

	$('.open_popup').click(function(){
		$('.popup .popup_title').text($(this).data('title'));
		$('.popup .popup_category').text($(this).data('category'));
		$('.popup .popup_googs_title').text($(this).data('desc'));
		$('.popup .popup_price span').text($(this).data('price'));
		$('.popup .popup_img img').attr('src', $(this).data('img'));

		$('.popup input[name="popup_title"]').val($(this).data('title'));
		$('.popup input[name="popup_price"]').val($(this).data('price'));

		$('.popup').fadeIn();
		$('.bg_popup').fadeIn();

		$('.bg_popup, .popup_close').click(function(){
			$('.popup').fadeOut();
			$('.bg_popup').fadeOut();
		});
		return false;
	});

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('.popup').fadeOut();
			$('.bg_popup').fadeOut();
			$("#form").trigger("reset");
		});
		return false;
	});
	
});