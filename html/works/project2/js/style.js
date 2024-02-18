//開閉
$(function(){
    $(document).on('click', '.close-text-input', function(){
        $(".input-frame").slideUp(600);
        $(this).addClass("open-text-input").removeClass("close-text-input");
        $(this).text("入力フォームを開く");
    });

    $(document).on('click', '.open-text-input', function(){
        $(".input-frame").slideDown(600);
        $(this).addClass("close-text-input").removeClass("open-text-input");
        $(this).text("入力フォームを閉じる");
    });
});


//単語入力を反映させる
$(function(){
    for(let i = 1; i <= 5; i++){
      $(`#English-spelling-input${i}`).on('change', function(){
        $(`#English-spelling${i}`).text($(this).val());
      });
      $(`#Japanese-spelling-input${i}`).on('change', function(){
        $(`#Japanese-spelling${i}`).text($(this).val());
      });
    }
});

//単語帳めくったりする
$(function(){
    $('.list-frame > .English-spelling').click(function(){
        $(this).addClass("hide")
        $(this).siblings(".Japanese-spelling").removeClass("hide")
    });
    $('.list-frame > .Japanese-spelling').click(function(){
        $(this).addClass("hide")
        $(this).siblings(".English-spelling").removeClass("hide")
    });
});