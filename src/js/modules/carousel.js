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
        this.cache.photoItem.on('click', () => {
            this.showMe();
        })
    }

    showMe() {
    
        var photo = $('.thnr__about__item');

        photo.on('click', function() {
            photo.removeClass('active');
            $(this).addClass('active');
        })
    }
}

module.exports = Carousel;