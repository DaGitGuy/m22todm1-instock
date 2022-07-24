import { Link } from "react-router-dom";
import Logo from "../../assets/logo/InStock-Logo_1x.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <section className="header__image-container">
          <Link to={`/`}>
            <img className="header__image" src={Logo} alt="Instock logo" />
          </Link>
        </section>

        <nav className="header__navigation">
          <ul className="header__nav-list">
            <Link className="header__nav-list-link" to={`/warehouse`}>
              <li className="header__nav-list-item"> Warehouses</li>
            </Link>
            <Link className="header__nav-list-link" to={`/inventory`}>
              <li className="header__nav-list-item"> Inventory</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
