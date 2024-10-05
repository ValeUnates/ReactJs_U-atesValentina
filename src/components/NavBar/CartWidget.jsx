import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
    return (
        <div className="carrito">
            <FaCartShopping size={30} color="brown"/>
            <p>2</p>
        </div>
    )
}

export default CartWidget