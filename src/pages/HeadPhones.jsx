import "../styles/headphones.css";

import Allproducts from "../../products.json";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const headphones = Allproducts.products.filter((product) =>
  product.slug.includes("headphones")
);

function HeadPhones() {
  const isMobile = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 989px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 990px)",
  });

  return (
    <div className="headphone">
      <div className="headphones-wrapper">
        <div className="page-name-container">
          <h1>Headphones</h1>
        </div>

        <div className="category-products-container">
          <div className="product-container">
            {headphones.map((headphone, index) => (
              <div className="product" key={index}>
                <img
                  src={
                    isMobile
                      ? headphone.categoryImage.mobile
                      : isTablet
                      ? headphone.categoryImage.tablet
                      : headphone.categoryImage.desktop
                  }
                  style={{
                    order: isDesktop ? (index % 2 === 0 ? 1 : 2) : "",
                  }}
                />

                <div
                  className="product-details"
                  style={{
                    order: isDesktop ? (index % 2 === 0 ? 2 : 1) : "",
                    paddingLeft: isDesktop
                      ? index % 2 === 0
                        ? "5em"
                        : "0em"
                      : "",
                  }}
                >
                  <h4>New Product</h4>
                  <h3>{headphone.name}</h3>
                  <p>{headphone.description}</p>
                  <Link to={`${headphone.slug}`}>
                    <button>see product</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadPhones;
