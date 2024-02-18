function test(){
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight
    var titleheight = $(".title").outerHeight();
    var sec1height = $("#section1").outerHeight();
    var sec2height = $("#section2").outerHeight();
    var sec3height = $("#section3").outerHeight();

    //section1切るY座標
    var v1 = ScrollBottom - (sec1height + titleheight + 100)
    $(".sec1bg img").css("clip-path", `inset(0px 0px ${v1}px 0px)`);

    var v2 = v1 - sec2height - 75
    $(".sec2bg img").css("clip-path", `inset(${WindowHeight - v1}px 0px ${v2}px 0px)`);

    var v3 = v2 - sec3height -200
    $(".sec3bg img").css("clip-path", `inset(${WindowHeight - v2}px 0px ${v3}px 0px)`);
}



$(window).scroll(function(){
    test();
});