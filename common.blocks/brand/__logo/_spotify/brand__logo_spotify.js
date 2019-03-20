modules.define('brand__logo', function(provide, Brand__logo) {

provide(Brand__logo.declMod({ modName: 'spotify', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
