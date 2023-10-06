import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductsProvider } from './Helpers/Context/ProductsProvider.tsx'
import { CartProvider } from './Helpers/Context/CartProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>

    <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
