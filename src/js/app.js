const Header = require('./modules/header');
const Slick = require('./modules/slick');
const Scroll = require('./modules/scroll');
const Carousel = require('./modules/carousel');

class App {
    init() {
        this.headerModule = new Header().init();
        this.slickModule = new Slick().init();
        this.scrollModule = new Scroll().init();
        this.carouselModule = new Carousel().init();
    }
}

new App().init();
