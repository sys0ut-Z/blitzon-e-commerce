import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import AddItem from './components/AddItem/AddItem.jsx'
import ListItems from './components/ListItems/ListItems.jsx'
import Orders from './components/Orders/Orders.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/Login/Login.jsx'

function App() {
  const [admintoken, setAdminToken] = useState(
    sessionStorage.getItem("admintoken") ? sessionStorage.getItem("admintoken") : null
  );

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <div>
      <ToastContainer />
      <Navbar admintoken={admintoken} setShowLoginPopup={setShowLoginPopup}/>
      {
        showLoginPopup &&
        <Login setAdminToken={setAdminToken} showLoginPopup={showLoginPopup} setShowLoginPopup={setShowLoginPopup}/>
      }
      <hr />
      <div className='flex px-5'>
        <div className='w-[19%]'>
          <Sidebar />
        </div>
        <div className='w-[81%]'>
          <Routes>
            <Route path="/add-item" element={<AddItem admintoken={admintoken} />}/>
            <Route path="/list-items" element={<ListItems admintoken={admintoken} />}/>
            <Route path="/orders" element={<Orders admintoken={admintoken} />} />  
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
