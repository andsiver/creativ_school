AOS.init({
    once: true
});

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    center:true,
    smartSpeed: 900,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:1,
        },
        1000:{
            items:2,
        },
        1400:{
            items:3
        }
    }
});