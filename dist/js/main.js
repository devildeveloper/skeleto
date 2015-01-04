$(document).on("ready",function(){
    $(".slick").slick({
        autoplay:true,
        fade: true,
        dots: true,
        speed:500,
        cssEase: 'linear',
        arrows: false
    })
    $(".sk-movil.sk-menu .icon-menu").on("click",function(){
        $(".sk-drop").slideToggle();
    });
})