// import React, { useState, useContext, useEffect } from 'react'
// import { StoreContext } from '../context/StoreContextProvider.jsx'
// import { assets, backend_url } from '../assets/assets.js';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import NotAccessPage from '../util/NotAccessPage.jsx';
// import OrderAlreadyPlaced from '../util/OrderAlreadyPlaced.jsx';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// // TODO : once user enters address, save/show in profile so that he/she would not have to enter the address again
// const PlaceOrder = () => {
//   const {token, transactionGoing} = useContext(StoreContext);
//   const location = useLocation();
//   const state = location.state || {};
//   const {item} = state;
//   const [paymentMethod, setPaymentMethod] = useState("cod");
//   const [phoneError, setPhoneError] = useState(null);
//   const [emailError, setEmailError] = useState(null);

//   // const {register, handleSubmit, formState: {errors}} = useForm({mode: "all"});

//   // let subtotal = item.price * item.quantity;
//   // let delivery_fee = item.quantity * 10;
//   // let amount = subtotal + delivery_fee;

//   const [address, setAddress] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     street:"",
//     city: "",
//     state: "",
//     zipcode: 382330,
//     country: "",
//     phone:"",
//     residence: ""
//   });

//   const [checkDetails, setCheckDetails] = useState({
//     fistname: false,
//     lastname: false,
//     email: false,
//     street: false,
//     city: false,
//     state: false,
//     zipcode: address.zipcode ? true : false,
//     country: false,
//     phone: false,
//     residence: false,
//   })

//   const [allDetailsFilled, setAllDetailsFilled] = useState(false);

//   const changeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setCheckDetails(prev => ({...prev, [name]:true}));
//     setAddress(prev => ({...prev, [name]:value}));
//   }

//   const phoneHandler = (e) => {
//     changeHandler(e);
//     const value = e.target.value;

//     let flag = true;

//     for(let i=0;i<value.length;i++){
//       if(!(value[i] >= '0' && value[i] <= '9')){
//         flag = false;
//         break;
//       }
//     }

//     if(value.length < 7 || value.length > 15 || !flag){
//       setPhoneError("Pls enter a valid Phone No.");
//       setCheckDetails(prev => ({...prev, email: false}))
//     }
//     else{
//       setCheckDetails(prev => ({...prev, email: true}))
//       setPhoneError(null);
//     }
//   }

//   const emailValidator = (e) => {
//     changeHandler(e);
//     const value = e.target.value;

//     const emailRegex = /^[a-zA-Z0-9._%+-]{3,20}\@[a-zA-Z0-9-]{3,10}\.[a-zA-Z]{2,5}$/g
//     if(!emailRegex.test(value)){
//       setEmailError("Pls enter a valid email");
//     }
//     else{
//       setEmailError(null);
//     }
//   }

//   const submitHandler = (e) => {
//     e.preventDefault();
//     for(const field in checkDetails){
//       if(!checkDetails[field]){
//         setAllDetailsFilled(false);
//         toast.error("Pls fill all the details");
//         return;
//       }
//     }

//     setAllDetailsFilled(true);
//   }

//   useEffect(() => {
//     for(const field in checkDetails){
//       if(!checkDetails[field]){
//         setAllDetailsFilled(false);
//         return;
//       }
//     }

//     setAllDetailsFilled(true);
//   }, [address]);

//   return token && transactionGoing && item ? (
//     <form className='py-[60px] sm:py-[70px] min-h-screen min-w-[100%] flex justify-center' method="post" onSubmit={submitHandler}>
//       {/* place-order */}
//       <div className='flex flex-col justify-between items-start gap-[30px]'>

//         {/* User Details & Payment method */}
//         <div className='flex flex-col gap-6 sm:w-[max(30vw,425px)]'>
//           <div className='flex flex-col gap-3 '>
//             {/* title */}
//             <p className='text-xl sm:text-2xl font-semibold'>Delivery Information</p>

//             {/* multi-fields */}
//             <div className='flex gap-3'>
//               <input type="text" placeholder='First Name' name="firstname" className='w-full' value={address.firstname} onChange={changeHandler} required/>
//               <input type="text" placeholder='Last Name' name="lastname" className='w-full' value={address.lastname} onChange={changeHandler} required/>
//             </div>

//             <input type="text" placeholder='Email address' name="email" className='w-full' value={address.email} onChange={emailValidator} required/>
//             <span className='text-red-500'>
//               {
//                 emailError ? emailError : null
//               }
//             </span>
//             <input type="text" placeholder='Street' name="street" className='w-full' value={address.street} onChange={changeHandler} required/>

//             {/* multi-fields */}
//             <div className='flex gap-3'>
//               <input type="text" placeholder='City' name="city" className='w-full' value={address.city} onChange={changeHandler} required/>
//               <input type="text" placeholder='State' name="state" className='w-full' value={address.state} onChange={changeHandler} required/>
//             </div>

