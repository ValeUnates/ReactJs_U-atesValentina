import { Link } from "react-router-dom"
const Item = ({ product }) => {
    return (
    <Link to={"/descripcion/" + product.id} className="container-card">
            <div className="card">
                <img src={product.imagen} alt="" width={200} className="image" /> 
                <h4>{product.nombre}</h4>
                <p>${product.precio}</p>
            </div>    
    </Link>        
        
    )
}


export default Item 