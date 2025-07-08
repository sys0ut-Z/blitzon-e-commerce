import React, { useContext, useEffect, useState } from 'react'
import '../style/Collections.css'
import ProductItem from '../components/Products/ProductItem.jsx'
import { assets, backend_url } from '../assets/assets.js'
import Loader from '../util/Loader.jsx'
import { toast } from 'react-toastify'
import axios from 'axios'

const Collections = () => {
  
  // ^ products from Zustand blitzStore
  const [products, setProducts] = useState([]);
  
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [collection, setCollection] = useState(products);
  const [loader, setLoader] = useState(false);

  const filterProducts = () => {
    if (category.length > 0) {
      setCollection(products.filter(product => category.includes(product.category)));
    }
    else{
      setCollection(products);
    }

    if (searchText.length > 0) {
      setCollection(products.filter(product => product.productname.toLowerCase().includes(searchText.toLowerCase())));
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(backend_url+'/api/user/all-products');
      setLoader(false);
      if (response.data.success) {
        // ! initially fill both the arrays
        setProducts(response.data.allproducts);
        setCollection(response.data.allproducts);
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

  useEffect(() => {
    filterProducts();
  }, [searchText, category, setCategory]);

  useEffect(() => {
    if(category.length > 0 && searchText.length > 0){
      setSearchText("");
    }
  }, [category]);

  return !loader ? (
    <div>
      <div >
        <div className='bg-white border rounded-full flex items-center justify-between gap-1 border-gray-400
        w-[100%] sm:w-[70%] lg:w-[50%] mx-auto my-2 pr-1 md:pr-3'>
          <input type="text" className='!bg-transparent w-full !py-1 md:!py-2 !px-3 md:!px-5 rounded-full 
          outline-none !border-none caret-[#FC1273] text-xs sm:text-sm' value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
            setCategory("");
          }}/>
          <img src={assets.search_icon} className='cursor-pointer mx-1 w-5 sm:w-6'/>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row border-t'>
        {/* Select Category */}
        <div className='w-full sm:w-[20%] min-h-[100px] sm:min-h-screen border-r border-r-gray-200 px-3'>
          <h1 className='text-xl md:text-2xl py-5'>Categories</h1>
          <div className='sm:space-y-1 md:space-y-2 flex sm:flex-col flex-wrap gap-3'>
            <div className='flex gap-2 items-center text-xs sm:text-sm w-full'>
              <button className='bg-black px-3 lg:px-6 py-1 text-white rounded-full text-xs lg:text-sm'
                onClick={() => setCategory("")}
              >Clear Filter</button>
            </div>
            {
              ["headphone", "keyboard", "mice", "monitor", "laptop"].map((inputtext, id) => (
                <div key={id} className='flex gap-2 items-center text-xs sm:text-sm'>
                  <input type="radio" className='stylecheckbox' onChange={() => setCategory(inputtext)}
                  checked={category.includes(inputtext)} name="category"/>
                  <p className='text-xs md:text-sm'>{inputtext}</p>
                </div>
              ))
            }
          </div>
        </div>

        {/* Products */}
        <div className='w-full sm:w-[80%] h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5'>
          {
            collection.map(({_id, productname, product_images, price, description, category}) => (
              <ProductItem key={_id} id={_id} productname={productname} product_images={product_images} price={price} description={description} category={category}/>
            ))
          }
        </div>
      </div>
    </div>
  ) : <Loader />
}

export default Collections