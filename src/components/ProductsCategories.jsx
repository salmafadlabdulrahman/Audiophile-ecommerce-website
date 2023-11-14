import { Link } from "react-router-dom";
import "../styles/home.css";

//Images
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";
import headPhoneImg from "/assets/shared/desktop/image-headphones.png";
import speakerImg from "/assets/shared/desktop/image-speakers.png";
import earphonesImg from "/assets/shared/desktop/image-earphones.png";
import { useContext } from "react";
import { AppContext } from "./MainLayout";

function ProductsCategories() {
  const { setOpenMenu } = useContext(AppContext);

  return (
    <div className="home-products-container">
      <div className="shop-item-container">
        <img src={headPhoneImg} alt="headphones" className="product-img" />
        <h3>Headphones</h3>
        <Link to={"/headphones"} onClick={() => setOpenMenu(false)}>
          Shop{" "}
          <span>
            <img src={arrowRight} />
          </span>
        </Link>
      </div>
      <div className="shop-item-container">
        <img src={speakerImg} alt="headphones" className="product-img" />
        <h3>Speakers</h3>
        <Link to={"/speakers"} onClick={() => setOpenMenu(false)}>
          Shop{" "}
          <span>
            <img src={arrowRight} />
          </span>
        </Link>
      </div>
      <div className="shop-item-container">
        <img src={earphonesImg} alt="headphones" className="product-img" />
        <h3>Earphones</h3>
        <Link to={"/earphones"} onClick={() => setOpenMenu(false)}>
          Shop{" "}
          <span>
            <img src={arrowRight} />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ProductsCategories;
