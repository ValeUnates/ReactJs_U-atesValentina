import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

    return (
        <Link to="/cart" className="carrito">
            <FaCartShopping size={30} style={ quantity === 0 ? {color:"gray"} : {color: "brown "} } />
            <p className="numero-carrito">{ quantity >= 1 && quantity }</p>
        </Link>
    )
}

export default CartWidget