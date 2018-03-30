const Header = require('./modules/header');

class App {
    init() {
        this.headerModule = new Header().init();
    }
}

new App().init();
