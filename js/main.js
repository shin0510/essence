$(function(){
  $("html *").css("overflow","hidden");
  $(window).on("touchmove.noScroll",function(e){
    e.preventDefault()
  });
  setTimeout(function(){
		$('.start h1').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(800);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
  setTimeout(function(){
		$('html *').css("overflow","visible");
    $(window).off(".noscroll")
  },3300)
});

$(function(){


  // ハンバーガーメニュー
  $('.burger-btn').on('click',function(){
    if($(".overlay").css("opacity")=="0"){

      $('.overlay').css("opacity","1");
      $('.overlay').css("pointer-events","auto");
      $('.overlay').css("z-index","10");
      $("html *").css("overflow","hidden");
      $(window).on("touchmove.noScroll",function(e){
        e.preventDefault()
      });
      
    }else{
      $('.overlay').css("opacity","0");
      $('.overlay').css("z-index","-1");
      $('html *').css("overflow","visible");
      $(window).off(".noscroll");
    }
    
  });
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });

  
 





});




