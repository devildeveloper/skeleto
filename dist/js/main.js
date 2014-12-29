$(document).on("ready",function(){
    $(".slick").slick({
        autoplay:true,
        arrows:false,
        dots:true
    });
    $(".sk-movil.sk-menu .icon-menu").on("click",function(){
        $(".sk-drop").slideToggle();
    });
})