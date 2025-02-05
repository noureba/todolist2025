import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());


//connect to mongodb atlas
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err)
})


//Routes
app.get("/",(req, res)=>{
    res.send("hello from express")
})

//start server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
