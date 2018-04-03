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

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsOffSet = $(".skills-section").offset().top;
    var statsOffSet = $(".stats-section").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {

        if(window.pageYOffset > skillsOffSet - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor:'#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth : 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }

        if(!countUpFinished && window.pageYOffset > statsOffSet - $(window).height() + 200) {
            $('.counter').each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            });

            countUpFinished = true;

        }
    });



});

