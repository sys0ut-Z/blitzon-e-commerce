import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend_url } from '../../assets/admin_assets/adminassets.js';
import ProductItem from './ProductItem.jsx';
import NotAccessPage from '../../NotAccessPage.jsx';

  // TODO : route admin to update product page when admin clicks on any product from list items
  // TODO : also implement search functionality in List Items page
const ListItems = ({admintoken}) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      if(admintoken !== ""){
        const response = await axios.get(backend_url+'/api/admin/list-products', {headers: {admintoken}});
  
        if(!response.data.success){
          toast.error(response.data.message);
          return;
        }
        
        // console.log(response.data.productList);
        setProducts(response.data.productList);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  // fetch products as soon as the website loads
  useEffect(() => {
    fetchProducts();
  }, [admintoken, products]);

  return admintoken ? (
    <div className='py-2 sm:py-[10px] px-2 sm:px-5'>
      <h1 className='text-center text-2xl md:text-3xl pt-3 pb-5 font-bold tracking-wide sm:tracking-wider'>All Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
        {
          products.map(({_id, productname, product_images, price, description, category}) => (
            <ProductItem key={_id} id={_id} productname={productname} product_images={product_images} price={price} description={description} category={category} admintoken={admintoken}/>
          ))
        }
      </div>
    </div>
  ) : <NotAccessPage />
}

export default ListItems