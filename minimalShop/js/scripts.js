$(function (){

	$('.mnu_toggle').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.main_mnu nav').slideUp();
		}else{
			$(this).addClass('active');
			$('.main_mnu nav').slideDown();
		}
	});

	$('.main_mnu nav >ul >li').each(function(){
		if ($(this).find('ul').length > 0) {
			$(this).addClass('dropdown_mnu');
		}
	});

	$('.dropdown_mnu >a').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').siblings('ul').slideUp();
			return false;
		}else{
			$(this).addClass('active').siblings('ul').slideDown();
			return false;
		}
	});
	
	$('.selects select').jselector();

	$('.main_slider').each(function(){
		var $li = $('li', this);
		var $pagers = $('.pagers', this);

		$li.each(function(){
			$pagers.append('<span />');
		});

		var $pag = $pagers.find('span');

		$pag.click(function(){
			$li.eq($(this).index()).fadeIn().siblings().hide();
			$(this).addClass('active').siblings().removeClass('active');

			var $this = $(this);

			setTimeout(function(){
				$li.eq($this.index()).find('.main_slider_text').addClass('active');
				$li.eq($this.index()).siblings().find('.main_slider_text').removeClass('active');
			}, 200);
			
		}).first().click();

		setInterval(function(){

			var index = $pag.filter('.active').index();

			if(index == $pag.length-1){
				index = -1;
			}

			$pag.eq(index+1).click();

		}, 5000);
	});

	$('.tabs').each(function(){

		var $tabBtn = $('.goods_tabs_items span', this);
		var $prev = $('.goods_tabs_arr .prev', this);
		var $next = $('.goods_tabs_arr .next', this);
		var $tabBlock = $('.goods_cards .tab_block', this);

		$tabBtn.click(function(){

			var $this = $(this);
			$tabBlock.eq($(this).index()).fadeIn().siblings().hide();
			$(this).addClass('active').siblings().removeClass('active');

			setTimeout(function(){
				$tabBlock.eq($this.index()).addClass('active').siblings().removeClass('active')
			}), 100;

		}).first().click();

		$prev.click(function(){
			var index = $tabBtn.filter('.active').index();
			if (index == 0) {
				index = $tabBtn.length
			}
			$tabBtn.eq(index-1).click();
		});		

		$next.click(function(){
			var index = $tabBtn.filter('.active').index();
			if (index == $tabBtn.length-1) {
				index = -1
			}
			$tabBtn.eq(index+1).click();
		});
	});

	$('.recent_blogs').each(function(){

		var $prev = $('.goods_tabs_arr .prev', this);
		var $next = $('.goods_tabs_arr .next', this);
		var $tabBlock = $('.blog_lists .blog_block', this);

		$tabBlock.first().fadeIn().addClass('active');

		$prev.click(function(){
			var index = $tabBlock.filter('.active').index();
			if (index == 0) {
				index = $tabBlock.length
			}

			$tabBlock.eq(index-1).fadeIn().siblings().hide();
			setTimeout(function(){
				$tabBlock.eq(index-1).addClass('active').siblings().removeClass('active');
			}), 100;
		});		

		$next.click(function(){
			var index = $tabBlock.filter('.active').index();
			if (index == $tabBlock.length-1) {
				index = -1
			}
			$tabBlock.eq(index+1).fadeIn().siblings().hide();
			setTimeout(function(){
				$tabBlock.eq(index+1).addClass('active').siblings().removeClass('active');
			}), 100;
		});
	});

	$('.aside_togle').click(function(){
		if ($('.aside_togle').hasClass('active')) {
			$('.aside_togle').removeClass('active');
			$('.category_list_block aside').removeClass('active');
		}else{
			$('.aside_togle').addClass('active');
			$('.category_list_block aside').addClass('active');
		}
	});

	$(window).scroll(function(){
		if ($('.category_list_block').length > 0) {
			if($(window).scrollTop() >$('.category_list_block').offset().top-150){
				$('.aside_togle').addClass('show');
			}else{
				$('.aside_togle').removeClass('show');
			}
		}
	});

	$('.product_slider').each(function(){
		var $mainImg = $('.main_img a', this);
		var $prevImg = $('.prev_img a', this);
		var $prev = $('.product_slider_arr .prev', this);
		var $next = $('.product_slider_arr .next', this);

		$prevImg.click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
			return false;
		}).first().click();

		$prev.click(function(){
			var index = $prevImg.filter('.active').index();
			if (index == 0) {
				index = $prevImg.length
			}
			$prevImg.eq(index-1).click();
		})

		$next.click(function(){
			var index = $prevImg.filter('.active').index();
			if (index == $prevImg.length-1) {
				index = -1
			}
			$prevImg.eq(index+1).click();
		})
	})

	$('.fancy').fancybox();

	$('.description').each(function(){
		var $btn = $('.description_tabs span', this);
		var $block = $('.tabs_block', this);

		$btn.click(function(){
			$block.eq($(this).index()).fadeIn().siblings().hide();
			$(this).addClass('active').siblings().removeClass('active');
		}).filter('.active').click();
	});

});