import React from 'react'

const ItemDetail = ( {product} ) => {
return (
    <div style={{display:'flex'}}>
        <img src={product.imagen} width={500} alt="" />
        <div>
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <h4>${product.precio}</h4>
        </div>
    </div>
)
}

export default ItemDetail
