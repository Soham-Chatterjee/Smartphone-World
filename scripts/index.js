$(document).ready(function(){

    //Banner Owl Carousel
    $('#banner-area .carousel').owlCarousel({
        dots: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true
    });

    //Product Owl Carousel
    $('#section-a .carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:3
            },
            1000: {
                items: 5
            }
        }
    });

});