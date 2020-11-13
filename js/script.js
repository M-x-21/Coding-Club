$(document).ready(function(){
    // navbar style

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");

        }else{
            $('.scroll-up-btn').removeClass("show");
            
        }
    });
    // scroll up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0 });
    });

    // toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // type style
    var typed = new Typed(".typing", {
        strings: ["Freelancer","Delivery Boy", "PUBG Bot","<>Coding Club</>"],
        typeSpeed: 100,
        backSpeed:40,
        loop:true

    });
    var typed = new Typed(".typing-2", {
        strings: ["Freelancer","Delivery Boy", "PUBG Hacker","<>Coding Club</>"],
        typeSpeed: 100,
        backSpeed:40,
        loop:true

    });
    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false

            },
            600:{
                items: 2,
                nav: false
                
            },
            1000:{
                items: 3,
                nav: false
                
            }
        }
    });
});