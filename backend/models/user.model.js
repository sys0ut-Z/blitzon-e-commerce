import mongoose from "mongoose";

const blitzonUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // * cart will store the id's of products with their quantity
  cartdata : {
    type: Object,
    default: {}
  },
  // TODO : later implement profile_image functionality
  // profileimg: {
  //   type: String,
  // },
}, {minimize: false, timestamps: true});

const BlitzonUserModel = mongoose.model("BlitzonUser", blitzonUserSchema);

export default BlitzonUserModel;