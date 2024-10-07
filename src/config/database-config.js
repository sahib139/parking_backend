const mongoose = require('mongoose');

const databaseConnection = async ()=>{
    try {
        await mongoose.connect(process.env.mongodb_url);
        console.log("Database connected!");
    } catch (error) {
        console.log("Unable to connect to Database due to error: " + error);
    }
}

module.exports = {
    databaseConnection,
}