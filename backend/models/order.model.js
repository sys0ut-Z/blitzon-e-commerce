import mongoose from "mongoose";

const blitzOrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [
    Object
  ],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    default: "Processing",
  },
  payment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  paymentdone: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

const BlitzOrderModel = mongoose.model("BlitzOrder", blitzOrderSchema);

export default BlitzOrderModel;