import {uploads, uploadMultiple} from '../config/multerConfig.js'
import BlitzonUserModel from '../models/user.model.js';
import {uploadToCloudinary} from '../utils/CloudinaryUtil.js'

export const uploadFile = async (req, res, next) => {
  await uploads(req, res, async (error) => {
        // before uploading file, you must check if user exists or not
    const {email} = req.body;
    const user = await BlitzonUserModel.findOne({email});

    if(user){
      return res.json({
        success: false,
        message: "User account already exists with this email, pls write different email to create a new account"
      });
    }
    
    if(error){
      return res.json({
        success: false,
        message: "Error, File not uploaded"
      });
    }

    // if no error then upload on cloudinary and return secure_url
    /* 
      !!! NOTE : fill will be removed from local directory as soon as it gets uploaded on cloudinary
    */
    const cloudinaryRes = await uploadToCloudinary(req.file.path);

    req.secure_url = cloudinaryRes.secure_url;
    next();
  });
}

export const uploadMultipleFiles = async (req, res, next) => {
  await uploadMultiple(req, res, async (error) => {
    if(error) {
      return res.json({
        success: false,
        message: error.message
      })
    }
    
    // req.files is an object so convert it into an array 
    const allFiles = Object.values(req.files).flat();
    const cloudinaryRes = await Promise.all(
      allFiles.map(file => uploadToCloudinary(file.path))
    )

    req.response = cloudinaryRes;
    next();
  })
}