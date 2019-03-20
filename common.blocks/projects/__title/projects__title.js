modules.define('projects__title', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('projects', 'title', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
