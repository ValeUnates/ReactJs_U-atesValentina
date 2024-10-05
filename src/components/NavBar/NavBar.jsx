import CartWidget from "./CartWidget"
import "./navbar.scss"


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <h2>TechCase</h2>
            </div>
            <ul className="list">
                <li>FUNDAS</li>
                <li>CARGADORES</li>
                <li>PROTECTORES DE PANTALLA</li>
                <li>AURICULARES</li>
            </ul>

            <CartWidget />
        </nav>
    )
}
export default NavBar