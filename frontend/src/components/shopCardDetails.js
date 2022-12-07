/* eslint-disable react/prop-types */
import React from 'react'

function ShopCardDetails (props) {
  const { shop } = props
  return (
        <div className="md:flex rounded-xl md:m-5 flex shadow-lg flex-col">
              <div className="flex justify-center">
                  <img className="md:flex md:w-2/3 md:h-96 md:p-3 h-32 w-full" src={shop.urlImage} alt="foodImage"/>
              </div>
              <div className="p-8 md:flex md:flex-col flex md:p-8 md:relative">
                <div className="md:absolute top-1 left-80 inset-0">
                  <h2 className="uppercase text-sm text-indigo-500 font-semibold">{shop.name}</h2>
                  <h2 className="text-base font-medium text-black hover:underline">{shop.description}</h2>
                </div>
              </div>
          </div>
  )
}
export default ShopCardDetails
