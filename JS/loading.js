//HTML挿入
$(function(){$(".loading-frame").html('\
<div id="loading">\
<div id="loading-logo"><img src="images/profile/doraemon.jpg"></div>\
<div id="loading-text">\
    <p>\
        <span>L</span>\
        <span>O</span>\
        <span>A</span>\
        <span>D</span>\
        <span>I</span>\
        <span>N</span>\
        <span>G</span>\
        <span>.</span>\
        <span>.</span>\
        <span>.</span>\
    </p>\
</div>\
</div>')
});


function loading_animation(){
    console.log("loading_animation is ready")
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
        if(i < 3){
            loading_animation();
        } else{
            clearInterval(time)
        }
    }
    //2回目からの処理実行
    let time = setInterval(next_animation,2000);
}



$(window).on('load',function(){
    repeat()

    setTimeout(function(){
        $("#loading-text").fadeOut('slow')
        $("#loading-logo img").animate({width : '180px'}, 1000);
    },4400)
    setTimeout(function(){
        $("#loading").fadeOut('slow')
    },4600)
});