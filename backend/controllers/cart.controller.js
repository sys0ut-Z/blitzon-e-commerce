import BlitzonUserModel from "../models/user.model.js";

const addToCart = async (req, res) => {
  const userid = req.userid;
  let itemId = req.body.itemId;

  try {
    const user = await BlitzonUserModel.findById(userid);

    let cartData = user.cartdata;

    if(cartData[itemId]){
      cartData[itemId] += 1;
    }
    else{
      cartData[itemId] = 1;
    }

    await BlitzonUserModel.findByIdAndUpdate(userid, {cartdata: cartData});

    res.json({
      success: true,
      message: "Item successfully added to the cart"
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message,
    })
  }
}

const removeFromCart = async (req, res) => {
  const userid = req.userid;
  const itemId = req.body.itemId;

  try {
    const user = await BlitzonUserModel.findById(userid);

    let cartData = user.cartdata;

    if(cartData[itemId]){
      cartData[itemId] -= 1;
    }

    await BlitzonUserModel.findByIdAndUpdate(userid, {cartdata: cartData});

    res.json({
      success: true,
      message: "Item removed from the cart"
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message,
    })
  }
}

const getAllCartItems = async (req, res) => {
  const userid = req.userid;
  try {
    const user = await BlitzonUserModel.findById(userid);

    let cartData = user.cartdata;

    res.json({
      success: true,
      cartData,
    })
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherror: true,
      message: error.message,
    })
  }
}

export {
  addToCart,
  removeFromCart,
  getAllCartItems
}