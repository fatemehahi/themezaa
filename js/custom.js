$(document).foundation();

$(document).ready(function() {
$('[data-carousel="SLIDER"]').owlCarousel({
    loop:true,
	rtl:true,
    nav:true,
	autoplayTimeout :3000,
	animateOut: 'fadeOut',
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



$('[data-carousel="PRODUCT"]').owlCarousel({
    loop:true,
	rtl:true,
    nav:true,
	margin:20,
	animateOut: 'fadeOut',
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});
});