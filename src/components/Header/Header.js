import { Link } from "react-router-dom";
import Logo from "../../assets/logo/InStock-Logo_1x.png";
import "./Header.scss";

function Header() {

    return(
        <header className="header">
            <section className="header__image-container">
                    <img className="header__image" src={Logo} alt=" Instock logo" />
            </section>

            <nav className="header__navigation">
                <ul className="header__navigation-list">
                    <Link to={`/warehouse`} >
                    <li className="header__nav-list-item"> Warehouses</li>
                    </Link>
                    <Link to={`/inventory`} >
                    <li className="header__nav-list-item"> Inventory</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;