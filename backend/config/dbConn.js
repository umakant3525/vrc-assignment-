const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DATABASE_URL);
    } catch (error) {
        console.log("Connection Error :" + error);
        process.exit(1);
    }
}

module.exports = connectDB;
