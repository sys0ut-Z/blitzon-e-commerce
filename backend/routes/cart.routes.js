import express from 'express'
import {authUserMiddleware} from '../middlewares/authUser.js'
import { addToCart, getAllCartItems, removeFromCart } from '../controllers/cart.controller.js';

const cartRouter = express.Router();

cartRouter.post("/add-to-cart", authUserMiddleware, addToCart);
cartRouter.post("/remove-from-cart", authUserMiddleware, removeFromCart);
cartRouter.get("/cart-items", authUserMiddleware, getAllCartItems);

export default cartRouter;