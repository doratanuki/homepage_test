function fadeScroll(){
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight
    
    //slider
    var opa1 = 1 - ScrollTop / WindowHeight;
    $(".slick-slider").css("opacity", opa1);
}

//Window高さ固定
$(function(){
    var windowHeight = $(window).height();
    $('.blank').css('height',`${windowHeight}px`);
    $('.slider').css('height',`${windowHeight}px`);
    $('.slider img').css('height',`${windowHeight}px`);
    $('.slick-prev, .slick-next ').css('height',`${windowHeight}px`);
});

$(window).scroll(function(){
    fadeScroll();
});
