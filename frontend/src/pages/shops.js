import React, { useState } from 'react'
import Header from '../components/header'
import ShopCard from '../components/shopCard'

function Shops () {
  const [search, setSearch] = useState('')

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
      <input
        className="p-2 mt-8 rounded-2xl w-4/5 border-color: rgb(0 0 0) border-2"
        type="text" name="search"
        placeholder="Pesquise por prato, restaurante ou descrição"
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <ShopCard
      searchValue={search}/>
    </div>
  )
}
export default Shops
