import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { StoreContext } from '../../context/StoreContextProvider.jsx';
const navLinks = [
  {
    id: 1,
    text : (
      <NavLink to="/" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-[#FC1273]" : "text-black"} text-base`}
      >
        Home
      </NavLink>
    )
  },
  {
    id: 2,
    text : (
      <NavLink to="/collections" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-[#FC1273]" : "text-black"} text-base`}
      >
        Collections
      </NavLink>
    )
  },
  // {
  //   id: 3,
  //   text : (
  //     <NavLink to="/about-cars" onClick={() => window.scrollTo(0, 0)}
  //       className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-lg lg:text-xl`}
  //     >
  //       About
  //     </NavLink>
  //   )
  // },
  {
    id: 4,
    text : (
      <NavLink to="/bestseller" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-[#FC1273]" : "text-black"} text-base`}
      >
        BestSeller
      </NavLink>
    )
  },
  {
    id: 5,
    text : (
      <NavLink to="/aboutus" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-[#FC1273]" : "text-black"} text-base`}
      >
        About Us
      </NavLink>
    )
  }
]

const MobileResMenubar = ({showMenubar, setShowMenubar}) => {
  const {username} = useContext(StoreContext);
  return (
    <div className={`fixed sm:hidden z-30 top-0 ${showMenubar ? "left-0" : "-left-[200%]"} 
      h-screen w-screen bg-black/60 block transition-all duration-300 text-black`}>
      <div className='absolute top-0 left-0 w-[80%] h-full bg-white py-7'>

        {/* Header Section */}
        <div className='flex justify-between items-center px-5'>
          <h1 className='flex items-center gap-3'>
            <span><FaUserCircle size={40}/></span>
            <span className='text-lg font-[500]'>{username}</span>
          </h1>
          <span>
            <IoMdClose size={25} onClick={() => setShowMenubar(prev => !prev)}
              className='cursor-pointer'  
            />
          </span>
        </div>

        {/* Links */}
        <div className='py-10'>
          <ul className=''>
            {
              navLinks.map(({id, text}) => (
                <li className='tracking-wide border-t border-b py-2 px-5' key={id}
                  onClick={() => setShowMenubar(prev => !prev)}
                >
                  {text}
                </li>
              ))
            }
          </ul> 
        </div>
      </div>
        <div className='absolute left-6 bottom-6 text-xs sm:text-lg text-black'>
          Download High Quality Images for Free
        </div>
    </div>
  )
}

export default MobileResMenubar