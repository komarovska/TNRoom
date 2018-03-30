webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(8);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const Header = __webpack_require__(7);

class App {
    init() {
        this.headerModule = new Header().init();
    }
}

new App().init();


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[5]);