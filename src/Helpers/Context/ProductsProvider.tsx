import { ReactElement, createContext } from "react"

export type ProductType = {
    sku: string
    name: string
    price: number
}

const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Ghana Babe",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Amani Robe",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Naija Babe",
        "price": 29.99
    }
]

export type UseProductsContextType = {products: ProductType[]}
const initContextState: UseProductsContextType = {products: []}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = {children?: ReactElement | ReactElement[]}

export const ProductsProvider = ({children}: ChildrenType): ReactElement =>{
    // const [products, setProducts] = useState<ProductType[]>(initState)
    const products = initState

    return (
        <ProductsContext.Provider value={{products}} >{children}</ProductsContext.Provider>
    )

}

export default ProductsContext