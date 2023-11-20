import menuIcon from "/assets/shared/mobile/icon-hamburger.svg";
import closeMenuIcon from "/assets/shared/mobile/icon-close-menu.svg";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ProductsCategories from "./ProductsCategories";

import "../styles/navbar.css";
import { useContext, useState } from "react";
import { AppContext } from "./MainLayout";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { fetchData } from "../../helper";

function NavBar() {
  const cartProducts = fetchData("products") || [];
  const { openMenu, setOpenMenu, buyList, setBuyList } = useContext(AppContext);
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
            <div
              className="items-num"
              style={{ display: buyList === 0 ? "none" : "block" }}
            >
              {buyList}
            </div>
            {cartMenu && (
              <div className="cart-menu">
                <div
                  className="overlay"
                  onClick={() => setCartMenu(false)}
                ></div>
                <div className="cart-menu-container">
                  <div className="cart-menu-wrapper">
                    {cartProducts.length < 1 ? (
                      <>
                        <h2>Your cart is empty</h2>
                        <ShoppingCartIcon width={"70px"} />
                      </>
                    ) : (
                      <div className="cart-products-wrapper">
                        <div className="cart-info">
                          <h2>Cart ({cartProducts.length})</h2>
                          <button>Remove All</button>
                        </div>

                        <div className="cart-products-container">
                          {cartProducts.map((product, index) => (
                            <div className="cart-product" key={index}>
                              <img src={product.cartImage} width={"70px"} />
                              <div className="cart-product-info">
                                <span className="cart-product-name">
                                  {product.name}
                                </span>
                                <span className="cart-product-price">
                                  $ {product.price.toLocaleString()}
                                </span>
                              </div>
                              <div className="product-counter">
                                <button
                                  className="decrement-btn"
                                  onClick={() => {
                                    const updatedCounter = product.counter - 1;

                                    if (updatedCounter === 0) {
                                      cartProducts.splice(index, 1);
                                      localStorage.setItem(
                                        "products",
                                        JSON.stringify(cartProducts)
                                      );
                                      setBuyList((prev) => prev - 1);
                                    } else {
                                      cartProducts[index].counter =
                                        updatedCounter;
                                      localStorage.setItem(
                                        "products",
                                        JSON.stringify(cartProducts)
                                      );
                                      setBuyList((prev) => prev - 1);
                                    }
                                  }}
                                >
                                  -
                                </button>
                                <span className="quantity">
                                  {product.counter}
                                </span>
                                <button
                                  className="increment-btn"
                                  onClick={() => {
                                    const updatedCounter = product.counter + 1;
                                    cartProducts[index].counter =
                                      updatedCounter;
                                    localStorage.setItem(
                                      "products",
                                      JSON.stringify(cartProducts)
                                    );
                                    setBuyList((prev) => prev + 1);
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ))}

                          <div className="total">
                            <h3>Total</h3>
                            <span>
                              ${" "}
                              {cartProducts
                                .reduce(
                                  (acc, cur) => acc + cur.counter * cur.price,
                                  0
                                )
                                .toLocaleString()}
                            </span>
                          </div>

                          <button className="checkout-btn">checkout</button>
                        </div>
                      </div>
                    )}
                  </div>
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

/*<button
                                  className="decrement-btn"
                                  onClick={() => {
                                    const updatedCounter = product.counter - 1;
                                    if (updatedCounter === 0) {
                                      cartProducts.filter(item => item.name === product.name)
                                      localStorage.setItem(
                                        "products",
                                        JSON.stringify(cartProducts)
                                      );
                                      setBuyList(prev => prev - 1)
                                    } else {
                                      //const updatedCounter = product.counter - 1;
                                      cartProducts[index].counter = updatedCounter;
                                      localStorage.setItem(
                                        "products",
                                        JSON.stringify(cartProducts)
                                      );
                                      setBuyList(prev => prev - 1)
                                    }
                                    
                                    //setBuyList(prev => prev - 1)
                                  }}
                                >
                                  -
                                </button> */

/*if (updatedCounter === 0) {
                                      cartProducts.filter(item => item.name === product.name)
                                      localStorage.setItem(
                                        "products",
                                        JSON.stringify(cartProducts)
                                      );
                                      setBuyList(prev => prev - 1)
                                    } else {
                                      cartProducts[index].counter = updatedCounter;
                                      localStorage.setItem(
                                        "products",
                                        JSON.stringify(cartProducts)
                                      );
                                      setBuyList(prev => prev - 1)
                                    } */
