webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(10);
module.exports = __webpack_require__(11);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const Header = __webpack_require__(8);
const Slick = __webpack_require__(9);

class App {
    init() {
        this.headerModule = new Header().init();
        this.slickModule = new Slick().init();
    }
}

new App().init();


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {class Header {
    constructor(optionsReceived) {
        this.options = Object.assign({}, optionsReceived);
        this.cache = {};
    }
    init() {
        this.initializeCache();
        this.initializeEvents();
        return this;
    }
    initializeCache() {
        this.cache.document = $(document);
        this.cache.body = $('body');
        this.cache.header = $('.thnr__header');
        this.cache.page = $('.thnr__page');
    }
    initializeEvents() {
        this.cache.header.on('click', () => {
            this.toggleMenu();
        })
        this.cache.page.on('click', () => {
            this.cache.header.stop(true, false).removeClass('opened');
        })
    }

    toggleMenu() {
        this.cache.header.stop(true, false).toggleClass('opened');
    }

}

module.exports = Header;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(1);

class Slick {
    constructor(optionsReceived) {
        this.options = Object.assign({}, optionsReceived);
        this.cache = {};
    }
    init() {
        this.initializeCache();
        this.initializeEvents();
        return this;
    }
    initializeCache() {
        this.cache.document = $(document);
        this.cache.body = $('body');
        this.cache.slickNav = $('.thnr__slick-for');
        this.cache.slickItem = $('.slick-gal-wrap');
    }
    initializeEvents() {
        this.cache.slickItem.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            fade: true,
            asNavFor: this.cache.slickNav
        });
        this.cache.slickNav.slick({
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: true,
            asNavFor: this.cache.slickItem,
            dots: true,
            arrows: true,
            centerMode: true,
            focusOnSelect: true
        });

    }
}

module.exports = Slick;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[6]);