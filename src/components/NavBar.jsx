import menuIcon from "/assets/shared/mobile/icon-hamburger.svg";
import closeMenuIcon from "/assets/shared/mobile/icon-close-menu.svg";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import emptyCart from "/assets/cart/empty-cart.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ProductsCategories from "./ProductsCategories";

import "../styles/navbar.css";
import { useContext, useState } from "react";
import { AppContext } from "./MainLayout";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const { openMenu, setOpenMenu } = useContext(AppContext);
  const [cartMenu, setCartMenu] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 990px)",
  });
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <nav>
            <div className="menu-logo-container">
              {!isDesktop ? (
                <img
                  src={!openMenu ? menuIcon : closeMenuIcon}
                  alt="menu icon"
                  onClick={() => setOpenMenu((prev) => !prev)}
                />
              ) : (
                ""
              )}
              <Link to={"/"} className="logo-link">
                <img src={logo} className="logo" />
              </Link>
              {isDesktop ? (
                <div className="navigation-container">
                  <ul>
                    <NavLink to={"/"}>
                      <li>Home</li>
                    </NavLink>
                    <NavLink to={"headphones"}>
                      <li>Headphones</li>
                    </NavLink>
                    <NavLink to={"speakers"}>
                      <li>Speakers</li>
                    </NavLink>
                    <NavLink to={"earphones"}>
                      <li>Earphones</li>
                    </NavLink>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>

            <img
              src={cartIcon}
              className="cart-icon"
              onClick={() => setCartMenu(true)}
            />
            {cartMenu && (
              <div className="cart-menu">
                <div
                  className="overlay"
                  onClick={() => setCartMenu(false)}
                ></div>
                <div className="cart-menu-container">
                  <h2>Your cart is empty</h2>
                  <ShoppingCartIcon width={"70px"} />
                </div>
              </div>
            )}
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
