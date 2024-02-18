function fadeAnime(){
    for(let i = 1;i <= 3; i++){
        $(`.hobby-list-item:nth-of-type(${i})`).each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 150 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
    }
    $(".career-list-all").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 150 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
}

$(window).scroll(function(){
    fadeAnime();
});
