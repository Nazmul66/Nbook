
$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:40,
    center:true,
    dots:true,
    nav:true,
    responsive:{
         0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


// counterup js codes

jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });


// preloader jquery function

$(document).ready(function(){

    $(window).load(function(){
        $(".preloader").fadeOut("slow");
    });

});

//  scrolltop jquery function

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".fa-arrow-up").fadeIn();
        }
        else{
            $(".fa-arrow-up").fadeOut();
        }
    });

    $(".fa-arrow-up").click(function(){
        $('body').animate({scrollTop:0
        
        }, 1000);
    });
});