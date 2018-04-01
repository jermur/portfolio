$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false,
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer", "Available For Hire"],
        typeSpeed: 80,
        loop: true,
        startDelay: 1500,
        showCursor: false
    });

});