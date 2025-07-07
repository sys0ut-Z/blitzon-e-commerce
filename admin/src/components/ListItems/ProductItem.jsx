import React from 'react'
import cross_icon from '../../assets/other/cross_icon.png'
import axios from 'axios'
import {backend_url} from '../../assets/admin_assets/adminassets.js'
import {toast} from 'react-toastify'

const ProductItem = ({id, productname, product_images, price, description, category, admintoken}) => {
  // TODO : route admin to update product page when admin clicks on any product from list items
  // TODO : also implement search functionality in List Items page

  const removeItem = async () => {
    const response = await axios.post(backend_url+'/api/admin/remove-product', {itemId:id}, {headers: {admintoken}})

    if(!response.data.success){
      toast.error(response.data.message);
      return;
    }

    toast.success(response.data.message);
  }

  return (
    <div className='p-3 bg-white shadow-lg cursor-pointer rounded-md' >
      <div className='relative aspect-square flex justify-center items-center'>
        <img src={product_images[0]} alt="product_image" className='object-cover hover:scale-105 transition-all duration-500'/>
        <div className='absolute top-0 right-0 w-5 cursor-pointer hover:bg-[#FF073A]/65 p-[3px] rounded-full' onClick={removeItem}>
          <img src={cross_icon} alt="cross_icon object-contain" />
        </div>
      </div>

      <div className='pt-6 px-3 flex flex-col gap-1 justify-between'>
        <span className='text-xl lg:text-2xl'>{productname}</span>
        <p className='space-x-1 text-red-500'>
          <span>₹</span>
          <span>{price.toLocaleString("en-IN")}</span>
        </p>
      </div>

      <div className='px-3 pt-3 text-sm tracking-wide flex items-center'>
        {description}
      </div>
    </div>
  )
}

export default ProductItem