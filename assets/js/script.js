$(function(){
  //読み込みが完了したら実行する
  $(window).on('load',function(){
    //ローディングアニメーションをフェードアウト
    $('.loader').delay(600).fadeOut(600);
    //背景色をフェードアウト
    $('.loader-bg').delay(900).fadeOut(800);
});

  //ページの読み込みが完了してなくても5秒後にアニメーションを非表示にする
  setTimeout(function(){
    $('.loader-bg').fadeOut(600);
  },5000);
});

// マウスストーカー
$(function(){
  const mouse = $("#js-mouse");
  $(document).on("mousemove",function(e){
      const x=e.clientX;
      const y=e.clientY;
      mouse.css({
          "opacity": "1",
          "transform": "translate(" + x + "px," + y + "px)",
      });
  });
});


// ドロワーメニュー
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});
// ドロワーの中のコンテンツをクリックしたら閉じる
jQuery('.drawer-link').on('click', function() {
  jQuery('.drawer-icon').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-background').removeClass('is-active');

  return false;
});

// backgroundをクリックしたら閉じる
jQuery('.drawer-background').on('click', function() {
  jQuery('.drawer-icon').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-background').removeClass('is-active');

  return false;
});

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight();
  let speed = 500;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

// ボタンの表示//
jQuery(window).on('scroll',function(){
  if ( 100 < jQuery(this).scrollTop()){
    jQuery('.to-top').addClass('is-show');
  }else {
    jQuery('.to-top').removeClass('is-show');
  }
});

// アコーディオン //
jQuery('.question').on('click', function() {
  jQuery(this).next().slideToggle();
});

// アニメーション //
new WOW().init();

// スライダー制作実績 //
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  loopAdditionalSlide: 1,
  autoplay: { // 自動再生
    delay: 3000, // 3秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 56,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },

    700: {
      slidesPerView: "auto",
    },
  }
});

// お問い合わせ //
let $form = $('#js-form')
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $('#js-success').slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $('#js-error').slideDown()
      }
    } 
  });
  return false; 
}); 

let $submit = $('#js-submit')
$('#js-form input, #js-form textarea').on('change', function() {
  if(
    $('#js-form input[type="text"]').val() !=="" &&
    $('#js-form input[type="email"]').val() !=="" &&
    $('#js-form textarea').val() !=="" &&
    $('#js-form input[name="entry.1776804973"]').prop('checked') === true
  ) { //全て入力された時
    $submit.prop('disabled', false)
    $submit.addClass('active')
  } else { //されていない時
    $submit.prop('disabled', true)
    $submit.removeClass('active')
  }
});