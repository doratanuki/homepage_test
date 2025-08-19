/*ハンバーガーメニュー*/
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".header-menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".header-menu-item a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header-menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});