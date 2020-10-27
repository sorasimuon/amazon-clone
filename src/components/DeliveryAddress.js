import React from "react";
import "./DeliveryAddress.css";
import { useStateValue } from "../utilities/StateProvider";

function DeliveryAddress({ key, street, postalCode, city, country }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="deliveryaddress">
      <p>{user?.email}</p>
      <p>{street}</p>
      <p>{postalCode}</p>
      <p>{city}</p>
      <p>{country}</p>
    </div>
  );
}

export default DeliveryAddress;