//             <input type="text" placeholder='Society/Apartment/Bungalows' name="residence" className='w-full'
//             value={address.residence} onChange={changeHandler} required/>
//             {/* multi-fields */}
//             <div className='flex gap-3'>
//               <input type="number" placeholder='Zip code' name="zipcode" className='w-full' value={address.zipcode} onChange={changeHandler} required/>
//               <input type="text" placeholder='Country' name="country" className='w-full' value={address.country} onChange={changeHandler} required/>
//             </div>

//             <input type="text"  placeholder='Phone : 9567423176' name="phone" className='w-full' value={address.phone} 
//             onChange={phoneHandler} required/>
//             <span className='text-red-500'>
//               {
//                 phoneError ? phoneError : null
//               }
//             </span>
//           </div>

//           {/* Payment Options */}
//           <div className='w-full items-start py-5 sm:py-9'>
//             <h1 className='text-xl sm:text-2xl font-semibold pb-3'>Select Payment method</h1>
//             <div className='flex flex-col sm:flex-row gap-3'>
//               <div className={`flex gap-2 items-center px-3 py-3 border w-full ${paymentMethod === "cod" ? "border-green-400" : "border-gray-200"} cursor-pointer`} onClick={() => setPaymentMethod("cod")}>
//                 <p className={`h-[9px] w-[9px] rounded-full ${paymentMethod === "cod" ? "bg-green-400" : "bg-gray-200"}`}></p>
//                 <p>CASH ON DELIVERY</p>
//               </div>
//               <div className={`flex gap-2 items-center px-3 py-1 border ${paymentMethod === "stripe" ? "border-green-400" : "border-gray-200"} w-full cursor-pointer`} onClick={() => setPaymentMethod("stripe")}>
//                 <p className={`h-[9px] w-[9px] rounded-full ${paymentMethod === "stripe" ? "bg-green-400" : "bg-gray-200"}`}></p>
//                 <img src={assets.stripe_logo} alt="stripe_logo"/>
//               </div>
//             </div>
//           </div>

//           {/* Order Details */}
//           <div className='w-full sm:w-[max(30vw,425px)]'>
//             <h2 className='text-xl md:text-2xl font-bold pb-3 tracking-wide'>Order Totals</h2>
//             <hr />
//             <div>
//               {/* cart-total-details * 3 */}
//               <div className='flex justify-between items-center py-2'>
//                 <p className='text-sm sm:text-base'>Subtotal</p>
//                 <p className='text-base sm:text-lg'>₹{item.price * item.quantity}</p>
//               </div>
//               <hr />
//               <div className='flex justify-between items-center py-2'>
//                 <p className='text-sm sm:text-base'>Delivery Fee</p>
//                 <p className='text-base sm:text-lg'>₹{paymentMethod === "cod" ? (item.quantity * 10) : 0}</p>
//               </div>
//               <hr />
//               <div className='flex justify-between items-center py-2'>
//                 <b className='text-lg sm:text-xl'>Total</b>
//                 <p className='text-base sm:text-lg'>₹{(item.price * item.quantity) + (paymentMethod === "cod" ? (item.quantity * 10) : 0)}</p>
//               </div>
//             </div>
//             <div className='mt-3 flex justify-center'>
//               {
//                 allDetailsFilled ?           
//                 <Link to="/confirm-order" state={{
//                   item,
//                   address,
//                   paymentMethod,
//                   delivery_fee : paymentMethod === "cod" ? 10 : 0,
//                 }}
//                   className='bg-[#FF073A] py-2 px-3 sm:py-3 sm:px-6 text-white text-xs sm:text-sm text-center'>
//                   PROCEED TO CONFIRM ORDER
//                 </Link> :
//                 <div className='text-red-500 text-xs sm:text-sm text-center py-2 px-3 sm:py-3 sm:px-6'>
//                   Pls Fill all Details to Proceed
//                 </div>
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   ) : (token && !transactionGoing && item) ? <OrderAlreadyPlaced /> : <NotAccessPage />
// }

// export default PlaceOrder

