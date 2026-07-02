import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header.jsx'
import Products from '../components/Products/Products.jsx'
import AppStore from '../components/AppStore/AppStore.jsx'
import TopProducts from '../components/TopProducts/TopProducts.jsx'
import { toast } from 'react-toastify'
import axios from 'axios'
import { backend_url } from '../assets/assets.js'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProducts = async () => {
    setLoader(true);
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
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <Products products={products} loader={loader}/>
      <TopProducts />
      <AppStore />
    </div>
  )
}

export default Home