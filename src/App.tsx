import { useState } from "react"
import Cart from "./components/Cart"
import ProductsList from "./components/ProductsList"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  const [viewCart, setViewCart] = useState<boolean>(false)

  const viewContent = viewCart ? <Cart /> : <ProductsList />

  const content = (
    <>
    <Header viewCart = {viewCart} setViewCart={setViewCart} />
    {viewContent}
    <Footer viewCart={viewCart} />
    </>
  )

  return content
}

export default App
