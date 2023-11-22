//react imports
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useContext, useEffect, useState } from "react";

//local imports
import Allproducts from "../../products.json";
import "../styles/product.css";

import { addToCart } from "../../helper";
import { AppContext } from "./MainLayout";

function Product() {
  const [quantity, setQuntity] = useState(1);
  const { setBuyList } = useContext(AppContext);
  const params = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 500px) and (max-width: 989px)",
  });

  const currentProduct = Allproducts.products.filter(
    (product) => product.slug === params.slug
  )[0];

  useEffect(() => {
    setQuntity(1);
  }, [currentProduct]);

  const formattedPrice = currentProduct.price.toLocaleString();

  const incrementQuantity = () => {
    setQuntity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuntity((prev) => prev - 1);
  };

  return (
    <div className="current-product-container">
      <div className="product-wrapper">
        <Link className="get-back">
          <button onClick={() => navigate(-1)}>Go Back</button>
        </Link>

        <div className="product-details-container">
          <div className="product-main-info">
            <img
              src={
                isMobile
                  ? currentProduct.image.mobile
                  : isTablet
                  ? currentProduct.image.tablet
                  : currentProduct.image.desktop
              }
              alt="earphones"
            />

            <div className="product-info-container">
              <div className="product-info">
                {currentProduct.new ? <h4>New Product</h4> : ""}
                <h3>{currentProduct.name}</h3>
                <p>{currentProduct.description}</p>
                <h5>$ {formattedPrice}</h5>
              </div>

              <div className="counter-wrapper">
                <div className="counter">
                  <button
                    className="decrement-btn"
                    onClick={() => quantity > 1 && decrementQuantity()}
                  >
                    -
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    className="increment-btn"
                    onClick={() => incrementQuantity()}
                  >
                    +
                  </button>
                </div>

                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    addToCart(currentProduct, quantity);
                    setBuyList((prev) => prev + quantity);
                  }}
                >
                  Add To cart
                </button>
              </div>
            </div>
          </div>

          <div className="additional-info-container">
            <div className="features-container">
              <h3>Features</h3>
              <p>{currentProduct.features}</p>
            </div>

            <div className="in-the-box-container">
              <h3>In The Box</h3>
              <div className="items">
                {currentProduct.includedItems.map((piece, index) => (
                  <h2 key={index}>
                    <span>{piece.quantity}X</span> {piece.item}
                  </h2>
                ))}
              </div>
            </div>
          </div>

          <div className="gallery-images-container">
            {Object.keys(currentProduct.gallery).map((key, index) => (
              <img
                key={key}
                src={
                  isMobile
                    ? currentProduct.gallery[key].mobile
                    : isTablet
                    ? currentProduct.gallery[key].tablet
                    : currentProduct.gallery[key].desktop
                }
                style={{
                  gridArea: !isMobile
                    ? index === 0
                      ? "firstImg"
                      : index === 1
                      ? "thirdImg"
                      : "secondImg"
                    : "",
                }}
              />
            ))}
          </div>
        </div>

        <div className="other-products-container">
          <h3>You may also like</h3>
          <div className="other-products-wrapper">
            {currentProduct.others.map((otherProduct, index) => (
              <div className="other-product-info-container" key={index}>
                <img
                  src={
                    isMobile
                      ? otherProduct.image.mobile
                      : isTablet
                      ? otherProduct.image.mobile
                      : otherProduct.image.desktop
                  }
                />
                <h3>{otherProduct.name}</h3>
                <Link to={`/${otherProduct.slug}`}>
                  <button>see product</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
