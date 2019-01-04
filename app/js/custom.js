'use strict';

// slick
$('.jheader__background').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 1000,
    fade: true,
});

$('.slick-article').slick({
    dots: false,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                prevArrow: '<i class="angle double left icon" style="position:absolute;top:45%;left: -25px;color:#00B5AA;z-index:1;font-size:40px;cursor:pointer;"></i>',
                nextArrow: '<i class="angle double right icon" style="position:absolute;top:45%;right: -30px;color:#00B5AA;z-index:1;font-size:40px;cursor:pointer;"></i>',
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                prevArrow: '<i class="angle double left icon" style="position:absolute;top:45%;left: -25px;color:#00B5AA;z-index:1;font-size:40px;cursor:pointer;"></i>',
                nextArrow: '<i class="angle double right icon" style="position:absolute;top:45%;right: -29px;color:#00B5AA;z-index:1;font-size:40px;cursor:pointer;"></i>',
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                prevArrow: '<i class="angle double left icon" style="position:absolute;top:45%;left: -10px;color:#00B5AB;z-index:1;font-size:40px;cursor:pointer;"></i>',
                nextArrow: '<i class="angle double right icon" style="position:absolute;top:45%;right: -13px;color:#00B5AB;z-index:1;font-size:40px;cursor:pointer;"></i>',
            }
        }
    ]
});

$('.slick-comment').slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<i class="angle double left icon" style="position:absolute;top:45%;left: -40px;color:#00B5AA;z-index:1;font-size:40px;cursor:pointer;"></i>',
                nextArrow: '<i class="angle double right icon" style="position:absolute;top:45%;right: -45px;color:#00B5AA;z-index:1;font-size:40px;cursor:pointer;"></i>',
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<i class="angle double left icon" style="position:absolute;top:45%;left: -40px;color:#00B5AA;z-index:1;font-size:40px;cursor:pointer;"></i>',
                nextArrow: '<i class="angle double right icon" style="position:absolute;top:45%;right: -44px;color:#00B5AA;z-index:1;font-size:40px;cursor:pointer;"></i>',
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                prevArrow: '<i class="angle double left icon" style="position:absolute;top:45%;left: -25px;color:#00B5AB;z-index:1;font-size:40px;cursor:pointer;"></i>',
                nextArrow: '<i class="angle double right icon" style="position:absolute;top:45%;right: -28px;color:#00B5AB;z-index:1;font-size:40px;cursor:pointer;"></i>',
            }
        }
    ]
});

$('.ui.sidebar').sidebar('attach events', '.item-open-close');
$('.ui.sticky').sticky();
$('.accordion').accordion();
$('.dropdown').dropdown();