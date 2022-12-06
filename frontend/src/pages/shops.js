import React, { useState } from 'react'
import Header from '../components/header'
import ShopCard from '../components/shopCard'

function Shops () {
  const [search, setSearch] = useState('')

  return (
    <div>
      <Header />
      <div className="md:flex items-center">
      <input
        className="p-2 mt-8 rounded-xl w-3/5 border-color: rgb(0 0 0) border-2"
        type="text" name="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ShopCard
      searchValue={search}/>
      </div>
    </div>
  )
}
export default Shops
