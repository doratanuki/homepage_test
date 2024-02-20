function test(){
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight

    //座標取得
    var sec2top = $("#section2").offset();
    var sec3top = $("#section3").offset();

    //section1切るY座標
    var v1 = ScrollBottom - sec2top.top
    $(".sec1bg img").css("clip-path", `inset(0px 0px ${v1}px 0px)`);
    //section2
    var v2 = ScrollBottom - sec3top.top
    $(".sec2bg img").css("clip-path", `inset(${WindowHeight - v1}px 0px ${v2}px 0px)`);
    //section3
    $(".sec3bg img").css("clip-path", `inset(${WindowHeight - v2}px 0px 0px 0px)`);
}



$(window).scroll(function(){
    test();
});