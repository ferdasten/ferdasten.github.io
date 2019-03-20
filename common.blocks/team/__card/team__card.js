modules.define('team__card', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('team', 'card', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

modules.require(['jquery'], function($) {
    $('.team__card').hover(
        function() {
          $(this).children().css({
            'margin': '0px',
            'opacity': '1',
            'transition': '0.5s'
        })
    },
    function() {
        $(this).children().css({
            'margin-bottom': '-86px',
            'opacity': '0',
            'transition': '0.5s'
        })
    });
});