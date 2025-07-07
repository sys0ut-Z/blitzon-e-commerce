import React, { useState } from 'react'
import axios from 'axios'
import { backend_url } from '../../assets/admin_assets/adminassets.js';
import { toast } from 'react-toastify';

const Login = ({setAdminToken, setShowLoginPopup}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(backend_url+'/api/user/admin-login', {email, password});

    if(!response.data.success){
      toast.error(response.data.message);
      setEmail("");
      setPassword("");
      return;
    }
    // set admin token in localstorage
    localStorage.setItem("admintoken", response.data.admintoken);
    setAdminToken(response.data.admintoken);

    setShowLoginPopup(false);
    toast.success(response.data.message);
  }

  return (
    <div className='fixed top-0 left-0 min-h-screen min-w-[100%] bg-black/65 backdrop-blur-sm'>
      <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-5 w-[max(20vw,310px)] rounded-md'
      onSubmit={submitHandler} method="post">
        <div className='flex justify-between items-center'>
          <h1>Admin Login</h1>
          <p onClick={() => setShowLoginPopup(false)} className='cursor-pointer text-xl'>x</p>
        </div>
        <div className='pt-2 space-y-3'>
          <input type="text" className='border border-gray-300 focus:border-[#FF073A] 
            w-full py-1 px-3 outline-none rounded-full caret-[#FF073A]' placeholder='Email' required
            onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className='border border-gray-300 focus:border-[#FF073A] 
            w-full py-1 px-3 outline-none rounded-full caret-[#FF073A]' placeholder='Password' required
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className='w-full py-2 rounded-full bg-[#FF073A] text-white text-sm mt-3' type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login