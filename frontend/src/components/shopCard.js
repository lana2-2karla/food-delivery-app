import { FoodContext } from '../contexts/foodContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
function ShopCard (props) {
  const { searchValue } = props
  const { food } = useContext(FoodContext)

  const uniquesFood = food.filter(function (item) {
    return !this[JSON.stringify(item.Shop)] && (this[JSON.stringify(item.Shop)] = true)
  }, Object.create(null))

  return (
    <div className="min-w-md mx-auto bg-white rounded-xl overflow-hidden p-10 flex flex-col md:flex-row md:max-w-5xl md:flex-wrap">
      {uniquesFood
        .filter((infoFood) => infoFood.Shop.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        infoFood.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        infoFood.Shop.description.toLowerCase().includes(searchValue.toLowerCase()))
        .map((data, index) => (
          <div key={index} className="md:flex rounded-xl md:m-5 flex shadow-lg">
              <div className="md:shrink-0">
                  <img className="h-28 w-full object-cover md:h-full md:w-48 " src={data.Shop.urlImage} alt="foodImage"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.Shop.name}</div>
                <Link to="/shopsDetails" state={{ data }} className="link">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{data.Shop.description}</h2>
                </Link>
                  <div className="flex items-stretch md:items-center">
                  <img className="h-2 position: relative top-3.5 md:relative md:top-1.5" src='https://cdn-icons-png.flaticon.com/512/148/148841.png' alt="startIcons"/>
                  <p className="mt-2 text-slate-500">{data.Shop.rating} - {data.Shop.deliveryTime}m - ${data.Shop.deliveryValue}</p>
                  </div>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default ShopCard
