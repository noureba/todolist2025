import "dotenv/config";
import express from "express";
import cors from "cors";
import mongodb from "./database/db.js";
import authRoute from "./routes/authRoute.js";

const app = express();

//Middlewares
app.use(express.json()); //conver data to json format
app.use(cors());

//Routes
app.use("/api/auth", authRoute);


//connect to mongodb atlas
mongodb;

//error handling middleware globaly
app.use((err, req, res, next)=>{

  //set default status code and status if not provide
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  //send error resopnse
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  })
})

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
