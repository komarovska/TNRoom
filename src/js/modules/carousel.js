class Carousel {
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
        this.cache.photoItem = $('.thnr__about__item');
        this.cache.textItem = $('.thnr__about__description');
    }
    initializeEvents() {
        this.cache.photoItem.on('click', (e) => {
            this.showMe(e);
        });
    }

    showMe(e) {
        this.cache.photoItem.removeClass('active');
        $(e.target).closest('.thnr__about__item').addClass('active');
    }
}

module.exports = Carousel;