import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import React from 'react'
import "./Cart.css"

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext) 

    if(cart.length === 0){
        return(
            <div className='empty-cart'>
                <h2 className='titulo-cart'>No hay productos en el carrito 😢</h2>
                <Link className='home' to="/" >Volver al inicio</Link>
            </div>
        )
    }

return (
    <div className='cart'>
        <h2 className='titulo-cart'>Productos en el carrito</h2>
        {
            cart.map((productCart)=> (
                <div className='item-cart' key={productCart.id}>
                    <img src={productCart.imagen} width={200} alt=""/>
                    <p className='nombre-cart'>{productCart.nombre}</p>
                    <p className='cantidad-cart'>Cantidad: {productCart.cantidad}</p>
                    <p className='precio-unidad'>Precio por unidad: ${productCart.precio}</p>
                    <p className='precio-parcial'>Precio parcial: ${productCart.cantidad * productCart.precio}</p>

                    <button className='borrar-producto' onClick={() => deleteProductById(productCart.id) }>Borrar producto</button>
                </div>
            ))
        }
        <p className="precio-total" >Precio total: ${totalPrice()}</p>
        <button className='borrar-carrito' onClick={deleteCart}>Borrar Carrito</button>
        <Link className='terminar-compra' to="/Checkout">TERMINAR MI COMPRA</Link>
    </div>
)
}

export default Cart
