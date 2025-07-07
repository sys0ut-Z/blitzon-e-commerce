import React from 'react'
import {NavLink} from 'react-router-dom';
import { admin_assets } from '../../assets/admin_assets/adminassets.js';

const adminLinks = [
  {
    id: 1,
    text: "Add Item",
    link: "/add-item",
    image: admin_assets.add_icon
  },
  {
    id: 2,
    text: "List items",
    link: "/list-items",
    image: admin_assets.order_icon
  },
  {
    id: 3,
    text: "Orders",
    link: "/orders",
    image: admin_assets.order_icon
  },
]
const Sidebar = () => {
  return (
    <div className='min-h-screen border-r pt-10'>
      <div className='flex flex-col gap-3 items-end'>
        {
          adminLinks.map(({id, text, link, image}) => (
            <NavLink key={id} to={link} 
              className={({isActive}) => `${isActive ? "bg-[#ffdcd9]" : "bg-white"} text-center py-[10px]
              text-xs tracking-wide w-[max(17vw,50px)] border-y border-l rounded-l-lg flex px-5 items-center justify-end gap-3`}>
              <span className='hidden sm:block'>{text}</span>
              <img src={image} className='w-4' />
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar