import { Link } from "react-router-dom";
import "../styles/home.css"

//Images
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";
import headPhoneImg from "/assets/shared/desktop/image-headphones.png";
import speakerImg from "/assets/shared/desktop/image-speakers.png";
import earphonesImg from "/assets/shared/desktop/image-earphones.png";


function ProductsCategories() {
  return (
      <div className="home-products-container">
        <div className="shop-item-container">
          <img src={headPhoneImg} alt="headphones" className="product-img" />
          <h3>Headphones</h3>
          <Link>
            Shop{" "}
            <span>
              <img src={arrowRight} />
            </span>
          </Link>
        </div>
        <div className="shop-item-container">
          <img src={speakerImg} alt="headphones" className="product-img" />
          <h3>Speakers</h3>
          <Link>
            Shop{" "}
            <span>
              <img src={arrowRight} />
            </span>
          </Link>
        </div>
        <div className="shop-item-container">
          <img src={earphonesImg} alt="headphones" className="product-img" />
          <h3>Earphones</h3>
          <Link>
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
