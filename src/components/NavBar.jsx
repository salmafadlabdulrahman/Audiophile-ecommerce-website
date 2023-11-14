import menuIcon from "/assets/shared/mobile/icon-hamburger.svg";
import closeMenuIcon from "/assets/shared/mobile/icon-close-menu.svg";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import ProductsCategories from "./ProductsCategories";

import "../styles/navbar.css";
import { useContext } from "react";
import { AppContext } from "./MainLayout";

function NavBar() {
  const { openMenu, setOpenMenu } = useContext(AppContext);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <nav>
            <div className="menu-logo-container">
              <img
                src={!openMenu ? menuIcon : closeMenuIcon}
                alt="menu icon"
                onClick={() => setOpenMenu((prev) => !prev)}
              />
              <img src={logo} className="logo" />
            </div>
            <img src={cartIcon} className="cart-icon" />
          </nav>

          {openMenu ? (
            <div className="menu">
              <div className="overlay" onClick={() => setOpenMenu(false)}></div>
              <div className="navbar-menu-container">
                <ProductsCategories />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      
    </>
  );
}

export default NavBar;
/*{openMenu && (
        <div className="overlay" onClick={() => setOpenMenu(false)}></div>
      )} */
