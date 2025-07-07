import React from 'react'
// import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'

const ProductItem = ({id, productname, product_images, price, description, category}) => {
  return (
    <Link to={`/product/${id}`} className='p-3 bg-white shadow-lg cursor-pointer rounded-md'
      state={{
        id, productname, product_images, price, description, category
      }}
    >
      <div className='aspect-square flex justify-center items-center'>
        <img src={product_images[0]} alt="product_image" className='object-cover hover:scale-105 transition-all duration-500'/>
        
        {/* // TODO : left side buy button */ }
        {/* // TODO : right side add to cart('+' & '-') button */ }
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
    </Link>
  )
}

export default ProductItem