import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { createContext, useState } from "react";
import "../App.css";
import ProductsCategories from "./ProductsCategories";

export const AppContext = createContext();

function MainLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu }}>
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