import React from 'react'
import Header from '../components/header'
import ShopCard from '../components/shopCard'

function Shops () {
  return (
    <div>
      <Header />
      <div className="md:flex items-center">
      <input
        className="p-2 mt-8 rounded-xl w-3/5 border-color: rgb(0 0 0) border-2"
        type="text" name="search"
        placeholder="search"
      />
      <ShopCard />
      </div>
    </div>
  )
}
export default Shops
