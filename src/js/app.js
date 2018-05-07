const Header = require('./modules/header');
const Slick = require('./modules/slick');
const Test = require('./modules/test');

class App {
    init() {
        this.headerModule = new Header().init();
        this.slickModule = new Slick().init();
        this.testModule = new Test().init();
    }
}

new App().init();
