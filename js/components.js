jQuery(function($){
    var sf, body;
    var breakpoint = 1180;

    $(document).ready(function($) {

        var wrapper = $('.layout-sidebar__wrapper');

        $(window).resize(function() {
            if(body.width() < breakpoint) {
            }
        });

        $('.hamburger-menu__icon').click(function() {
            if(wrapper.hasClass('hamburger-menu--in')) {
                wrapper.toggleClass('hamburger-menu--out');
            }
            wrapper.not('.hamburger-menu--in').toggleClass('hamburger-menu--in');

        });

        $('.layout-sidebar__side ul li').click(function(event) {
            event.preventDefault();
            $(this).find('ul').toggleClass('hamburger-menu__list--active');
        });
    })
});
