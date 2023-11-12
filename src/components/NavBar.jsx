import menuIcon from "/assets/shared/mobile/icon-hamburger.svg";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";

import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <nav>
          <img src={menuIcon} alt="menu icon" />
          <img src={logo} />
          <img src={cartIcon} />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
