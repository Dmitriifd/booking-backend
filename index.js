import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3005

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB.');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.listen(3002, () => {
  connect();
  console.log(`Listening on port ${PORT}`);
});
