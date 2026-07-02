import dotenv from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js';
import cartRouter from './routes/cart.routes.js';
import adminRouter from './routes/admin.routes.js';
import { connectDB } from './config/dbconfig.js';
import orderRouter from './routes/order.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // multipart/form-data
app.use(cors({
  origin: ["http://localhost:5173", "https://blitzon-e-commerce.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/admin", adminRouter);
app.use("/api/order", orderRouter);

app.use("/images", express.static("./profile-imgs"));
// * search images in profile-imgs folder
// ~ use : it is used to show images stored in local directory on browser

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, (req, res) => {
      console.log("server is running on port", PORT);
    });
  } catch (error) {
    console.error(error.message);
  }
}

startServer();