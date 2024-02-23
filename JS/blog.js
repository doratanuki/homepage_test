function test(){
    console.clear()
    var ScrollTop = $(window).scrollTop();//head下から
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight
    
    //======================section1=========================
    var sec1Top = $("#section1").offset().top;
    var sec1Height = $("#section1").height();
    var sec1Bottom = sec1Top + sec1Height

    var sec1A = ScrollTop - (sec1Top + sec1Height*1/2)//opacity=1となる座標
    var sec1B = sec1Height*1/2//そこから下までの距離

    //sec1 fadeout
    var opa1 = 1 - sec1A/sec1B
    $("#section1").css("opacity", opa1);

    //======================section2=========================
    var sec2Top = $("#section2").offset().top;
    var sec2Height = $("#section2").height();
    var sec2Bottom = sec2Top + sec2Height;

    var sec2A = ScrollTop - (sec2Bottom - sec2Height*1/7)//opacity=1となる座標
    var sec2B = sec2Height*1/7//そこから下までの距離

    //sec2 fadein
    var opa2in = sec1A/sec1B
    $("#section2").css("opacity", opa2in);

    //sec2 fadeout
    var opa2 = 1 - sec2A/sec2B
    $("#section2").css("opacity", opa2);

    //======================section3=========================
    var sec3Top = $("#section3").offset().top;
    var sec3Height = $("#section3").height();
    var sec3Bottom = sec3Top + sec3Height

    var sec3A = ScrollTop - (sec3Top + sec3Height*1/2)//opacity=1となる座標
    var sec3B = sec3Height*1/2//そこから下までの距離

    //sec3 fadeout
    var opa3 = 1 - sec3A/sec3B
    $("#section3").css("opacity", opa3);




    console.log("TOP",ScrollTop)
    console.log("opa1",opa1)
    console.log("分子",sec1A)
    console.log("分母",sec1B)
}



$(window).scroll(function(){
    test();
});