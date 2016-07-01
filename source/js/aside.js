(function(){
	'use strict';
	var wScroll = $(window).scrollTop();

	$('#aside-button').on('click',function(e){
		var $this = $(this),
			wrapper = $this.closest('.blog-wrapper'),
			aside_block = wrapper.find('#aside');
			console.log(aside_block);
		aside_block.animate({'left':'0'},1000);

		aside_block.on('click', function(){ 
			$(this).animate({'left':'-60%'}, 1000);
		});
	});


	

	$('.aside-wrapper__link').on('click', function(e){
		e.preventDefault();
		
		showSection($(this).attr('href'), true);
	})

	showSection(window.location.hash, false);
	
		

	function showSection(section, isAnimate){
		var direction = section.replace(/#/, ''),
			reqSection = $('.blog-content__article').filter('[data-section="'+ direction+'"]'),
			//reqSectionPos = reqSection.offset().top;
			console.log(reqSection);
			//console.log(reqSectionPos);
		if (isAnimate){
			$('body, html').animate({scrollTop: reqSectionPos}, 1000);
		} else {
			$('body, html').scrollTop(reqSectionPos);
		}
	}

	$(window).scroll(function(){
		var wScroll = $(window).scrollTop(),
			menu = $('.static .aside-wrapper__list'),
			sidebar = $('.static .aside-wrapper__static'),
			stickyStart = sidebar.offset().top,
			menuClone = sidebar.clone(),
			fixedSidebar = $('.fixed-wrapper .aside-wrapper');

		if (wScroll >= stickyStart) {
			if (!fixedSidebar.find('.aside-wrapper__static').length){
				fixedSidebar.append(menuClone);
				menu.hide();
			} 
		} else {
				fixedSidebar.find('.aside-wrapper__static').remove();
				menu.show();
			}
	
		
		checkSection();

		function checkSection(){
			$('.blog-content__article').each(function(){
				var $this = $(this),
					container = $('.aside-wrapper__list'),
					links = container.find('.aside-wrapper__link'),
					topEdge = $this.offset().top - 200,
					bottomEdge = topEdge + $this.height();

				if(topEdge < wScroll && bottomEdge > wScroll){
					var currentId = $this.data('section'),
						reqLink = $('.aside-wrapper__link').filter('[href="#'+ currentId + '"]');
					
					links.removeClass('activeLink');
					reqLink.addClass('activeLink');
					reqLink.closest('.aside-wrapper__item').addClass('active')
						.siblings().removeClass('active');

					window.location.hash = currentId;	

				}

			});
		}


	});
})();