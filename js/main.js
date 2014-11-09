$(function(){

	// Initializing Lazyload 
	// http://www.appelsiini.net/projects/lazyload
	$(".latest-posts img").lazyload({
		effect : "fadeIn"
	});

	// Mobile Menu Scripts
	$('.mobilenav-trigger').click(function(){
		$('#mobilenav').slideToggle('200');
		
		if($('.mobilenav-trigger').hasClass('active')){
			$('.mobilenav-trigger').removeClass('active');
		}else {
			$('.mobilenav-trigger').addClass('active');
		}
		return false;
	});

	// Owl Carousel config
	$("#homepageSlider").owlCarousel({
		items:1,
		margin: 10,
		lazyLoad : true,
		loop: true,
		autoplay: true
	});

    $('.testimonials-large').owlCarousel({
    	items:1,
    	margin: 10,
    	lazyLoad: true,
		autoHeight: true,
		loop: true,
		autoplay: true
    });

    $('.testimonials-small').owlCarousel({
    	items:1,
    	margin: 10,
    	lazyLoad: true,
		autoHeight: true,
		loop: true,
		autoplay: true
    });
})