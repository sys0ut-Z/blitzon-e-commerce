import express from 'express'
import { adminLogin, getAllProducts, getUsername, LoginUser, registerUser } from '../controllers/user.controller.js';
// import { uploadFile } from '../middlewares/fileUploadMiddleware.js'
import {authUserMiddleware} from '../middlewares/authUser.js'

const userRouter = express.Router();

// TODO : profile image later
userRouter.post("/register", registerUser);
userRouter.post("/login", LoginUser);
userRouter.get("/all-products", getAllProducts);
userRouter.get("/getusername", authUserMiddleware, getUsername);

// admin
userRouter.post("/admin-login", adminLogin);
export default userRouter