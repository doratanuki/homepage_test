//ハンバーガーメニューHTML挿入
$(function(){$(".openbtn-frame").html('\
    <div class="openbtn"><span></span><span></span><span></span></div>\
    <div class="open-menu-background"></div>\
    <nav class="open-menu">\
        <ul>\
            <li class="open-menu-item"><a href="index.html">HOME</a></li>\
            <li class="open-menu-item"><a href="blog.html">BLOG</a></li>\
            <li class="open-menu-item"><a href="profile.html">Samples</a></li>\
            <li class="open-menu-item"><a href="news.html">News</a></li>\
            <li class="open-menu-item"><a href="works.html">Works</a></li>\
        </ul>\
    </nav>'
)});

//フッターHTML挿入
$(function(){$("header").html('<h1 class="header-title">@ta_cake_21</h1>')});

//フッターHTML挿入
$(function(){$("footer").html('<div class="footer-text">2024 Created By TAKEKI</div>')});

//ボタン機能
$(function(){
    $(".openbtn").on("click",function(){
        $(this).toggleClass('active');
        $(".open-menu").toggleClass('panelactive');
        $(".open-menu-background").toggleClass('panelactive');
        $(".open-menu-background").fadeToggle();

        if ($(".openbtn").hasClass('active')) {
            $(".open-menu-background").on("click",function(){
                $(".openbtn").removeClass('active');
                $(".open-menu").removeClass('panelactive');
                $(".open-menu-background").removeClass('panelactive');
                $(".open-menu-background").hide();
            });
        }
    });

    $(".open-menu-item").click(function () {
        $(".openbtn").removeClass('active');
        $(".open-menu").removeClass('panelactive');
        $(".open-menu-background").removeClass('panelactive');
        $(".open-menu-background").hide();

    });
});