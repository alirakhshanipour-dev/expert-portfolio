const expressEjsLayouts = require("express-ejs-layouts")

class ViewEngineConfig {

    // config EJS view engine
    ejs_config(app) {
        app.use(expressEjsLayouts)
        app.set("view engine", "ejs")
        app.set("layout", "./main.ejs")
    }

}

module.exports = new ViewEngineConfig()