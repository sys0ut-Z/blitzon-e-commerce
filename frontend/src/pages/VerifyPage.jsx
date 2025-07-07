import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
// import { backend_url } from '../assets/assets.js'
import { StoreContext } from '../context/StoreContextProvider.jsx';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import NotAccessPage from '../NotAccessPage.jsx';

const VerifyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const {transactionGoing, setTransactionGoing} = useContext(StoreContext);

  const navigate = useNavigate();

  const verifyPayment = async () => {
    /* 
      ^ below step is important when use has ordered from cart and we have to clear cart items by fetching userId from orderId
    */
    // const response = await axios.post(backend_url+'/api/order/verify', {success, orderId});

    if(!success && transactionGoing){
      toast.error("Something went wrong while placing order, pls try again");
      return;
    }

    if(transactionGoing){
      navigate('/orders', {replace: true});
      toast.success("Order has been placed successfully");
      setTransactionGoing(false);
    }
  }

  useEffect(() => {
    verifyPayment();
  }, []);

  return transactionGoing ? (
    <div className='min-h-screen min-w-[100%] flex justify-center items-center'>
      <div className='h-[100px] w-[100px] border-2 border-y-red-500 rounded-full animate-[loading_1s_linear_infinite]'>

      </div>
    </div>
  ) : <NotAccessPage />
}

export default VerifyPage