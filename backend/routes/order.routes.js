import express from 'express'
import { cancelOrder, getAllOrders, placeOrderCOD, placeOrderStripe } from '../controllers/order.controller.js';
import {authUserMiddleware} from '../middlewares/authUser.js'

const orderRouter = express.Router();

orderRouter.post("/place-cod",authUserMiddleware, placeOrderCOD);
orderRouter.post("/place-stripe", authUserMiddleware, placeOrderStripe);
orderRouter.get("/all-orders",authUserMiddleware, getAllOrders);
orderRouter.post("/cancel-order",authUserMiddleware, cancelOrder);

export default orderRouter;