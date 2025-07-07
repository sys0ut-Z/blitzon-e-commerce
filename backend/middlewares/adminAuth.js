import jwt from 'jsonwebtoken'

export const adminAuthMiddleware = async (req, res, next) => {
  try {
    const admintoken = req.headers.admintoken;
  
    if(!admintoken){
      return res.json({
        success: false,
        message: "Not an authorized admin, pls login"
      });
    }
  
    // * admin token will be made from it's email
    const decodeAdminToken = jwt.verify(admintoken, process.env.JWT_SECRET);
    
    const emailPass = process.env.ADMIN_EMAIL + process.env.ADMIN_PASS;
    if(decodeAdminToken.tokenprops !== emailPass){
      return res.json({
        success: false,
        message: "Invalid credentials, login again"
      })
    }
  
    next();
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message
    })
  }
}