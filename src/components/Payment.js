import React, { useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../utilities/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Button from "react-bootstrap/Button";
import DeliveryAddress from "./DeliveryAddress";
import NewDeliveryAddress from "./NewDeliveryAddress";

function Payment() {
  const [{ basket, user, addresses }, dispatch] = useStateValue();
  console.log(addresses);
  return (
    <div className="payment">
      <div className="payment-container">
        {/* Payment Section - delivery address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3> Delivery Address</h3>
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
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item}
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
          <div className="payment-details">{/* Stripe magic will go */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
