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

  useEffect(() => {
    if (success === "true" && orderId) {
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


  {
    /* 
      ! token will be cleared from local storage after stripe payment
    */
  }
  return token && transactionGoing ? (
    <div className='min-h-screen min-w-[100%] flex justify-center items-center'>
      <div className='h-[100px] w-[100px] border-2 border-y-red-500 border-x-transparent rounded-full animate-[loading_1s_linear_infinite]'>

      </div>
    </div>
  ) : <NotAccessPage />
}

export default VerifyPage