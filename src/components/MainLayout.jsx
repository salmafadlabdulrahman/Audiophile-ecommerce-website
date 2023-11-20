import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { createContext, useState } from "react";
import "../App.css";
import ProductsCategories from "./ProductsCategories";
import { fetchData } from "../../helper";

export const AppContext = createContext();

function MainLayout() {
  const cartProducts = fetchData("products") || [];
  const [openMenu, setOpenMenu] = useState(false);
  const [buyList, setBuyList] = useState(cartProducts.reduce((acc, cur) => acc + cur.counter, 0))
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu, buyList, setBuyList }}>
      <div className="app">
        <NavBar />
        <Outlet />
        {isHomePage && null}
        {isHomePage ? null : (
            <div className="categoreies-container">
              <ProductsCategories />
            </div>
        )}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default MainLayout;