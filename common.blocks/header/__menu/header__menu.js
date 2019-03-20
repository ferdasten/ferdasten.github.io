modules.define('header__menu', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('header', 'menu', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

modules.require(['jquery'], function($) {
    $('.header__menu a').click(function(){
        var scroll_elem = $(this).attr('href');
    
        $(".header__menu a").removeClass('header__menu-link_active');
        $(this).addClass('header__menu-link_active');
        
        
    
        if($(scroll_elem).lenght != 0 && $(window).width() > 1020) {
            $('html,body').animate({scrollTop:$(scroll_elem).offset().top - 70}, 1000)
        }else{
            $('html,body').animate({scrollTop:$(scroll_elem).offset().top}, 1000)
        }
        return false;
      });
});
