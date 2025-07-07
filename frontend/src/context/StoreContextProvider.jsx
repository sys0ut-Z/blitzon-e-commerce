import React, { createContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets.js';
import {toast} from 'react-toastify'
import axios from 'axios'
import {backend_url} from '../assets/assets.js'

export const StoreContext = createContext();
const StoreContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  )
  const [username, setUsername] = useState("");
  const [transactionGoing, setTransactionGoing] = useState(false);

  const addToCart = async (itemId, quantity) => {
    // ~ PREREQUISITE : all the products must be added in database to fetch correct _id
    if(token){
      if(!cartItems[itemId]){
        setCartItems(prev => ({...prev, [itemId]:quantity}));
      }
      else{
        setCartItems(prev => ({...prev, [itemId]:prev[itemId]+quantity}));
      }

      const response = await axios.post(backend_url+'/api/cart/add-to-cart', {itemId}, {headers: {token}});

      if(!response.data.success){
        toast.error(response.data.message);
        return;
      }

      toast.success(response.data.message);
    }
    else{
      toast.error("You need to signup or login to add the product in cart");
    }
  }

  const removeFromCart = async (itemId) => {
    // ~ PREREQUISITE : all the products must be added in database to fetch correct _id
    if(token){
      
      setCartItems(prev => ({...prev, [itemId]:prev[itemId]-1}));
      const response = await axios.post(backend_url+'/api/cart/remove-from-cart', {itemId}, {headers: {token}});
      
      if(!response.data.success){
        toast.error(response.data.message);
        return;
      }

      toast.success(response.data.message);
    }
    else{
      toast.error("You need to signup or login to remove the product from cart");
    }
  }

  const getTotalCartAmount = () => {
    let totalCartAmount = 0;

    for(const itemId in cartItems){
      if(cartItems[itemId] > 0){
        totalCartAmount += cartItems[itemId];
      }
    }

    return totalCartAmount;
  }

  const loadCartData = async () => {
    const response = await axios.get(backend_url+'/api/cart/cart-items', {headers: {token}});

    if(!response.data.success){
      toast.error("Something went wrong while fetching cart items");
      return;
    }

    // set cart data in cart items
    setCartItems(response.data.cartData);
  }

  const getUserName = async () => {
    const response = await axios.get(backend_url+'/api/user/getusername', {headers:{token}});

    if(!response.data.success){
      toast.error("Unable to save username, something went wrong");
      return;
    }

    setUsername(response.data.username);
  }

  useEffect(() => {
    if(token){
      loadCartData();
      getUserName();
    }
    else{
      setUsername("User");
    }
  }, [token]);

  const value = {
    cartItems, setCartItems,
    addToCart, removeFromCart, getTotalCartAmount,
    token, setToken, username,
    transactionGoing, setTransactionGoing
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider