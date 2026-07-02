import BlitzOrderModel from '../models/order.model.js'
import BlitzUserModel from '../models/user.model.js'
import Stripe from 'stripe';

const frontend_url = process.env.NODE_ENV === 'production' ? "https://blitzon-e-commerce.vercel.app" : "http://localhost:5173";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// TODO : make separate controllers for multiple items(cod or stripe)
const placeOrderCOD = async (req, res) => {
  const userid = req.userid;

  try {
    const {item, address} = req.body;
    let orderItems = {
      userId: userid,
      payment:"cod",
      paymentdone: true,
      status: "Processing",
      amount: (item.price * item.quantity) + (item.quantity * 10),
      items : [ item ],
      address
    }

    const newOrder = await BlitzOrderModel.create(orderItems);

    res.json({
      success: true,
      message: "Order has been placed successfully",
      newOrder,
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

const placeOrderStripe = async (req, res) => {
  const userid = req.userid;

  // console.log("1");
  try {
    const {item, address} = req.body;
    let orderItems = {
      userId: userid,
      payment:"stripe",
      paymentdone: false,
      status: "Processing",
      amount: (item.price * item.quantity) + 0, // no delivery charge in stripe
      items : [ item ],
      address
    }
    
    const newOrder = await BlitzOrderModel.create(orderItems);
    // console.log("2");
    
    // console.log("4 usermodel");
    // * single item
    // ✅ Correct
    const line_items = [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: item.productname,
          },
          unit_amount: item.price * 100, // ^ converts rupees to paise
        },
        quantity: item.quantity,
      },
      
      /* 
      * UNDERSTANDING : 
      below code is for delivery charge, 
      either you push it order directly write inside the array
      
      ~ if there are multiple items then you must have to push delivery charges object
      ~ if there is only single item then write it directly inside the array(like I did)
      */
      {
        price_data: {
          currency: "inr",  
          product_data: {
            name: "Delivery charges",
          },
          unit_amount: 0, // ! no delivery charge for stripe
        },
        quantity: 1
      }
    ];
    // console.log("3", line_items);

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    });
    
    // console.log("4", session.url);
    res.json({
      success: true,
      message: "Order has been placed successfully",
      session_url: session.url,
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

const getAllOrders = async (req, res) => {
  const userId = req.userid;
  try {
    const allorders = await BlitzOrderModel.find({userId}).sort({createdAt: -1});

    res.json({
      success: true,
      allorders,
    })
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      catcherro: true,
      message: error.message,
    });
  }
}

const cancelOrder = async (req, res) => {

}

export {
  placeOrderCOD,
  placeOrderStripe,
  getAllOrders,
  cancelOrder
}