import "../styles/earphones.css";
import ProductsCategories from "../components/ProductsCategories";
import Allproducts from "../../products.json";
import { useMediaQuery } from "react-responsive";

const earphones = Allproducts.products.filter((product) =>
  product.slug.includes("earphones")
);

function Earphones() {
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
    <div className="earphones">
      <div className="earphones-wrapper">
        <div className="page-name-container">
          <h1>Earphones</h1>
        </div>

        <div className="category-products-container">
          <div className="product-container">
            {earphones.map((earphone, index) => (
              <div className="product" key={index}>
                <img
                  src={
                    isMobile
                      ? earphone.categoryImage.mobile
                      : isTablet
                      ? earphone.categoryImage.tablet
                      : earphone.categoryImage.desktop
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
                  <h3>{earphone.name}</h3>
                  <p>{earphone.description}</p>
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
  )
}

export default Earphones
