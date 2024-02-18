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
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight
    
    //画面1
    var opa1 = 1 - ScrollTop / 450;
    $(".img-and-name").css("opacity", opa1);

    //PROFILE
    var opa2 =  ScrollTop / 100 ;
    $(".profile").css("opacity", opa2);

    //ABOUT
    var Y_about = $(".about").offset().top;
    var opa3 =  (ScrollBottom - Y_about) / 100 ;
    $(".about").css("opacity", opa3);

    //CONTACT
    var Y_contact = $(".contact").offset().top;
    var opa4 = (ScrollBottom - Y_contact) / 100;
    $(".contact").css("opacity", opa4);
}



$(window).scroll(function(){
    fadeAnime();
    fadeScroll();
});