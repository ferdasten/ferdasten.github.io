modules.define('header__menu-link', function(provide, Header__menuLink) {

provide(Header__menuLink.declMod({ modName: 'active', modVal: 'true' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
