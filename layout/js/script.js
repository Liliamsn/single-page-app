$('.home-banner-content').owlCarousel({
    center: true,
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive: {
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        }  
    }
});


$('.home-produtos-destaque').owlCarousel({
    items:5,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive: {
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        } 
    }
});

$(".minicart-icon").on("click", function() {
    $(".minicart-conteudo").find(".minicart-wrapper").toggle();
    
});

$("#logo-menu").on("click", function() {
    $("#logo-menu").find(".menu-detalhes").toggle();
});







