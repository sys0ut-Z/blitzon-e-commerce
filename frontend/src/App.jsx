import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
import Collections from './pages/Collections.jsx'
import BestSeller from './pages/BestSeller.jsx'
import Product from './pages/Product.jsx'
import Footer from './components/Footer/Footer.jsx'
import Cart from './pages/Cart.jsx'
import AboutUs from './pages/AboutUs.jsx'
import MobileResMenubar from './components/Navbar/MobileResMenubar.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Orders from './pages/Orders.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import ConfirmOrder from './pages/ConfirmOrder.jsx'
import ErrorPage from './util/ErrorPage.jsx'
import ProtectedRoute from './util/ProtectedRoute.jsx'
import VerifyPage from './pages/VerifyPage.jsx'
import Partners from './pages/Partners.jsx'
import {ToastContainer} from 'react-toastify'

function App() {
  const [showMenubar, setShowMenubar] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <div>
      <ToastContainer />
      <MobileResMenubar showMenubar={showMenubar} setShowMenubar={setShowMenubar}/>
      <SignUp showLoginPopup={showLoginPopup} setShowLoginPopup={setShowLoginPopup} />
      <div className='w-[95%] sm:w-[91%] mx-auto'>
        <Navbar setShowMenubar={setShowMenubar} setShowLoginPopup={setShowLoginPopup} />
        <hr />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/bestseller" element={<BestSeller />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlaceOrder />} />

            <Route path="/confirm-order" 
              element={
                <ProtectedRoute>
                  <ConfirmOrder />
                </ProtectedRoute>
              } />
            <Route path="/orders" element={<Orders />} />

            <Route path="/verify" element={<VerifyPage />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/partners/:id" element={<Partners />} />

            {/* same pages for both */}
            {/* for any mistyped route */}
            <Route path="*" element={<ErrorPage />} />

            {/* to display this page when user is not logged in */}
            <Route path="/error-page" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
