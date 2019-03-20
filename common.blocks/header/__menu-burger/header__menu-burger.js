modules.define('header__menu-burger', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('header', 'menu-burger', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

modules.require(['jquery'], function($) {
    $('.header__menu-burger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('header__menu-burger_open');
        $('.header').removeClass('header_open_disable');
        $('.header').toggleClass('header_open_active');
        $('.header').css('height', '100vh');
    });
});