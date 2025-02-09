import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";

const app = express();

//mongodb connect
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));

//middlwares
app.use(
    cors({
        credentials:true,
        origin:"http://localhost:5173"
    })
)
app.use(express.json())

//routes
app.use("/", authRoutes);

//start server
const port = process.env.PORT || 4000;
app.listen(process.env.PORT, () => {
  console.log(`server runing succufuly in port : ${port}`);
});
