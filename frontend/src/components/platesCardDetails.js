/* eslint-disable react/prop-types */
import React from 'react'

function PlateCardDetails (props) {
  const { plates } = props

  return (
      <div className="flex md:flex md:pl-72 md:pt-10 pt-10">
                <div className="absolute md:pl-10 pl-10">
                    <h3 className=" text-xl">Pratos Executivos:</h3>
                </div>
         <div className="p-10 inline-flex md:w-1/4 md:flex md:pt-20 shadow-lg">
              <div className="w-1/2 flex justify-center flex-wrap">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{plates.name}</div>
                  <img className="" src={plates.urlImage} alt="foodImage"/>
              </div>
                  <div className="w-1/2 p-5 pl-10">
                {plates.ingredients.map((plate, index) => (
                    <h2 key={index} className="">{plate},</h2>
                ))}
                    <p className="mt-3 text-slate-500">R${plates.value}</p>
                  </div>
          </div>
    </div>
  )
}
export default PlateCardDetails
