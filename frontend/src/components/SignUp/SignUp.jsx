import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import cross_icon from '../../assets/other/cross_icon.png'
import { StoreContext } from '../../context/StoreContextProvider.jsx';
import { backend_url } from '../../assets/assets.js';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUp = ({showLoginPopup, setShowLoginPopup}) => {
  const [loginState, setLoginState] = useState("Sign Up");
  const [checkbox, setCheckbox] = useState(false);

  const {setToken} = useContext(StoreContext);
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails(prev => ({
      ...prev, [name]:value,
    }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    // set username to show in both Navbar and Mobile responsive Menubar

    if(loginState === "Sign Up"){
      const response = await axios.post(backend_url+'/api/user/register', {
        username: details.username,
        email: details.email,
        password: details.password
      });

      setShowLoginPopup(false);
      if(!response.data.success){
        toast.error(response.data.message);
        return;
      }

      // set token in local storage
      sessionStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      
      toast.success(response.data.message);
    }
    else{
      const response = await axios.post(backend_url+'/api/user/login', {
        email: details.email,
        password: details.password
      });
      
      setShowLoginPopup(false);
      if(!response.data.success){
        toast.error(response.data.message);
        return;
      }
      
      // set token in local storage
      sessionStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      toast.success(response.data.message);
    }
  }

  useEffect(() => {
    if(!showLoginPopup || loginState){
      setDetails({
        username: "",
        email: "",
        password: "",
      })
      setCheckbox(false);
    }
  }, [showLoginPopup, loginState]);

  return (
    <div className={`fixed ${showLoginPopup ? "block" : "hidden"} top-0 left-0 z-50 bg-black/65 min-h-screen min-w-[100%] backdrop-blur-sm`}>
      <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white
      w-[300px] h-fit sm:w-[350px] px-3 py-5 rounded-md' method="post" onSubmit={submitHandler}>
        <div className='flex items-center justify-between'>
          <span className='text-xl'>{loginState === "Sign Up" ? "Create a New Account" : "Sign In"}</span>
          <img src={cross_icon} className='w-4 h-4 cursor-pointer' onClick={() => setShowLoginPopup(prev => !prev)} />
        </div>
        <div className='py-4 sm:py-5 space-y-3 sm:space-y-4'>
          {
            loginState === "Sign Up" ?
            <input type="text" className='border !border-gray-300 focus:!border-[#FF073A] 
              w-full !py-1 !px-3 outline-none !rounded-full caret-[#FF073A]' placeholder='Full Name' required value={details.username}
              name="username" onChange={changeHandler}/> : null
          }
          <input type="text" className='border !border-gray-300 focus:!border-[#FF073A] 
            w-full !py-1 !px-3 outline-none !rounded-full caret-[#FF073A]' placeholder='Email' required value={details.email}
            name="email" onChange={changeHandler}/>
          <input type="password" className='border !border-gray-300 focus:!border-[#FF073A] 
            w-full !py-1 !px-3 outline-none !rounded-full caret-[#FF073A]' placeholder='Password' required value={details.password}
            name="password" onChange={changeHandler}/>
        </div>
        <div className='text-xs flex items-center justify-start gap-1'>
          <input type="checkbox" required value={checkbox} onChange={() => setCheckbox(prev => !prev)}/>
          By clicking, you agree to our terms and conditions
        </div>
        <p className='text-xs pt-3 flex gap-[3px] sm:gap-[4px] items-center'>
          <span>{loginState === "Sign Up" ? "Alredy have an account?" : "New User?, Create a new Account"}</span>
          <span className='cursor-pointer text-red-500'
            onClick={() => setLoginState(loginState === "Sign Up" ? "Login" : "Sign Up")}>
              {loginState === "Sign Up" ? "Login" : "Sign Up"}</span>
        </p>
        <button className='mt-4 sm:mt-5 w-full bg-[#FF073A] py-2 rounded-full text-white text-sm' type="submit">
          {loginState}
          {/* // TODO : don't forget to remove popup after clicking this button(will be done later inside async handler function) */}
        </button>
      </form>
    </div>
  )
}

export default SignUp