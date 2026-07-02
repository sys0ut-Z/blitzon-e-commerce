import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem.jsx';
import { backend_url } from '../../assets/assets.js';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../util/Loader.jsx';

const Products = ({products, loader}) => {
  return !loader ? (
    <div className='py-[60px]'>
      <h1 className='text-center text-3xl md:text-4xl pb-3 font-bold tracking-wide sm:tracking-wider'>Explore Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7'>
        {
          products?.map(({_id, productname, product_images, price, description, category}) => (
            <ProductItem key={_id} id={_id} productname={productname} product_images={product_images} price={price} description={description} category={category}/>
          ))
        }
      </div>
    </div>
  ) : <Loader />
}

export default Products