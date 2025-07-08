import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContextProvider.jsx'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {token} = useContext(StoreContext);
  
  if(!token){
    return <Navigate to="/error-page"/>
  }

  return children;
}

export default ProtectedRoute