'use strict';

function searchToObject() {
    var pairs = window.location.search.substring(1).split("&"),
        obj = {},
        pair,
        i;

    for ( i in pairs ) {
        if ( pairs[i] === "" ) continue;

        pair = pairs[i].split("=");
        obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
    }

    return obj;
}

// record
(function () {
    
    // private variables
    var rootNode = document.getElementById('js-record'),
        categories = {
            m1: 500,
            n1: 530,
            m2: 900,
            m3: 1080,
            n2: 1050,
            n3: 1130,
            o12: 420,
            o34: 700,
            l: 170,
        };

    function checkPage() {
        if (rootNode) return true;
        return false;
    }

    function getPrice(category) {
        return categories[category];
    }

    function onChangeCategory(e) {
        var priceNode = rootNode.querySelector('input[name=price]'),
            categorySelected = '';

        categorySelected = this.getAttribute('data-value')
            ? this.getAttribute('data-value')
            : this.value;

        priceNode.value = getPrice(categorySelected);
    }

    function initAutoCategory() {
        var selectNode = rootNode.querySelector('input[name=category]'),
            auto = searchToObject(location.search);

        if (auto.category && categories[auto.category]) {
            selectNode.value = auto.category;

            onChangeCategory.call(selectNode, null);
        }
    }

    function initListenerCategoriesOptions() {
        var categoriesNodeList = rootNode.querySelectorAll('.dropdown .menu .item');

        if (categoriesNodeList) {
            categoriesNodeList.forEach(function (category) {
                if (category) {
                    category.addEventListener('click', onChangeCategory);
                }
            });
        }
    }

    // run
    if (checkPage()) {
        initAutoCategory();
        initListenerCategoriesOptions();
    }

})();

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