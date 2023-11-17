import { useParams, Link } from "react-router-dom";
import Allproducts from "../../products.json";
import "../styles/product.css";
import { useMediaQuery } from "react-responsive";

function Product() {
  const params = useParams();
  const isMobile = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 989px)",
  });

  const currentProduct = Allproducts.products.filter(
    (product) => product.slug === params.slug
  )[0];

  const formattedPrice = currentProduct.price.toLocaleString();
  //const paragraphs = currentProduct.description.split('\n');

  return (
    <div className="current-product-container">
      <div className="product-wrapper">
        <Link className="get-back">
          <button>Go Back</button>
        </Link>

        <div className="product-details-container">
          <div className="product">
            <img
              src={
                isMobile
                  ? currentProduct.categoryImage.mobile
                  : isTablet
                  ? currentProduct.categoryImage.tablet
                  : currentProduct.categoryImage.desktop
              }
              alt="earphones"
            />
            {currentProduct.new ? <h4>New Product</h4> : ""}
            <h3>{currentProduct.name}</h3>
            <p>{currentProduct.description}</p>
            <h5>$ {formattedPrice}</h5>
            <div className="counter-wrapper">
              <div className="counter">
                <span className="decrement-btn">-</span>
                <span>1</span>
                <span className="increment-btn">+</span>
              </div>

              <button>Add To cart</button>
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
              {Object.keys(currentProduct.gallery).map((key) => (
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
                />
              ))}
            </div>
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
/*{currentProduct.others.map((otherProduct, index) => (
            <div className="new-item-container" key={index}>
              {otherProduct.image.map((otherImg, index) => (
                <img key={index} src={otherImg.mobile}/>
              ))}
            </div>
          ))} */
