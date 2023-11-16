import { useMediaQuery } from "react-responsive";
import Allproducts from "../../products.json";
import ProductsCategories from "../components/ProductsCategories";

import "../styles/footer.css"
import "../styles/speakers.css"

const speakers = Allproducts.products.filter((product) =>
  product.slug.includes("speaker")
);

function Speakers() {
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
    <div className="speakers">
      <div className="speakers-wrapper">
        <div className="page-name-container">
          <h1>Speakers</h1>
        </div>

        <div className="category-products-container">
          <div className="product-container">
            {speakers.map((speaker, index) => (
              <div className="product" key={index}>
                <img
                  src={
                    isMobile
                      ? speaker.categoryImage.mobile
                      : isTablet
                      ? speaker.categoryImage.tablet
                      : speaker.categoryImage.desktop
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
                  <h3>{speaker.name}</h3>
                  <p>{speaker.description}</p>
                  <button>see product</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="categoreies-container">
          <ProductsCategories />
        </div>
      </div>
    </div>
  );
}

export default Speakers;
