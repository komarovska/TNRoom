const Header = require('./modules/header');
const Slick = require('./modules/slick');

class App {
    init() {
        this.headerModule = new Header().init();
        this.slickModule = new Slick().init();
    }
}

new App().init();
