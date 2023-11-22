//react imports
import { Outlet, useLocation } from "react-router-dom";
import { createContext, useState } from "react";

//local files imports
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../App.css";

//componenets imports
import ProductsCategories from "./ProductsCategories";
import WhoWeAre from "./WhoWeAre";

import { fetchData } from "../../helper";


export const AppContext = createContext();

function MainLayout() {
  const cartProducts = fetchData("products") || [];
  const [openMenu, setOpenMenu] = useState(false);
  const [buyList, setBuyList] = useState(cartProducts.reduce((acc, cur) => acc + cur.counter, 0))
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const checkoutPage = location.pathname === "/checkout";
  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu, buyList, setBuyList }}>
      <div className="app">
        <NavBar />
        <Outlet />
        {isHomePage && null}
        {isHomePage || checkoutPage ? null : (
            <div className="categoreies-container">
              <ProductsCategories />
            </div>
        )}

        {!checkoutPage && <WhoWeAre />}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default MainLayout;