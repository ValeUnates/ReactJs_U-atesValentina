import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <h2>TechCase</h2>
            </Link>
            <ul className="list">
                <li className="category">
                    <Link to="/category/fundas">FUNDAS</Link>
                </li>
                <li className="category">
                    <Link to="/category/cargadores">CARGADORES</Link>
                </li>
                <li className="category">
                    <Link to="/category/protectores de pantalla">PROTECTORES DE PANTALLA</Link>
                </li>
                <li className="category">
                    <Link to="/category/auriculares">AURICULARES</Link>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}
export default NavBar