modules.define('team__card', function(provide, Team__card) {

provide(Team__card.declMod({ modName: 'one', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
