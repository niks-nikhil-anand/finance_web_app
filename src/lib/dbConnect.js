import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) return;
    
        await mongoose.connect(process.env.MONGODB_URI);
    
        console.log("Connected to MongoDB");
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
      }
    
};

export default connectDB;
