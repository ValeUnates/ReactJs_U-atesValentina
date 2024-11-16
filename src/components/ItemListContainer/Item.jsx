import { Link } from "react-router-dom"
const Item = ({ product }) => {
    return (
    <Link to={"/descripcion/" + product.id} className="container-card">
            <div className="card">
                <img src={product.imagen} alt="" width={200} className="image" /> 
                <h4 className="nombre-producto">{product.nombre}</h4>
                <p className="precio-producto">${product.precio}</p>
                <button className="detalle">VER DETALLE</button>
            </div>    
    </Link>        
        
    )
}


export default Item 