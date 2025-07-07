import mongoose from "mongoose";

// ^ will be used in admin to add new products
const blitzonProductSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  product_images: [
    String
  ],
  bestseller: {
    type: Boolean,
    default: false,
  }
});

const BlitzonProductModel = mongoose.model("BlitzonProduct", blitzonProductSchema);

export default BlitzonProductModel;