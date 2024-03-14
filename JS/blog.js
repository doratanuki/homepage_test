function test(){
    var ScrollTop = $(window).scrollTop();//head下から
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight
    
    //======================section1=========================
    var sec1Top = $("#section1").offset().top;
    var sec1Height = $("#section1").height();
    var sec1Bottom = sec1Top + sec1Height

    //var sec1 = ScrollTop - (sec1Top + sec1Height*1/2)
    var sec1A = ScrollTop - (sec1Bottom - 250)//opacity=1となる座標
    var sec1B = 250//そこから下までの距離

    //sec1 fadeout
    var opa1 = 1 - sec1A/sec1B
    $("#section1").css("opacity", opa1);

    //======================section2=========================
    var sec2Top = $("#section2").offset().top;
    var sec2Height = $("#section2").height();
    var sec2Bottom = sec2Top + sec2Height;

    if (ScrollTop > sec2Top + sec2Height*1/2 ) {
        //sec2 fadeout
        var sec2Aout = ScrollTop - (sec2Bottom - 250)//opacityが1以下となる座標
        var sec2Bout = 250//そこから下までの距離
        var opa2out = 1 - sec2Aout/sec2Bout
        $("#section2").css("opacity", opa2out);

    } else{

        //sec2 fadein
        var sec2Ain = ScrollBottom - sec2Top //opacityが1以下となる座標
        var sec2Bin = WindowHeight*1/2//そこから下までの距離
        var opa2in = sec2Ain/sec2Bin;
        $("#section2").css("opacity", opa2in);

    }

    //======================section3=========================
    var sec3Top = $("#section3").offset().top;
    var sec3Height = $("#section3").height();
    var sec3Bottom = sec3Top + sec3Height


    
    if (ScrollTop > sec3Top + sec3Height*1/2 ) {
        //sec3 fadeout
        var sec3Aout = ScrollTop - (sec3Top + sec3Height*1/2)//opacity=1となる座標
        var sec3Bout = sec3Height*1/2//そこから下までの距離
        var opa3out = 1 - sec3Aout/sec3Bout
        $("#section3").css("opacity", opa3out);

    } else{

        //sec3 fadein
        var sec3Ain = ScrollBottom - sec3Top //opacityが1以下となる座標
        var sec3Bin = WindowHeight*1/2//そこから下までの距離
        var opa3in = sec3Ain/sec3Bin;
        $("#section3").css("opacity", opa3in);

    }



}

//Window高さ固定
$(function(){
    var windowHeight = $(window).height();
    $('.sec1bg img').css('height',`${windowHeight + 50}px`);
    $('.sec2bg img').css('height',`${windowHeight + 50}px`);
    $('.sec3bg img').css('height',`${windowHeight + 50}px`);
});

$(window).scroll(function(){
    test();
});