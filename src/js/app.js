const Header = require('./modules/header');
const Slick = require('./modules/slick');
const Test = require('./modules/scroll');

class App {
    init() {
        this.headerModule = new Header().init();
        this.slickModule = new Slick().init();
        this.scrollModule = new Scroll().init();
    }
}

new App().init();
