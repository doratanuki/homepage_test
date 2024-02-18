//HTML挿入
$(function(){$(".loading-frame").html('\
<div id="loading">\
<div id="loading-logo"><img src="images/profile/シャーロックホームズのフリー素材2.png"></div>\
<div id="loading-text">\
    <p>\
        <span>N</span>\
        <span>o</span>\
        <span>w</span>\
        <span></span>\
        <span>L</span>\
        <span>o</span>\
        <span>a</span>\
        <span>d</span>\
        <span>i</span>\
        <span>n</span>\
        <span>g</span>\
        <span>.</span>\
        <span>.</span>\
        <span>.</span>\
    </p>\
</div>\
</div>')});


$(window).on('load',function(){
    $("#loading").delay(50).fadeOut('slow');
    $("#loading-text").delay(42).fadeOut('slow')
    $("#loading-logo img").delay(47).animate({width : '180px'},1000);
    repeat();
});

function loading_animation(){
    for (let i = 0; i < $('p span').length + 1 ; i++) {
        $(`p span:nth-of-type(${i})`).delay(i * 100).animate({top: '-20px'}, 300).animate({top: '0px'}, 300);
    }        
}

function repeat(){
    //最初に1回
    let i = 0;
    loading_animation()
    //2回目からの処理内容
    let next_animation = function(){
        i++;
        console.log(i)
        if(i < 5){
            loading_animation();
        } else{
            clearInterval(time)
        }
    }
    //2回目からの処理実行
    let time = setInterval(next_animation,2000);
}
