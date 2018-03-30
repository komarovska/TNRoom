class Header {
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
