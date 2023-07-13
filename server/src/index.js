import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from './Routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

mongoose.connect("mongodb+srv://kalashtelkar:RMBZnwMk4VY2GcEo@cluster0.cj0eso1.mongodb.net/Cluster0?retryWrites=true&w=majority");


app.listen(3001, ()=> console.log("Server started!"));

