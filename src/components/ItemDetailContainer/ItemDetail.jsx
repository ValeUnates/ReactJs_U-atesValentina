import React from 'react'

const ItemDetail = ( {product} ) => {
return (
    <div className='detail' style={{display:'flex', paddingTop: "50px"}}>
        <img src={product.imagen} width={500} alt="" />
        <div>
            <h3 className='nombre-detail'>{product.nombre}</h3>
            <p className='descripcion-detail'>{product.descripcion}</p>
            <h4 className='precio-detail'>${product.precio}</h4>
        </div>
    </div>
)
}

export default ItemDetail
