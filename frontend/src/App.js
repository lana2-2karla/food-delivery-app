import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Shops from './pages/shops'

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/shops" element={ <Shops /> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
