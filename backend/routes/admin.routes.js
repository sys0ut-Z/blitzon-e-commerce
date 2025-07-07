import express from 'express'
import { adminAuthMiddleware } from '../middlewares/adminAuth.js';
import { uploadMultipleFiles } from '../middlewares/fileUploadMiddleware.js';
import { addItem, allOrders, listItems, removeItem, updateOrderStatus } from '../controllers/admin.controller.js';

const adminRouter = express.Router();

adminRouter.post("/add-product", adminAuthMiddleware, uploadMultipleFiles, addItem);
adminRouter.post("/remove-product", adminAuthMiddleware, removeItem);
adminRouter.get("/list-products", adminAuthMiddleware, listItems);
adminRouter.get("/orders", adminAuthMiddleware, allOrders);
adminRouter.post('/update-status', adminAuthMiddleware, updateOrderStatus);

export default adminRouter;