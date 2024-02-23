$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  fade:true,//切り替えをフェードで行う。初期値はfalse。
  autoplaySpeed: 1500,//次のスライドに切り替わる待ち時間
  speed:1800,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面にx枚見せる
  slidesToScroll: 1,//1回のスクロールでx枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  touchMove:false
});
