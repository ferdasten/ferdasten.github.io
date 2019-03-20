modules.define('blog__title', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('blog', 'title', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
