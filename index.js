import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
const app = express();
const port = process.env.PORT;
import connectDB from './config/dbConnect.js';
const DATABASE_URL = process.env.MONGODB_URL;
import userRoutes from './routes/userRoutes.js'

app.use(cors());

connectDB(DATABASE_URL);

app.use(express.json());

//load routes
app.use("/api/user", userRoutes);

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})