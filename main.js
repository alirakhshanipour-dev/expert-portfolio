const express = require("express")
const morgan = require("morgan")
const DatabaseConfig = require("./src/config/dbConfig.js")
const notFoundHnadler = require("./src/exception/notFoundHandler.js")
const allExceptionHandler = require("./src/exception/all-exeption.js")
const { mainRouter } = require("./src/modules/app.routes.js")
require("dotenv").config()

const main = () => {
    // app configs section start
    const app = express()
    // app configs secton end




    // middlewares section start
    app.use(morgan("dev"))
    app.use(express.json())
    app.use(express.static("public"))
    app.use(express.urlencoded({ extended: true }))
    app.use(mainRouter)
    // middlewares section end


    // error handlers start
    notFoundHnadler(app)
    allExceptionHandler(app)
    // error handlers end


    // conncet to Databases section start
    new DatabaseConfig().connect_mongodb()
    // conncet to Databases section end


    // server section start
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`server is running on http://127.0.0.1:${PORT}`);
    })
    // server section end
}

main()