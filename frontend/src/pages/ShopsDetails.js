import React from 'react'
import Header from '../components/header'
import { useLocation } from 'react-router-dom'
import ShopCardDetails from '../components/shopCardDetails'

function ShopDetails () {
  const location = useLocation()
  const data = location.state.data

  return (
    <div>
      <Header />
      <ShopCardDetails shop={data.Shop} />
    </div>
  )
}
export default ShopDetails
