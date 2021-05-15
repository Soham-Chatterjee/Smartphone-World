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

    //Isotope filter
    var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows"
    });

    //Filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });

});