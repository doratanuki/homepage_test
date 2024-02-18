function fadeAnime(){
    $(".profile").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 0 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }
    });


    $(".about, .contact").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset + 20 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }
    });
    
}

function fadeScroll(){
    var Offset = $(".img-and.name").offset().top;
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    var Ratio = 1 - ScrollTop / WindowHeight;
    var X = 0.2
    console.log(Ratio);

    $(".img-and-name").css("opacity", X);
}


function test(){
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    
    //画面1
    var opa1 = 1 - ScrollTop / 450;
    $(".img-and-name").css("opacity", opa1);

    //画面2
    var opa2 = ScrollTop / 200  ;
    $("main").css("opacity", opa2);
}


$(window).scroll(function(){
    fadeAnime();
    test();
});