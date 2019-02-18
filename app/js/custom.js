'use strict';

// main application
var app = (function () {

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

    return {
        searchToObject: searchToObject,
    }

})();

// record component
var app = app || {};
app.components = app.components || {};
app.components.record = app.components.record || (function (app) {

    // private variables
    var rootNode = document.getElementById('js-record'),
        categories = {
            m1: {
                iconClass: 'icon-m1',
                label: 'B (M1)',
                description: 'ТС, используемые для перевозки пассажиров и имеющие, помимо места водителя, не более восьми мест для сидения;',
                price: 500,
            },
            n1: {
                iconClass: 'icon-n1',
                label: 'B (N1)',
                description: 'ТС для перевозки грузов, имеющие технически допустимую максимальную массу не более 3,5 тонны;',
                price: 530,
            },
            m2: {
                iconClass: 'icon-m2',
                label: 'D (M2)',
                description: 'ТС, используемые для перевозки пассажиров, имеющие, помимо места водителя, более 8 мест для сидения, технически допустимая максимальная масса которых не превышает 5 тонн;',
                price: 900,
            },
            m3: {
                iconClass: 'icon-m3',
                label: 'D (M3)',
                description: 'ТС, используемые для перевозки пассажиров, имеющие, помимо места водителя, более 8 мест для сидения, технически допустимая максимальная масса которых превышает 5 тонн;',
                price: 1080,
            },
            n2: {
                iconClass: 'icon-n2',
                label: 'C (N2)',
                description: 'ТС, предназначенные для перевозки грузов, имеющие технически допустимую максимальную массу свыше 3,5 тонны, но не более 12 тонн;',
                price: 1050,
            },
            n3: {
                iconClass: 'icon-n3',
                label: 'C (N3)',
                description: 'ТС, предназначенные для перевозки грузов, имеющие технически допустимую максимальную массу более 12 тонн;',
                price: 1130,
            },
            o12: {
                iconClass: 'icon-o1-2',
                label: 'E (O1, O2)',
                description: 'прицепы, технически допустимая максимальная масса которых не более 3,5 тонны;',
                price: 420,
            },
            o34: {
                iconClass: 'icon-o3-4',
                label: 'E (O3, O4)',
                description: 'прицепы, технически допустимая максимальная масса которых свыше 3,5 тонны;',
                price: 700,
            },
            l: {
                iconClass: 'icon-l',
                label: 'A (L)',
                description: 'мототранспортные средства.',
                price: 170,
            },
        },
        instance;

    function run(callback) {
        if (checkPage()) {
            callback.call(instance, rootNode);
        }
    }

    function checkPage() {
        if (rootNode) return true;
        return false;
    }

    function getCloneCategories(cat) {
        var categoriesNew = {},
            categories = cat || categories,
            category,
            index;

        // copy
        for (index in categories) {
            if (categories.hasOwnProperty(index)) {
                category = categories[index];
                if ((typeof category) === 'object' && category.length === undefined) {
                    categoriesNew[index] = getCategories(category);
                } else {
                    categoriesNew[index] = category;
                }
            }
        }

        return categoriesNew;
    }

    function getPrice(category) {
        return categories[category].price;
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
            auto = app.searchToObject(location.search);

        if (auto.category && categories[auto.category]) {
            selectNode.value = auto.category;

            onChangeCategory.call(selectNode, null);
        }
    }

    function listenerCategoryItem() {
        var categoriesNodeList = rootNode.querySelectorAll('.dropdown .menu .item');

        if (categoriesNodeList) {
            categoriesNodeList.forEach(function (category) {
                if (category) {
                    category.addEventListener('click', onChangeCategory);
                }
            });
        }
    }

    function makeCategoryItem(index, item) {
        var rootNode = document.createElement('div'),
            wrapNode = document.createElement('div'),
            iconNode = document.createElement('i'),
            textNode = document.createTextNode(item.label);

        rootNode.classList.add('item');
        rootNode.setAttribute('data-value', index);

        wrapNode.style.display = 'flex';
        wrapNode.style.alignItems = 'center';

        iconNode.classList.add(item.iconClass);
        iconNode.style.fontSize = '40px';
        iconNode.style.paddingRight = '10px';

        // mount
        wrapNode.append(iconNode);
        wrapNode.append(textNode);
        rootNode.append(wrapNode);

        return rootNode;
    }

    function renderCategoryMenu() {
        var menuNode = rootNode.querySelector('.dropdown .menu'),
            categoryNode,
            category,
            index;

        for (index in categories) {
            if (categories.hasOwnProperty(index)) {
                category = categories[index];

                categoryNode = makeCategoryItem(index, category);
                menuNode.append(categoryNode);
            }
        }

        listenerCategoryItem();
    }

    // public variables
    instance = {
        run: run,
        getCloneCategories: getCloneCategories,
        initAutoCategory: initAutoCategory,
        renderCategoryMenu: renderCategoryMenu,
    };

    return instance;

})(app);



// price component
var app = app || {};
app.components = app.components || {};
app.components.price = app.components.price || (function (app, record) {

    // private variables
    var rootNode = document.getElementById('js-price'),
        instance;

    function run(callback) {
        if (rootNode) {
            callback.call(instance, rootNode);
        }
    }

    function makePriceCard(index, item) {
        
    }

    function renderPriceCardList() {
        return makePriceCard();
    }

    instance = {
        run: run,
        renderPriceCardList: renderPriceCardList,
    };

    return instance;

})(app, app.components.record);




// page price
(function (price) {

    price.run(function (rootNode) {
        this.renderPriceCardList();
    });

})(app.components.price);

// page record
(function (record) {

    record.run(function (rootNode) {
        this.initAutoCategory();
        this.renderCategoryMenu();
    });

})(app.components.record);

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