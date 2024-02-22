function fadeScroll(){
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight
    
    //slider
    var opa1 = 1 - ScrollTop / WindowHeight;
    $(".slick-slider").css("opacity", opa1);
    console.log(opa1)
}

$(window).scroll(function(){
    fadeScroll();
});
