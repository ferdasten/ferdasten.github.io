modules.define('header', function(provide, Header) {

provide(Header.declMod({ modName: 'open', modVal: 'true' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
