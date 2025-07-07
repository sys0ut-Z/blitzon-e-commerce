import BlitzonUserModel from '../models/user.model.js'
import { generateToken } from '../utils/tokenUtil.js';
import bcrypt from 'bcrypt'
import { encryptedPass } from '../utils/passwordUtil.js';
import jwt from 'jsonwebtoken'
import BlitzonProductModel from '../models/product.model.js';

const registerUser = async (req, res) => {
  const {username, email, password} = req.body;
  // const imagePath = req.file.path; // ^ multer
  // const filename = req.file.filename; // ^ multer

  try {
    // check for existing user
    const existingUser = await BlitzonUserModel.findOne({email});
  
    if(existingUser){
      return res.json({
        success: false,
        message: "User account already exists with this email, pls login",
      })
    }
  
    // encrypt password
    const hashedPass = encryptedPass(password);

    // TODO : profile image later
    // cloudinary secure_url
    // const secure_url = req.secure_url;

    const user = await BlitzonUserModel.create({
      // profileimg:secure_url, 
      username, 
      email, 
      password:hashedPass
    });

    // generate token
    const token = generateToken(user._id);

    res.json({
      success:true,
      message: "Sign Up successful",
      // secure_url,
      token
    })
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message
    })
  }
}

const LoginUser = async (req, res) => {
  const {email, password} = req.body;
  try {  
    const user = await BlitzonUserModel.findOne({email});
  
    if(!user){
      return res.json({
        success: false,
        message: "User profile does not exists with this email, pls enter a valid email"
      })
    }
  
    // verify password
    const verifyPass = bcrypt.compareSync(password, user.password);
  
    if(!verifyPass){
      return res.json({
        success: false,
        message: "Incorrect password, try again"
      })
    }
  
    // if everything goes well then generate a new token
    const token = generateToken(user._id);
  
    res.json({
      success: true,
      message: "You have been successfully logged in to your account",
      token
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message
    });
  }
}

const adminLogin = async (req, res) => {
  try {
    const {email, password} = req.body;
  
    if(!(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS)){
      return res.json({
        success: false,
        message: "Invalid credentials, not an authorized admin, login again"
      });
    }
  
    // if credentials are correct then create a new admin token
    const tokenprops = email + password;
    const admintoken = jwt.sign(
      {tokenprops},
      process.env.JWT_SECRET
    )
  
    res.json({
      success: true,
      message: "Login successful",
      admintoken
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message
    })
  }
}

const getAllProducts = async (req, res) => {
  try {
    const allproducts = await BlitzonProductModel.find();

    res.json({
      success: true,
      allproducts
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message
    })
  }
}

const getUsername = async (req, res) => {
  const userid = req.userid;

  try {
    const user = await BlitzonUserModel.findById(userid);
    const username = user.username;

    res.json({
      success: true,
      username
    })
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message
    })
  }

}

export {
  registerUser,
  LoginUser,
  adminLogin,
  getAllProducts,
  getUsername
}