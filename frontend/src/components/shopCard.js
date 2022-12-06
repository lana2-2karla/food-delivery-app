import { FoodContext } from '../contexts/foodContext'
import React, { useContext } from 'react'

/* eslint-disable react/prop-types */
function ShopCard (props) {
  const { searchValue } = props
  const { food } = useContext(FoodContext)

  const uniquesFood = food.filter(function (item) {
    return !this[JSON.stringify(item.Shop)] && (this[JSON.stringify(item.Shop)] = true)
  }, Object.create(null))

  return (
    <div className="min-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-10">
      {uniquesFood
        .filter((infoFood) => infoFood.Shop.name.includes(searchValue)).map((data, index) => (
          <div key={index} className="md:flex rounded-xl">
              <div className="md:shrink-0">
                  <img className="h-28 w-full object-cover md:h-full md:w-48 " src={data.Shop.urlImage} alt="foodImage"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.Shop.name}</div>
                  <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{data.Shop.description}</a>
                  <p className="mt-2 text-slate-500">{data.Shop.rating} - {data.Shop.deliveryTime}m - ${data.Shop.deliveryValue}</p>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default ShopCard
