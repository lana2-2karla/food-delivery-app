import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FoodProvider from './contexts/foodContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FoodProvider>
    <App />
    </FoodProvider>
  </React.StrictMode>
)
