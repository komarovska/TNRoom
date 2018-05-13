const Header = require('./modules/header');
const Slick = require('./modules/slick');
const Scroll = require('./modules/scroll');
const Carousel = require('./modules/carousel');
const Map = require('./modules/map');

class App {
    init() {
        this.headerModule = new Header().init();
        this.slickModule = new Slick().init();
        this.scrollModule = new Scroll().init();
        this.carouselModule = new Carousel().init();
        this.mapModule = new Map().init();
    }
}

new App().init();
