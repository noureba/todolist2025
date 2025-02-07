import "dotenv/config";
import mongoose from "mongoose";

//connect to mongodb atlas
const mongodb = mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongodb;
