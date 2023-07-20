import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to mongoDB!")
    } catch (error) {
        console.log(error)
    }
}

app.listen(PORT, () => {
    connect();
    console.log(`Server running on ${PORT}!`);
})