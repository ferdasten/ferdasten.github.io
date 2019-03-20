modules.define('brand__logo', function(provide, Brand__logo) {

provide(Brand__logo.declMod({ modName: 'envato', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
