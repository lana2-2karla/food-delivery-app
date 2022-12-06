import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import ShopCard from '../components/shopCard'
import axios from 'axios'

function Shops () {
  const [platesShops, setPlatesShops] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/plates').then((response) => {
      setPlatesShops(response.data)
    })
      .catch((error) => {
        console.error('Error fetching data', error)
      })
  }, [])

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
      platesShopsAll={platesShops}
      searchValue={search}/>
      </div>
    </div>
  )
}
export default Shops
