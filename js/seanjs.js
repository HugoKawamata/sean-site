/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    $('#professional').each(function () {
        if ($(window).width() > 639) {
            $(this).css({
                'opacity': '0',
                'margin-left': '25%',
                'margin-right': '15%'
            });
        }
    });
    $('#creative').each(function () {
        if ($(window).width() > 639) {
            $(this).css({
                'opacity': '0',
                'margin-left': '15%',
                'margin-right': '25%'
            });
        }
    });
    $(window).scroll(function () {
        
        /* Check the location of each desired element */
        $('.slider').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight(),
                bottom_of_window = $(window).scrollTop() + $(window).height();
                

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > (bottom_of_object + $(this).position().top) / 2 && $(window).width() >= 640) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20%',
                    'margin-right': '20%'
                }, 500);
            }
            
            if (bottom_of_window > (bottom_of_object + $(this).position().top) / 2 && $(window).width() < 640) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });
});