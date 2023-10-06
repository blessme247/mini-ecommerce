import { useContext } from "react"
import ProductsContext, { UseProductsContextType } from "../Context/ProductsProvider"


const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts