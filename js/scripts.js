$(document).ready(function(){
    $("#homeGaleria").owlCarousel({
        items:1,
        loop:true,
        navText: ["<img src='css/img/home/drchHover.png'>","<img src='css/img/home/izq.png'>"],
        autoplay:true,
        autoplayTimeout:2500,
        touchDrag: true,
        autoplayHoverPause:false
    });

    $("#galeriaPpal").owlCarousel({
        items:1,
        loop:true,
        nav: true,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:false,
        navText: ["<img src='css/img/galeria/flecha-izq.png'>","<img src='css/img/galeria/flecha-der.png'>"]
    });
    $("#UniGaleria").owlCarousel({
        items:1,
        loop:true,
        nav: true,
        navText: ["",""],
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:false
    });
    $("#pluGaleria").owlCarousel({
        items:1,
        loop:true,
        nav: true,
        navText: ["",""],
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:false
    });
});
