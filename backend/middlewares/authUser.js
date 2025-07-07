// ^ USE : auth middleware will be used in addtoCart & removeFromCart
import jwt from 'jsonwebtoken'
import BlitzUserModel from '../models/user.model.js'

const authUserMiddleware = async (req, res, next) => {
  const token = req.headers.token;

  try {
    if(!token){
      return res.json({
        success: false,
        message: "Not an authorized user, pls login"
      })
    }
  
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
  
    // find user by using _id
    const user = await BlitzUserModel.findById(decodeToken.blitzId);
  
    if(!user){
      return res.json({
        success: false,
        message: "Such user profile does not exist, pls create a new one"
      })
    }

    // if everything goes well then set _id in request
    req.userid = user._id;
    next();
  } catch (error) {
    res.json({
      success: false,
      catcherror: true,
      message: error.message
    })
  }
}

export {
  authUserMiddleware
}