modules.define('brand__logo', function(provide, Brand__logo) {

provide(Brand__logo.declMod({ modName: 'google', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
