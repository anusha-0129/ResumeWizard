import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import  database from "./database/db.js";
import {UserRouter}  from './routes/user.js'
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
app.use(cookieParser());
app.use('/auth', UserRouter);
database();

app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})