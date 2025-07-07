import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URL}/blitzon`)
  .then(() => console.log("DB connected"))
  .catch(() => console.log("Something went wrong while connecting DB"));
}