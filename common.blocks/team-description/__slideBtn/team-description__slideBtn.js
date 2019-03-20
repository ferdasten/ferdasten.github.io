modules.define('team-description__slideBtn', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('team-description', 'slideBtn', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

modules.require(['jquery'], function($) {
    function slide_team_description(){
        var slideNow = 1;
        var slideCount = $('.js-viewport__sliders').children().length;
        var translateWidth = 0;
        var navBtnId = 0;
      
          $('.team-description__slideBtn').click(function(e) {
            e.preventDefault();
            $(".team-description__nav-btns .team-description__slideBtn").removeClass('team-description__slideBtn_active');
            $(this).addClass('team-description__slideBtn_active');
      
            navBtnId = $(this).index();
      
            if (navBtnId + 1 != slideNow) {
                translateWidth = -$('.team-description__js-viewport').width() * (navBtnId);
      
                $('.team-description__sliders').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                
                slideNow = navBtnId + 1;
          }
          });
        };
    $(window).ready(slide_team_description).resize(slide_team_description).scroll(slide_team_description);
});