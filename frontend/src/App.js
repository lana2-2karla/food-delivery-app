import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Shops from './pages/shops'
import ShopDetails from './pages/ShopsDetails'

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/shops" element={ <Shops /> }/>
      <Route path="/shopsDetails" element={ <ShopDetails /> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
