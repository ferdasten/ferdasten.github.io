modules.define('js-viewport', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

modules.require(['jquery'], function($) {
    function slide_js_viewport(){
        var slideNow = 1;
        var slideCount = $('.js-viewport__sliders').children().length;
        var translateWidth = 0;
        var navBtnId = 0;
      
      
        
        $('.js-viewport__slide-btn').click(function(e) {
          e.preventDefault();
          $(".js-viewport__nav-btns .js-viewport__slide-btn").removeClass('js-viewport__slide-btn_active');
          $(this).addClass('js-viewport__slide-btn_active');
      
          navBtnId = $(this).index();
      
          if (navBtnId + 1 != slideNow) {
              translateWidth = -$('.js-viewport').width() * (navBtnId);
      
              $('.js-viewport__sliders').css({
                  'transform': 'translate(' + translateWidth + 'px, 0)',
                  '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                  '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
              });
              
              slideNow = navBtnId + 1;
        }
      
        });
        };
    $(window).ready(slide_js_viewport).resize(slide_js_viewport).scroll(slide_js_viewport);
});