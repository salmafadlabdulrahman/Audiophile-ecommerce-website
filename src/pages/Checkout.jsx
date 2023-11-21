import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../helper";
import "../styles/checkout.css";
import { useState } from "react";

function Checkout() {
  const cartProducts = fetchData("products") || [];
  const navigate = useNavigate();
  const [total, setTotal] = useState(
    cartProducts.reduce((acc, cur) => acc + cur.counter * cur.price, 0)
  );
  const [vat, setVat] = useState(
    cartProducts.reduce((acc, cur) => acc + cur.counter * cur.price, 0) / 5
  );

  return (
    <div className="checkout">
      <div className="checkout-wrapper">
        <Link className="get-back">
          <button onClick={() => navigate(-1)}>Go Back</button>
        </Link>

        <div className="checkout-form-container">
          <h2>Checkout</h2>

          <div className="billing-section section">
            <h3>Billing Details</h3>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Alexei Ward" />

            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" placeholder="alexei@mail.com" />

            <label htmlFor="number">Phone Number</label>
            <input type="number" name="name" placeholder="+1 202-555-0136" />
          </div>

          <div className="shipping-section section">
            <h3>Shipping Info</h3>
            <label htmlFor="address">Your Address</label>
            <input
              type="address"
              name="address"
              placeholder="1137 Williams Avenue"
            />

            <label htmlFor="code">ZIP Code</label>
            <input type="number" name="code" placeholder="10001" />

            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="New York" />

            <label htmlFor="country">Country</label>
            <input type="text" name="country" placeholder="United States" />
          </div>

          <div className="payment-section">
            <h3>Payment Details</h3>
            <h4>Payment Method</h4>

            <div className="e-money-input-field">
              <input type="radio" id="e-Money" value="e-money" />
              <label htmlFor="e-money">e-Money</label>
            </div>

            <div className="cash-input-field">
              <input type="radio" id="Cash" value="Cash" />
              <label htmlFor="Cash">Cash on Delivery</label>
            </div>

            {/*<label htmlFor="number">e-money Number</label>
            <input type="number" name="number" placeholder="238521993" />

            <label htmlFor="pin">e-money PIN</label>
  <input type="number" name="pin" placeholder="6891" />*/}
          </div>
        </div>

        <div className="summary-section">
          <h3 className="summary">Summary</h3>
          {cartProducts.map((item, index) => (
            <div className="item-details" key={index}>
              <div className="product-info-container">
                <img src={item.cartImage} />
                <div className="cart-product-info">
                  <span className="cart-product-name">{item.name}</span>
                  <span className="cart-product-price">
                    $ {item.price.toLocaleString()}
                  </span>
                </div>
                <span className="item-quantity">x{item.counter}</span>
              </div>

              <div className="paying-details">
                <div className="total-sum">
                  <h3>Total</h3>
                  <span>$ {total.toLocaleString()}</span>
                </div>
                <div className="shipping-fees">
                  <h3>Shipping</h3>
                  <span>$ 50</span>
                </div>

                <div className="vat-fees">
                  <h3>Vat (included)</h3>
                  <span>$ {vat.toLocaleString()}</span>
                </div>

                <div className="grand-total">
                  <h3>Grand Total</h3>
                  <span>$ {total + vat + 50}</span>
                </div>
              </div>
            </div>
          ))}
          <button>Continue & pay</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
