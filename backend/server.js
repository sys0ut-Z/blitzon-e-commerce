import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js';
import cartRouter from './routes/cart.routes.js';
import adminRouter from './routes/admin.routes.js';
import { connectDB } from './config/dbconfig.js';
import { connectCloudinary } from './config/cloudinaryConfig.js';
import orderRouter from './routes/order.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // multipart/form-data

app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/admin", adminRouter);
app.use("/api/order", orderRouter);

app.use("/images", express.static("./profile-imgs"));
// * search images in profile-imgs folder
// ~ use : it is used to show images stored in local directory on browser

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log("server is running on port", PORT);
});

connectDB();
connectCloudinary();