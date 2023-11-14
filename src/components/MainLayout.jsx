import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { createContext, useState } from "react";
import "../App.css"

export const AppContext = createContext();

function MainLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppContext.Provider value={{openMenu, setOpenMenu}}>
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default MainLayout;
