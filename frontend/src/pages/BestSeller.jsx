import React, { useContext, useEffect, useState } from 'react'
import ProductItem from '../components/Products/ProductItem.jsx';
import { backend_url } from '../assets/assets.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../util/Loader.jsx';

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(backend_url+'/api/user/all-products');
      setLoader(false);
      if (response.data.success) {
        setProducts(response.data.allproducts);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  }

  useEffect(() => {
    setLoader(true);
    fetchProducts();
  }, []);

  return !loader ? (
    <div className='pb-16 pt-10'>
      <h1 className='text-2xl md:text-3xl font-bold tracking-wide sm:tracking-wider text-center pb-7'>Top Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5'>
        {
          products?.map(({_id, productname, product_images, price, description, category, bestseller}) => {
            if(bestseller){
              return (
                <ProductItem key={_id} id={_id} productname={productname} product_images={product_images} price={price} description={description} category={category}/>
              )
            }
          })
        }
      </div>
    </div>
  ) : <Loader />
}

export default BestSeller