import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../context/StoreContextProvider.jsx';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import NotAccessPage from '../util/NotAccessPage.jsx';
import ErrorPage from '../util/ErrorPage.jsx';

const VerifyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const {token, transactionGoing, setTransactionGoing} = useContext(StoreContext);

  const navigate = useNavigate();

  // const verifyPayment = () => {
  //   /* 
  //     ^ below step is important when use has ordered from cart and we have to clear cart items by fetching userId from orderId
  //   */
  //   // const response = await axios.post(backend_url+'/api/order/verify', {success, orderId});

  //   if(!success && transactionGoing){
  //     toast.error("Something went wrong while placing order, pls try again");
  //     return;
  //   }

  //   navigate('/orders', {replace: true});
  //   if(transactionGoing){
  //     toast.success("Order has been placed successfully");
  //     setTransactionGoing(false);
  //   }
  // }

  // useEffect(() => {
  //   verifyPayment();
  // }, []);

  useEffect(() => {
    if (success && orderId) {
      navigate('/orders', { replace: true });
      if (transactionGoing) {
        toast.success("Order has been placed successfully");
        setTransactionGoing(false);
      }
    } else {
      toast.error("Invalid attempt or expired session.");
      navigate('/');
    }
  }, []);


  return token ? (
    <div className='min-h-screen min-w-[100%] flex justify-center items-center'>
      <div className='h-[100px] w-[100px] border-2 border-y-red-500 rounded-full animate-[loading_1s_linear_infinite]'>

      </div>
    </div>
  ) : <NotAccessPage />
}

export default VerifyPage