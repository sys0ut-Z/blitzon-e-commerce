import React from 'react'
import blitzon_logo from '../../assets/other/blitzon_logo_2.png'
import {admin_assets} from "../../assets/admin_assets/adminassets.js"
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = ({admintoken, setShowLoginPopup}) => {
  return (
    <div className='px-4 sm:px-5 flex justify-between items-center py-1'>
      <div>
        <img src={blitzon_logo} alt="blitzon_logo" className='w-[max(9.5vw,75px)]'/>
      </div>

      <div>
        {
          !admintoken ? 
          <button className='px-6 sm:px-7 py-1 bg-[#FF073A] text-white rounded-full text-xs sm:text-sm'
            onClick={() => setShowLoginPopup(true)}
          >Login</button> : 
          <div className='flex items-center gap-1'>
            <FaRegUserCircle size={20}/>
            <span className='text-gray-500 text-sm sm:text-base'>Admin</span>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar