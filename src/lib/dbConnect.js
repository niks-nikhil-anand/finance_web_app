import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const DB_OPTIONS = {
            user: process.env.MONGODB_USERNAME,
            pass: process.env.MONGODB_PASSWORD,
            authSource: process.env.AUTH_SOURCE,
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(process.env.MONGODB_URI, DB_OPTIONS);
        console.log("Database connected successfully...");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

export default connectDB;
