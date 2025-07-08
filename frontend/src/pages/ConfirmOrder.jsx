import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContextProvider.jsx';
import NotAccessPage from '../util/NotAccessPage.jsx';
import { backend_url } from '../assets/assets.js';
import OrderAlreadyPlaced from '../util/OrderAlreadyPlaced.jsx'
import { toast } from 'react-toastify';
import axios from 'axios';

const ConfirmOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state || {};
  const { item, address, paymentMethod, delivery_fee } = state;
  const { token, transactionGoing, setTransactionGoing } = useContext(StoreContext);

  const orderHandler = async () => {
    if(paymentMethod === "cod"){
      const response = await axios.post(backend_url+'/api/order/place-cod', {item, address}, {headers: {token}});

      if(!response.data.success){
        toast.error(response.data.message);
        return;
      }

      navigate('/orders', {replace: true});
      toast.success(response.data.message);
      setTransactionGoing(false);
    }
    else{
      const response = await axios.post(backend_url+'/api/order/place-stripe', {item, address}, {headers: {token}});
      
      // console.log("frontend 1");
      if(!response.data.success){
        navigate("/");
        toast.error("Something went wrong while placing order, pls try again");
        return;
      }
      
      // console.log("frontend 2");
      window.location.href = response.data.session_url;
      // console.log("frontend 3");
    }
  }

  return token && transactionGoing && item ? (
    <div className="py-8 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="bg-white shadow-xl rounded-xl p-6 sm:p-10 space-y-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Confirm Your Order
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={item.product_images[0]}
              alt={item.productname}
              className="w-[150px] sm:w-[180px] object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="md:col-span-1 space-y-2">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Product Details</h2>
            <p><span className="font-medium text-gray-600">Name:</span> {item.productname}</p>
            <p><span className="font-medium text-gray-600">Type:</span> {item.category}</p>
            <p><span className="font-medium text-gray-600">Price:</span> ₹{item.price.toLocaleString("en-IN")}</p>
            <p><span className="font-medium text-gray-600">Quantity:</span> {item.quantity + " "}({" "}₹{(item.quantity * delivery_fee) + " delivery "})</p>
            <p><span className="font-medium text-gray-600">Payment:</span> {paymentMethod === "cod" ? "Cash on Delivery" : "Stripe"}</p>
            <p>
              <span className="font-medium text-gray-600">Total Amount:</span> 
              ₹{((item.price * item.quantity) + (item.quantity * delivery_fee)).toLocaleString("en-IN")}
            </p>
          </div>

          {/* User Details */}
          <div className="md:col-span-1 space-y-2">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">User Details</h2>
            <p><span className="font-medium text-gray-600">Name:</span> {address.firstname + " " + address.lastname}</p>
            <p><span className="font-medium text-gray-600">Phone:</span> {address.phone}</p>
            <p><span className="font-medium text-gray-600">Email:</span> {address.email}</p>
            <p>
              <span className="font-medium text-gray-600">Address:</span>{" "}
              {`${address.street}, ${address.city}, ${address.state}, ${address.country}`}
            </p>
            <p>
              <span className='font-medium text-gray-600'>Residence:&nbsp;</span>
              {address.residence}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-[#FF073A] hover:bg-[#e50633] text-white py-2 px-6 
            rounded-xl text-sm sm:text-base shadow-md transition duration-300" onClick={orderHandler}>
            {
              paymentMethod === "cod" ? "Place Order" : "Proceed to Payment"
            }
          </button>
        </div>
      </div>
    </div>
  ) : (token && !transactionGoing && item) ? <OrderAlreadyPlaced /> : <NotAccessPage />
}

export default ConfirmOrder