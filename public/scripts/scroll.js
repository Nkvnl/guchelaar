$(document).ready(function() {
    var scrollTop = 0;
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 200) {
            $('.navbar').addClass('scrolled-nav');
            $('.navbar-brand').addClass('scroll-navbar');
            $('.nav-link').addClass('black');
            $('.navbar-toggler').removeClass('hide');
        }
        else if (scrollTop < 100) {
            $('.navbar').removeClass('scrolled-nav');
            $('.navbar-brand').removeClass('scroll-navbar');
            $('.nav-link').removeClass('black');
            $('.navbar-toggler').addClass('hide');
        }

    });

});
