import React from 'react'
import Header from '../components/header'
import { useLocation } from 'react-router-dom'
import ShopCardDetails from '../components/shopCardDetails'
import PlateCardDetails from '../components/platesCardDetails'
import DrinkCardDetails from '../components/drinkCardDetails'

function ShopDetails () {
  const location = useLocation()
  const data = location.state.data

  return (
    <div>
      <Header />
      <ShopCardDetails shop={data.Shop} />
      <PlateCardDetails plates={data}/>
      <DrinkCardDetails />
    </div>
  )
}
export default ShopDetails
