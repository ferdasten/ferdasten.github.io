modules.define('header', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'open' : {
            'true' : function() {
                console.log('true');
            }
        }
    }
}));


});

modules.require(['jquery'], function($) {
    function resizeAndScroll(){
		var top = $(this).scrollTop();
		var elem = $(".header");
		var logo = $(".header__logo");
		var menu = $(".header__menu");

		var tr_top = (top > 0);
		var tr_width = ($(window).width() > 1024);

    var find_calss = elem.hasClass('header_open_active');

		if(tr_top && tr_width)
		{
	    elem.css('top', 0);
	    elem.css("background-color", "#000");
      elem.css('height', '70px');
      logo.css('margin-top', '6px');
      menu.css('margin-top', '27px');
    }else{
	    elem.css('top', 0);
	    elem.css("background-color", "transparent");
      logo.css('margin-top', '70px');
      menu.css('margin-top', '75px');
		}
	};

    $(window).ready(resizeAndScroll).resize(resizeAndScroll).scroll(resizeAndScroll);
});