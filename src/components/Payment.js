import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Payment.css";
import { useStateValue } from "../utilities/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import DeliveryAddress from "./DeliveryAddress";
import NewDeliveryAddress from "./NewDeliveryAddress";
import { getBasketTotal } from "../utilities/reducer";
import uuid from "react-uuid";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import Button from "react-bootstrap/Button";
import axios from "../utilities/axios";
import { db } from "../firebase";

function Payment() {
  const [{ basket, user, addresses }, dispatch] = useStateValue();

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuffs
    event.preventDefault();
    console.log("Start the payment");
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the cardElements
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        {/* Payment Section - delivery address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address-section">
            <div className="payment-address-section-left">
              {addresses.map((item) => (
                <DeliveryAddress
                  key={item}
                  street={item?.street}
                  postalCode={item.postalCode}
                  city={item.city}
                  country={item.city}
                />
              ))}
            </div>
            <div className="payment-address-section-right">
              <NewDeliveryAddress />
            </div>
          </div>
        </div>

        {/* Payment Section - review Items */}
        <div className="payment-section">
          <div className="payment-title">
            <h3> Review Items and Delivery</h3>
            <h4>{basket.length} item(s) </h4>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                key={uuid()}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Payment Section - Payment method */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3> Order Total: {value} </h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
