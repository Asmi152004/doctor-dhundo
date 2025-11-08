import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    console.log(`${process.env.MONGODB_URI}`);
    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/Doctor Dhundo`)

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.