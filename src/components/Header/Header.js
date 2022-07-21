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
                    <li className="header__nav-list-item"> Warehouses</li>
                    <li className="header__nav-list-item"> Inventory</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;