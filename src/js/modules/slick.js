require('slick-carousel');

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
