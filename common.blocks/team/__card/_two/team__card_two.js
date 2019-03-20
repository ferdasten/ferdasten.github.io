modules.define('team__card', function(provide, Team__card) {

provide(Team__card.declMod({ modName: 'two', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
