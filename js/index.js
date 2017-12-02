$(window).load(function () {
    $(".se-pre-con").fadeOut(800);
     
        $(function() {
            $("img").lazyload({
                placeholder: "img/grey.gif"
            });
        });

});

$(document).ready(function () {
    
            // Hide Header on on scroll down
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var navbarHeight = $('header').outerHeight();
            $(window).scroll(function(event) {
                didScroll = true;
            });
            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }﻿
            }, 200);

            function hasScrolled() {
                var st = $(this).scrollTop();

                // Make sure they scroll more than delta
                if (Math.abs(lastScrollTop - st) <= delta)
                    return;

                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight) {
                    // Scroll Down
                    $('header').removeClass('nav-down').addClass('nav-up');
                } else {
                    // Scroll Up
                    if (st + $(window).height() < $(document).height()) {
                        $('header').removeClass('nav-up').addClass('nav-down');
                    }
                }

                lastScrollTop = st;
            }
   
    
    $('.animate').scrolla({
        mobile: true,
        once: true
    });

    $('#button-show-window').click(function () {
        var template = $('#modal-template').html();
        $('body').append(template);
        $('.animate').scrolla('bind');
        $('section.modal .modal-close').click(function () {
            $(this).closest('section.modal').remove();
        });

        return false;
    });




});




