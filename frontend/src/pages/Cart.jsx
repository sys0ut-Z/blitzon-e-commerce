import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContextProvider.jsx'
import { backend_url } from '../assets/assets.js';
import { toast } from 'react-toastify';
import axios from 'axios';
import EmptyCart from '../util/EmptyCart.jsx'
import NotAccesPage from '../util/NotAccessPage.jsx'
import Loader from '../util/Loader.jsx'

const Cart = () => {
  const {cartItems, removeFromCart} = useContext(StoreContext);
  const [products, setProducts] = useState([]);
  const {token} = useContext(StoreContext);
  const [cart, setCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [loader, setLoader] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(backend_url+'/api/user/all-products');

      setLoader(false);
      // check if item is present in cart or not
      response.data.allproducts.map(({_id}) => {
        if(cartItems[_id] > 0){
          setCart(true);
        }
      });

      if (response.data.success) {
        setProducts(response.data.allproducts);

        // let totalAmount = 0;

        // products.map(({_id, price}) => {
        //   if(cartItems[_id] > 0){
        //     totalAmount += cartItems[_id] * price;
        //   }
        // });

        // setCartTotal(totalAmount);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  }

  useEffect(() => {
    setLoader(true);
    window.scrollTo(0, 0);
    fetchProducts();
  }, []);

  return token && loader ? <Loader /> : token && cart ? (
    <div className='py-10 text-[10px] leading-[13px] sm:text-sm'>
      {/* Cart Headings */}
      <div className='grid grid-cols-[0.7fr_2fr_0.7fr_1.1fr_0.5fr] text-center pb-3 font-semibold sm:text-base'>
        <p>Product</p>
        <p>Name</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Cart Items */}
      <div>
        {
          products?.map(({_id, product_images, productname, price}) => {
            if(cartItems[_id] && cartItems[_id] > 0){
              return (
                <div key={_id} >
                  <div className='grid grid-cols-[0.7fr_2fr_0.7fr_1.1fr_0.5fr] text-center py-2 items-center'>
                    <img src={product_images[0]} alt="product_image" className='max-w-[45px] sm:max-w-[90px] object-contain mx-auto'/>
                    <p>{productname}</p>
                    <p>{cartItems[_id]}</p>
                    <p>₹{(price * cartItems[_id]).toLocaleString("en-IN")}</p>
                    <p className='cursor-pointer' onClick={() => removeFromCart(_id)}>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })
        }
      </div>
      {/* <div className='pt-10 px-5 w-full flex justify-center items-center'>
        <div className='space-x-1'>
          <span className='text-sm sm:text-lg md:text-xl'>Cart Totals : </span>
          <span className='text-sm sm:text-lg md:text-xl'></span>
        </div>
      </div> */}
    </div>
  ) : !token ? <NotAccesPage /> : <EmptyCart />
}

export default Cart