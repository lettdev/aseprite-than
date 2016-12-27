(function($) {
    "use strict";

    // jQuery for page scrolling feature
    $('.docs-sidenav a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 15)
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Offset for Sidebar
    $('#sidebar').affix({
        offset: {
            top: 50
        }
    })

})(jQuery);