//* ===================================================== DataBase Configuration =====================================================

import mongoose from "mongoose";

const connectDB = async () => {

    try {
        
        const connectMongoDB = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Mongo DB connected successfully: ${connectMongoDB.connection.host}`);

    } catch (error) {
        
        console.error(`Error connecting to Mongo DB: ${error.message}`);

        process.exit(1);

    }

};


export default connectDB;