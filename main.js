const express = require("express")
const morgan = require("morgan")
const DatabaseConfig = require("./src/config/dbConfig.js")
const notFoundHnadler = require("./src/exception/notFoundHandler.js")
const allExceptionHandler = require("./src/exception/all-exeption.js")
const { mainRouter } = require("./src/modules/app.routes.js")
const viewEngineConfig = require("./src/config/viewEngineConfig.js")
require("dotenv").config()
const NODE_ENV = process.env.NODE_ENV
const path = require("path")
require("dotenv").config({
    path: path.join(__dirname, `.ENV.${NODE_ENV}`)
})
const main = () => {
    // app configs section start
    const app = express()
    // app configs secton end

    // -----------------------------------------

    // middlewares section start
    app.use(morgan("dev"))
    app.use(express.json())
    app.use(express.static(path.join(__dirname + "/public")))
    app.use(express.urlencoded({ extended: true }))
    app.get("/", (req, res) => {
        res.redirect("/profile")
    })
    app.use(mainRouter)
    viewEngineConfig.ejs_config(app)
    // middlewares section end

    // -----------------------------------------

    // error handlers start
    notFoundHnadler(app)
    allExceptionHandler(app)
    // error handlers end

    // ----------------------------------------- 

    // conncet to Databases section start
    new DatabaseConfig().connect_mongodb()
    // conncet to Databases section end

    // -----------------------------------------

    // server section start
    const PORT = process.env.PORT || 2503
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is running on http://0.0.0.0:${PORT}`);
    });
    // server section end

    // -----------------------------------------

}

main()