import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/StoreContextProvider.jsx';
import { assets } from '../assets/assets.js';
import { Link, useLocation } from 'react-router-dom';
import NotAccessPage from '../util/NotAccessPage.jsx';
import OrderAlreadyPlaced from '../util/OrderAlreadyPlaced.jsx';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { token, transactionGoing } = useContext(StoreContext);
  const location = useLocation();
  const state = location.state || {};
  const { item } = state;

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [phoneError, setPhoneError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: 382330,
    country: "",
    phone: "",
    residence: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const phoneHandler = (e) => {
    const value = e.target.value;
    changeHandler(e);
    const isNumeric = /^\d+$/.test(value);

    if (value.length < 7 || value.length > 15 || !isNumeric) {
      setPhoneError("Please enter a valid Phone No.");
    } else {
      setPhoneError(null);
    }
  };

  const emailValidator = (e) => {
    const value = e.target.value;
    changeHandler(e);

    const emailRegex = /^[a-zA-Z0-9._%+-]{3,20}@[a-zA-Z0-9-]{3,10}\.[a-zA-Z]{2,5}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError(null);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    for (const key in address) {
      if (!address[key]) {
        toast.error("Please fill all the details");
        return;
      }
    }

    if (emailError || phoneError) {
      toast.error("Please enter valid email or phone");
      return;
    }

    // If needed, proceed with actual form submission logic here
  };

  const allDetailsFilled =
    Object.values(address).every((field) => field) && !emailError && !phoneError;

  return token && transactionGoing && item ? (
    <form
      className="py-[60px] sm:py-[70px] min-h-screen min-w-[100%] flex justify-center"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col justify-between items-start gap-[30px]">
        {/* User Details & Payment method */}
        <div className="flex flex-col gap-6 sm:w-[max(30vw,425px)]">
          <div className="flex flex-col gap-3">
            <p className="text-xl sm:text-2xl font-semibold">Delivery Information</p>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                className="w-full"
                value={address.firstname}
                onChange={changeHandler}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                className="w-full"
                value={address.lastname}
                onChange={changeHandler}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Email address"
              name="email"
              className="w-full"
              value={address.email}
              onChange={emailValidator}
              required
            />
            <span className="text-red-500">{emailError}</span>

            <input
              type="text"
              placeholder="Street"
              name="street"
              className="w-full"
              value={address.street}
              onChange={changeHandler}
              required
            />

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="City"
                name="city"
                className="w-full"
                value={address.city}
                onChange={changeHandler}
                required
              />
              <input
                type="text"
                placeholder="State"
                name="state"
                className="w-full"
                value={address.state}
                onChange={changeHandler}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Society/Apartment/Bungalows"
              name="residence"
              className="w-full"
              value={address.residence}
              onChange={changeHandler}
              required
            />

            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Zip code"
                name="zipcode"
                className="w-full"
                value={address.zipcode}
                onChange={changeHandler}
                required
              />
              <input
                type="text"
                placeholder="Country"
                name="country"
                className="w-full"
                value={address.country}
                onChange={changeHandler}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Phone : 9567423176"
              name="phone"
              className="w-full"
              value={address.phone}
              onChange={phoneHandler}
              required
            />
            <span className="text-red-500">{phoneError}</span>
          </div>

          {/* Payment Options */}
          <div className="w-full items-start py-5 sm:py-9">
            <h1 className="text-xl sm:text-2xl font-semibold pb-3">Select Payment method</h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <div
                className={`flex gap-2 items-center px-3 py-3 border w-full ${
                  paymentMethod === "cod" ? "border-green-400" : "border-gray-200"
                } cursor-pointer`}
                onClick={() => setPaymentMethod("cod")}
              >
                <p
                  className={`h-[9px] w-[9px] rounded-full ${
                    paymentMethod === "cod" ? "bg-green-400" : "bg-gray-200"
                  }`}
                ></p>
                <p>CASH ON DELIVERY</p>
              </div>
              <div
                className={`flex gap-2 items-center px-3 py-1 border w-full ${
                  paymentMethod === "stripe" ? "border-green-400" : "border-gray-200"
                } cursor-pointer`}
                onClick={() => setPaymentMethod("stripe")}
              >
                <p
                  className={`h-[9px] w-[9px] rounded-full ${
                    paymentMethod === "stripe" ? "bg-green-400" : "bg-gray-200"
                  }`}
                ></p>
                <img src={assets.stripe_logo} alt="stripe_logo" />
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="w-full sm:w-[max(30vw,425px)]">
            <h2 className="text-xl md:text-2xl font-bold pb-3 tracking-wide">Order Totals</h2>
            <hr />
            <div>
              <div className="flex justify-between items-center py-2">
                <p className="text-sm sm:text-base">Subtotal</p>
                <p className="text-base sm:text-lg">₹{item.price * item.quantity}</p>
              </div>
              <hr />
              <div className="flex justify-between items-center py-2">
                <p className="text-sm sm:text-base">Delivery Fee</p>
                <p className="text-base sm:text-lg">
                  ₹{paymentMethod === "cod" ? item.quantity * 10 : 0}
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center py-2">
                <b className="text-lg sm:text-xl">Total</b>
                <p className="text-base sm:text-lg">
                  ₹
                  {item.price * item.quantity +
                    (paymentMethod === "cod" ? item.quantity * 10 : 0)}
                </p>
              </div>
            </div>

            <div className="mt-3 flex justify-center">
              {allDetailsFilled ? (
                <Link
                  to="/confirm-order"
                  state={{
                    item,
                    address,
                    paymentMethod,
                    delivery_fee: paymentMethod === "cod" ? 10 : 0,
                  }}
                  className="bg-[#FF073A] py-2 px-3 sm:py-3 sm:px-6 text-white text-xs sm:text-sm text-center"
                >
                  PROCEED TO CONFIRM ORDER
                </Link>
              ) : (
                <button className="bg-[#FF073A] py-2 px-3 sm:py-3 sm:px-6 text-white text-xs sm:text-sm text-center" type="submit">
                  PROCEED TO CONFIRM ORDER
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : token && !transactionGoing && item ? (
    <OrderAlreadyPlaced />
  ) : (
    <NotAccessPage />
  );
};

export default PlaceOrder;
