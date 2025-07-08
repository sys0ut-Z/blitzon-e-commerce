import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets.js'
import {NavLink, useNavigate} from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { StoreContext } from '../../context/StoreContextProvider.jsx'
import { IoLogOutOutline } from "react-icons/io5";
import { LiaBoxSolid } from "react-icons/lia";
import './Navbar.css'

const navbarLinks = [
  {
    id: 1,
    name: "Home",
    link: '/'
  },
  {
    id: 2,
    name: "Collections",
    link: '/collections'
  },
  {
    id: 3,
    name: "BestSeller",
    link: '/bestseller'
  },
  {
    id: 4,
    name: "About Us",
    link: '/aboutus'
  },
]
const Navbar = ({setShowMenubar, setShowLoginPopup}) => {
  const {token, setToken, getTotalCartAmount, username} = useContext(StoreContext);
  const navigate = useNavigate();
  const [miniMenu, setMiniMenu] = useState(false);

  const logoutHandler = () => {
    setToken(null);
    sessionStorage.clear("token");
  }

  return (
    <div className='flex justify-between items-center text-xs lg:text-sm py-1'>
      <div>
        <img src={assets.blitzon_logo} className='w-[max(9vw,125px)] h-[max(3.1vw,40px)]'/>
      </div>

      <div className='hidden sm:block'>
        <ul className='flex gap-3 lg:gap-5'>
          {
            navbarLinks.map(({id, name, link}) => (
              <li key={id}>
                <NavLink to={link} className={({isActive}) => `${isActive ? "active-underline" : ""} py-[6px]`}>
                  {name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>

      <div className='flex gap-4'>
        <div className='flex gap-4 items-center'>
          <div className='relative z-10'>
            <img src={assets.basket_icon} className='w-4 lg:w-5 cursor-pointer' onClick={() => navigate('/cart')}/>
            {
              getTotalCartAmount() > 0 ?
              <div className='absolute w-[7px] h-[7px] text-[3px] bg-[#FC1273] -top-1 right-0 rounded-full'>
              </div> : null
            }
          </div>
        </div>
        {
          token ? 
          <div className='relative group'>
            <div className='flex gap-2 items-center group-hover:cursor-pointer'
            onClick={() => setMiniMenu(prev => !prev)}>
              <img src={assets.profile_icon} alt="profile_icon" className='w-4 lg:w-5' />
              <p className='text-xs lg:text-sm hidden sm:block'>{username}</p>
            </div>
            {
              miniMenu &&
              <div className='absolute top-6 border right-0 bg-white h-fit w-fit flex flex-col justify-center rounded-md'>
                <p className='flex gap-1 items-center cursor-pointer px-4 py-2 hover:bg-[#ffcbd5] rounded-t-md' onClick={logoutHandler}>
                  <IoLogOutOutline size={15}/>
                  <span>Logout</span>
                </p>
                <p className='flex gap-1 items-center cursor-pointer px-4 py-2 hover:bg-[#ffcbd5]' onClick={() => navigate('/orders')}>
                  <LiaBoxSolid size={15}/>
                  <span>Orders</span>
                </p>
              </div>
            }
          </div> :
          <button className='bg-[#FF073A] px-5 py-[5px] lg:px-6 lg:py-[6px] text-white rounded-full text-xs lg:text-sm
          border-none outline-none'
            onClick={() => setShowLoginPopup(prev => !prev)}
          >
            SIGN IN
          </button>
        }
        <div className='flex justify-center items-center sm:hidden'>
          <RxHamburgerMenu size={17} onClick={() => setShowMenubar(prev => !prev)}/>
        </div>
      </div>

    </div>
  )
}

export default Navbar