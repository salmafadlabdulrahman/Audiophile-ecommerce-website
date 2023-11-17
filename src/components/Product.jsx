import { useParams, Link } from "react-router-dom";
import Allproducts from "../../products.json";
import "../styles/product.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function Product() {
  const [quantity, setQuntity] = useState(1);
  const params = useParams();
  const isMobile = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 500px) and (max-width: 989px)",
  });

  const currentProduct = Allproducts.products.filter(
    (product) => product.slug === params.slug
  )[0];

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
          <button>Go Back</button>
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
                  <span
                    className="decrement-btn"
                    onClick={() => quantity > 1 && decrementQuantity()}
                  >
                    -
                  </span>
                  <span className="quantity">{quantity}</span>
                  <span
                    className="increment-btn"
                    onClick={() => incrementQuantity()}
                  >
                    +
                  </span>
                </div>

                <button>Add To cart</button>
              </div>
            </div>
          </div>

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
                alt={`Gallery Image ${key}`}
                style={{
                  width: index < 2 ? "40%" : "50%",
                  order: index === 0 ? "1" : index === 1 ? "3" : "2",
                  alignSelf: "start",
                  justifySelf: "start",
                }}
              />
            ))}
          </div>
        </div>

        <div className="other-products-container">
          <h3>You may also like</h3>
          {currentProduct.others.map((otherProduct, index) => (
            <div className="new-item-container" key={index}>
              <img
                src={
                  isMobile
                    ? otherProduct.image.mobile
                    : isTablet
                    ? otherProduct.image.tablet
                    : otherProduct.image.desktop
                }
                style={{gridArea: index === 0 ? "firstImg" : index === 1 ? "thirdImg" : "secondImg"}}
              />
              <h3>{otherProduct.name}</h3>
              <button>see product</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;


/*{Object.keys(currentProduct.gallery).map((key, index) => (
              <img
                key={key}
                src={
                  isMobile
                    ? currentProduct.gallery[key].mobile
                    : isTablet
                    ? currentProduct.gallery[key].tablet
                    : currentProduct.gallery[key].desktop
                }
                alt={`Gallery Image ${key}`}
                style={{
                  width: index < 2 ? "40%" : "50%",
                  order: index === 0 ? "1" : index === 1 ? "3" : "2",
                  alignSelf: "start",
                  justifySelf: "start",
                }}
              />
            ))} */