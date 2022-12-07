import React from 'react'
import Header from '../components/header'
import { useLocation } from 'react-router-dom'
import ShopCardDetails from '../components/shopCardDetails'
import PlateCardDetail from '../components/platesCard'
import DrinkCardDetail from '../components/drinkCard'

function ShopDetails () {
  const location = useLocation()
  const data = location.state.data

  return (
    <div>
      <Header />
      <ShopCardDetails shop={data.Shop} />
      <PlateCardDetail plates={data}/>
      <DrinkCardDetail />
    </div>
  )
}
export default ShopDetails
