import React, { useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import Products from '../components/Products/Products.jsx'
import AppStore from '../components/AppStore/AppStore.jsx'
import TopProducts from '../components/TopProducts/TopProducts.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <Products />
      <TopProducts />
      <AppStore />
    </div>
  )
}

export default Home