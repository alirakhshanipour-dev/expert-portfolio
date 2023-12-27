const mongoose = require('mongoose');
require("dotenv").config()
//Set up default mongoose connection

class DatabaseConfig {
    connect_mongodb() {
        const mongoDB = `mongodb://root:KI4KUOTovRsP0A0esAptsaRv@el-capitan.liara.cloud:31387/express_portfolio?authSource=admin`;
        mongoose.connect(mongoDB);
        //Get the default connection
        const db = mongoose.connection;
        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
}

module.exports = DatabaseConfig