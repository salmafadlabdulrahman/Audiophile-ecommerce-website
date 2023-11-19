import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import HeadPhones from "./pages/HeadPhones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Product from "./components/Product";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="headphones">
            <Route index element={<HeadPhones />} />
            <Route path=":slug" element={<Product />} />
          </Route>
          <Route path="speakers">
            <Route index element={<Speakers />} />
            <Route path=":slug" element={<Product />} />
          </Route>
          <Route path="earphones">
            <Route index element={<Earphones />} />
            <Route path=":slug" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;