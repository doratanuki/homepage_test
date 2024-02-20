function test(){
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight

    //座標取得
    var sec1top = $("#section1").offset().top;
    var sec2top = $("#section2").offset().top;
    var sec3top = $("#section3").offset().top;

    //要素の大きさ取得
    var sec1height = $("#section1").outerHeight();
    var sec2height = $("#section2").outerHeight();
    var sec3height = $("#section3").outerHeight();

    //section1切るY座標
    var v1 = ScrollBottom - (sec1top + sec1height);
    $(".sec1bg img").css("clip-path", `inset(0px 0px ${v1}px 0px)`);
    //section2
    var v2 = ScrollBottom - (sec2top + sec2height);
    $(".sec2bg img").css("clip-path", `inset(${WindowHeight - v1}px 0px ${v2}px 0px)`);
    //section3
    $(".sec3bg img").css("clip-path", `inset(${WindowHeight - v2}px 0px 0px 0px)`);
}



$(window).scroll(function(){
    test();
});