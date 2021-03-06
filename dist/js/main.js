$(document).on("ready",function(){
    $(".slick").slick({
        autoplay:true,
        fade: true,
        dots: true,
        speed:500,
        cssEase: 'linear',
        arrows: false
    });
    $("#services-slick").slick({
        autoplay:true,
        dots:true,
        speed:500,
        arrows:true
    });
    $("#services .ink").on('click',function(e){
        e.preventDefault()
        var target=$(this).attr('data-target');
        $("#services-slick").slickGoTo(parseInt(target))
    });
    $("#slickMultimedia").slick({
        autoplay:true,
        dots:false,
        speed:500,
        arrows:true
    });
    $("#slickW").slick({
        autoplay:true,
        dots:true,
        speed:500,
        arrows:true
    });    
    $(".sk-movil.sk-menu .icon-menu").on("click",function(){
        $(".sk-drop").slideToggle();
    });
    $(".portafolio .galery .content").hover(
        function(){
            $(this).children('.description').animate({
                'bottom':'0px'
            })
        },function(){
            $(this).children('.description').animate({
                 'bottom':'-50px'
            })
    });
})