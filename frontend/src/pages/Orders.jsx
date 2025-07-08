import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContextProvider.jsx'
import NotAccessPage from '../util/NotAccessPage.jsx';
import { useState, useEffect } from 'react';
import { backend_url } from '../assets/assets.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import parcel_icon from '../assets/other/parcel_icon.png'
import NoOrdersPage from '../util/NoOrdersPage.jsx';
import Loader from '../util/Loader.jsx';

const Orders = () => {
  const { token } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchOrders = async () => {
    const response = await axios.get(backend_url + '/api/order/all-orders', { headers: { token } })

    setLoader(false);
    if (!response.data.success) {
      toast.error(response.data.message);
      return;
    }

    // console.log(response.data.allorders);
    setOrders(response.data.allorders);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (token){
      setLoader(true);
      fetchOrders();
    }
  }, []);

  // TODO : if multiple items in same order then show box logo and make a sperate route '/order-details', to view all items of order
  return token ? (
    <div className='py-9 flex justify-center'>
      {
        !loader && orders.length > 0 ?
        <div className=''>
          <h1 className='text-2xl sm:text-3xl font-semibold tracking-wide sm:tracking-wider text-center pb-6'>Your Orders</h1>
          <div className={`${orders.length > 1 ? "grid grid-cols-1 w-fit [@media(min-width:1503px)]:grid-cols-2 gap-9 sm:gap-7" : "flex justify-center"}`}>
            {
              // ! reverse is to display latest orders at top
              orders.reverse().map(({ _id, address, amount, items, payment, status }) => (
                <div key={_id}
                  className="shadow-xl rounded-xl p-5 sm:p-7 space-y-9 flex flex-col justify-center items-center bg-white shodow-lg">
                  <div className="flex flex-col [@media(min-width:823px)]:flex-row gap-7">
                    {/* Product Image */}
                    <div className="flex justify-center">
                      <img
                        src={items[0].product_images[0]}
                        alt={items[0].productname}
                        className="w-[130px] sm:w-[160px] object-contain rounded-lg shadow-md aspect-square"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="sm:col-span-1 space-y-2 text-sm">
                      <h2 className="text-xl font-semibold text-gray-700 mb-2">Product Details</h2>
                      <p><span className="font-medium text-gray-600">Name:</span> {items[0].productname}</p>
                      <p><span className="font-medium text-gray-600">Type:</span> {items[0].category}</p>
                      <p><span className="font-medium text-gray-600">Price:</span> ₹{items[0].price.toLocaleString("en-IN")}</p>
                      <p><span className="font-medium text-gray-600">Quantity:</span> {items[0].quantity + " "}(₹{(items[0].quantity * (payment === "cod" ? 10 : 0)) + " delivery"})</p>
                      <p><span className="font-medium text-gray-600">Payment:</span> {payment === "cod" ? "Cash on Delivery" : "Stripe"}</p>
                      <p className='font-medium text-red-500'>
                        <span>Status: {status}</span>
                      </p>
                    </div>

                    {/* User Details */}
                    <div className="sm:col-span-1 space-y-2 text-sm">
                      <h2 className="text-xl font-semibold text-gray-700 mb-2">User Details</h2>
                      <p><span className="font-medium text-gray-600">Name:</span> {address.firstname + " " + address.lastname}</p>
                      <p><span className="font-medium text-gray-600">Phone:</span> {address.phone}</p>
                      <p><span className="font-medium text-gray-600">Email:</span> {address.email}</p>
                      <p>
                        <span className="font-medium text-gray-600">Address:</span>{" "}
                        {`${address.street}, ${address.city}, ${address.state}, ${address.country}`}
                      </p>
                      <p>
                        <span className="font-medium text-gray-600">Total Amount:</span>
                        ₹{amount.toLocaleString("en-IN")}
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
                      rounded-xl text-sm shadow-md transition duration-300" onClick={fetchOrders}>
                      Track Order
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div> : loader ? <Loader /> : <NoOrdersPage />
      }
    </div>
  ) : <NotAccessPage />
}

export default Orders