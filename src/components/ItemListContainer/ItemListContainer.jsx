import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import "./ItemListContainer.scss"

const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()

    useEffect(()=> {
        getProducts()
            .then((data) => {
                if(idCategory){
                    const filterProducts = data.filter( (product)=> product.category === idCategory )
                    setProducts(filterProducts)
                }else{
                    setProducts(data)
                }
            })
            .catch((error) =>{
                console.error(error)
            })
            .finally(() => {
                console.log("finalizo la promesa")
            })
    }, [idCategory])

    console.log(products)
    
    return (
        <div className="Item-List-container">
            <h2 className="saludo">{saludo}</h2>
            <ItemList products={products}/>
        </div>
    )
}



export default ItemListContainer