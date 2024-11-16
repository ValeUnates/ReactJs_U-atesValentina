import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import React from 'react'


const ItemDetail = ( {product} ) => {
    const[showItemCount, setShowItemCount] = useState(true)

    const { addProductInCart } = useContext(CartContext)

    const addProduct = ( count ) =>{
    const productCart = { ...product, cantidad: count }

    addProductInCart(productCart)
    setShowItemCount(false)
}


return (
    <div className='detail'>
        <img className="img-detail" src={product.imagen} width={500} alt="" />
        <div>
            <h3 className='nombre-detail'>{product.nombre}</h3>
            <p className='descripcion-detail'>{product.descripcion}</p>
            <h4 className='precio-detail'>${product.precio}</h4>
            {
                showItemCount === true ? (
                    <ItemCount stock={product.stock} addProduct={addProduct}/>
                ) : (
                    <Link className='boton-terminar' to="/cart">Terminar mi compra</Link>
                )
            }
            
        </div>
    </div>
)
}

export default ItemDetail
