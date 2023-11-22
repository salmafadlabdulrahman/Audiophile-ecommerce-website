import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../helper";
import "../styles/checkout.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cashOnDeliveryIcon from "/assets/checkout/icon-cash-on-delivery.svg";

function Checkout() {
  const cartProducts = fetchData("products") || [];
  const navigate = useNavigate();
  const [total, setTotal] = useState(
    cartProducts.reduce((acc, cur) => acc + cur.counter * cur.price, 0)
  );
  const [vat, setVat] = useState(
    cartProducts.reduce((acc, cur) => acc + cur.counter * cur.price, 0) / 5
  );
  const [emoneyMethod, setEmoneyMethod] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Field Cannot be empty"),
    email: yup.string().email().required("Field Cannot be empty"),
    phoneNumber: yup
      .number({ positive: "Number must be positive" })
      .integer("Number must be an integer")
      .min(18, "Number must be at least 18")
      .required("Field Cannot be empty"),
    address: yup.string().required("Field Cannot be empty"),
    zipCode: yup
      .number()
      .positive()
      .integer()
      .min(7)
      .required("Field Cannot be empty"),
    city: yup.string().required("Field Cannot be empty"),
    country: yup.string().required("Field Cannot be empty"),
    MoneyNumber: yup.number().positive().required("Field Cannot be empty"),
    MoneyPin: yup.number().positive().required("Field Cannot be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="checkout">
      <div className="checkout-container">
        <Link className="get-back">
          <button onClick={() => navigate(-1)}>Go Back</button>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="checkout-wrapper">
            <div className="checkout-form-container">
              <h2>Checkout</h2>

              <div className="billing-section">
                <h3>Billing Details</h3>
                <div className="billing-section-fields">
                  <div className="name-field section">
                    <label
                      htmlFor="name"
                      style={{ color: errors.name ? "#cd2c2c" : "#000" }}
                    >
                      Name
                    </label>
                    <p className="error-msg">{errors.name?.message}</p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Alexei Ward"
                      {...register("name")}
                      style={{
                        border: errors.name
                          ? "1px solid #cd2c2c"
                          : "1px solid #cfcfcf",
                      }}
                    />
                  </div>
                  <div className="email-field section">
                    <label
                      htmlFor="email"
                      style={{ color: errors.email ? "#cd2c2c" : "#000" }}
                    >
                      Email Address
                    </label>
                    <p className="error-msg">{errors.email?.message}</p>
                    <input
                      type="text"
                      name="email"
                      placeholder="alexei@mail.com"
                      {...register("email")}
                      style={{
                        border: errors.email
                          ? "1px solid #cd2c2c"
                          : "1px solid #cfcfcf",
                      }}
                    />
                  </div>
                </div>
                <div className="phone-number-field section">
                  <label
                    htmlFor="number"
                    style={{ color: errors.phoneNumber ? "#cd2c2c" : "#000" }}
                  >
                    Phone Number
                  </label>
                  <p className="error-msg">{errors.phoneNumber?.message}</p>
                  <input
                    type="number"
                    name="number"
                    placeholder="+1 202-555-0136"
                    {...register("number")}
                    style={{
                      border: errors.phoneNumber
                        ? "1px solid #cd2c2c"
                        : "1px solid #cfcfcf",
                    }}
                  />
                </div>
              </div>

              <div className="shipping-section section">
                <h3>Shipping Info</h3>

                <label
                  htmlFor="address"
                  style={{ color: errors.address ? "#cd2c2c" : "#000" }}
                >
                  Your Address
                </label>
                <p className="error-msg" style={{ top: "60px" }}>
                  {errors.address?.message}
                </p>
                <input
                  type="address"
                  name="address"
                  placeholder="1137 Williams Avenue"
                  {...register("address")}
                  style={{
                    border: errors.address
                      ? "1px solid #cd2c2c"
                      : "1px solid #cfcfcf",
                  }}
                />

                <div className="city-info-field">
                  <div className="zip-code-field section">
                    <label
                      htmlFor="code"
                      style={{ color: errors.zipCode ? "#cd2c2c" : "#000" }}
                    >
                      ZIP Code
                    </label>
                    <p className="error-msg">{errors.zipCode?.message}</p>
                    <input
                      type="number"
                      name="code"
                      placeholder="10001"
                      {...register("code")}
                      style={{
                        border: errors.zipCode
                          ? "1px solid #cd2c2c"
                          : "1px solid #cfcfcf",
                      }}
                    />
                  </div>

                  <div className="city-field section">
                    <label
                      htmlFor="city"
                      style={{ color: errors.city ? "#cd2c2c" : "#000" }}
                    >
                      City
                    </label>
                    <p className="error-msg">{errors.city?.message}</p>
                    <input
                      type="text"
                      name="city"
                      placeholder="New York"
                      {...register("city")}
                      style={{
                        border: errors.city
                          ? "1px solid #cd2c2c"
                          : "1px solid #cfcfcf",
                      }}
                    />
                  </div>
                </div>

                <div className="country-field section">
                  <label
                    htmlFor="country"
                    style={{ color: errors.country ? "#cd2c2c" : "#000" }}
                  >
                    Country
                  </label>
                  <p className="error-msg">{errors.country?.message}</p>
                  <input
                    type="text"
                    name="country"
                    placeholder="United States"
                    {...register("country")}
                    style={{
                      border: errors.country
                        ? "1px solid #cd2c2c"
                        : "1px solid #cfcfcf",
                    }}
                  />
                </div>
              </div>

              <div className="payment-section">
                <h3>Payment Details</h3>

                <div className="payement-methods-wrapper">
                  <h4>Payment Method</h4>

                  <div className="payment-input-field">
                    <div className="e-money-input-field">
                      <input
                        type="radio"
                        id="e-Money"
                        checked={emoneyMethod}
                        onChange={() => setEmoneyMethod((prev) => !prev)}
                        style={{
                          border: emoneyMethod
                            ? "1px solid #d87d4a"
                            : "1px solid #cfcfcf",
                        }}
                      />
                      <label htmlFor="e-money">e-Money</label>
                    </div>

                    <div className="cash-input-field">
                      <input
                        type="radio"
                        id="Cash"
                        value="Cash"
                        {...register("eMoneyPin")}
                        checked={!emoneyMethod}
                        onChange={() => setEmoneyMethod((prev) => !prev)}
                      />
                      <label htmlFor="Cash">Cash on Delivery</label>
                    </div>
                  </div>
                </div>

                {emoneyMethod ? (
                  <div className="payment-methods-fields">
                    <div
                      className="money-number-field"
                      style={{ position: "relative" }}
                    >
                      <label
                        htmlFor="number"
                        style={{
                          color: errors.MoneyNumber ? "#cd2c2c" : "#000",
                        }}
                      >
                        e-Money Number
                      </label>
                      <p className="error-msg">{errors.MoneyNumber?.message}</p>
                      <input
                        type="number"
                        name="number"
                        placeholder="238521993"
                        value="e-money"
                        {...register("eMoneyNumber")}
                        style={{
                          border: errors.MoneyNumber
                            ? "1px solid #cd2c2c"
                            : "1px solid #cfcfcf",
                        }}
                      />
                    </div>

                    <div
                      className="money-pin-field"
                      style={{ position: "relative" }}
                    >
                      <label
                        htmlFor="pin"
                        style={{ color: errors.MoneyPin ? "#cd2c2c" : "#000" }}
                      >
                        e-Money PIN
                      </label>
                      <p className="error-msg" style={{top: "6px"}}>{errors.MoneyPin?.message}</p>
                      <input
                        type="number"
                        name="pin"
                        placeholder="6891"
                        style={{
                          border: errors.MoneyPin
                            ? "1px solid #cd2c2c"
                            : "1px solid #cfcfcf",
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="cash-on-delivery">
                    <img src={cashOnDeliveryIcon} />
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="summary-section">
              <h3 className="summary">Summary</h3>
              {cartProducts.map((item, index) => (
                <div className="item-details" key={index}>
                  <div className="item-info-container">
                    <img src={item.cartImage} />
                    <div className="cart-product-info">
                      <span className="cart-product-name">{item.name}</span>
                      <span className="cart-product-price">
                        $ {item.price.toLocaleString()}
                      </span>
                    </div>
                    <span className="item-quantity">x{item.counter}</span>
                  </div>
                </div>
              ))}
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

              <button type="submit">Continue & pay</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
