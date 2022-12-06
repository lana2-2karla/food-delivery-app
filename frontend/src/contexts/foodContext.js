/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const FoodContext = createContext()

function FoodProvider ({ children }) {
  const [food, setFood] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/plates').then((response) => {
      setFood(response.data)
    })
      .catch((error) => {
        console.error('Error fetching data', error)
      })
  }, [])

  return (
        <FoodContext.Provider value={{ food, setFood }}>
            { children }
        </FoodContext.Provider>
  )
}

export default FoodProvider
