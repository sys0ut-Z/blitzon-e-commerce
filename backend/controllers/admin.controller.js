import BlitzonProductModel from '../models/product.model.js'
import BlitzOrderModel from '../models/order.model.js'

const addItem = async (req, res) => {
  try {
    const {productname, price, stock, description, category, bestseller} = req.body;
    const cloudinaryRes = req.response;
    // ^ [{}, {}, {}, {}]

    let product_images = [];
    cloudinaryRes.map((fileRes) => {
      product_images.push(fileRes.secure_url);
    });

    const product = await BlitzonProductModel.create({
      productname,
      price,
      stock,
      description,
      category,
      bestseller,
      product_images,
    })

    res.json({
      success: true,
      message: "Product added successfully to the store",
      product,
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

const removeItem = async (req, res) => {
  const {itemId} = req.body;
  try {
    await BlitzonProductModel.findByIdAndDelete(itemId);
  
    res.json({
      success: true,
      message: "Product removed successfully from the store"
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

const listItems = async (req, res) => {
  try {
    const productList = await BlitzonProductModel.find();

    if(productList.length === 0){
      return res.json({
        success: false,
        message: "Store is empty, pls add some products to view the list"
      });
    }

    res.json({
      success: true,
      productList
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

const allOrders = async (req, res) => {
  try {
    const adminorders = await BlitzOrderModel.find().sort({createdAt: -1});

    res.json({
      success: true,
      adminorders
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

const updateOrderStatus = async (req, res) => {
  try {
    const {status, orderId} = req.body;

    await BlitzOrderModel.findByIdAndUpdate(orderId, {status});

    res.json({
      success: true,
      message: "Order status updated"
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
  addItem,
  removeItem,
  listItems,
  allOrders,
  updateOrderStatus,
}