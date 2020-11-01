import React from "react";
import "./Order.css";
import ProductRating from "./ProductRating";
import moment from "moment";

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <div className="order-head">
        <div className="order-id">
          <h3>Order : {order.id}</h3>
        </div>

        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      </div>
      <span className="section-separator" />
      <div className="order-items">
        {order.data.basket?.map((item) => (
          <div className="order-item">
            <img src={item.image} alt="" />
            <div className="product-info">
              <h3>{item.title}</h3>
              <h4>${item.price}</h4>
              <ProductRating rating={item.rating} />
            </div>
          </div>
        ))}
      </div>
      <span className="section-separator" />
      <div className="total">
        <h5>Total : ${order.data.amount / 100}</h5>
      </div>
    </div>
  );
}

export default Order;
