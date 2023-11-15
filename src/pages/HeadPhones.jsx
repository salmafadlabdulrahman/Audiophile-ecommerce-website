import "../styles/headphones.css";

import Allproducts from "../../products.json";
//console.log(Allproducts.products)

//products.map(product => console.log(product))

const headphones = Allproducts.products.filter((product) =>
  product.slug.includes("headphones")
);

function HeadPhones() {
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
                <img src={headphone.categoryImage.mobile} />
                <h4>New Product</h4>
                <h3>{headphone.name}</h3>
                <p>{headphone.description}</p>
                <button>see product</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadPhones;
