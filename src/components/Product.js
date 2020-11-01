import React from "react";
import "./Product.css";
import { useStateValue } from "../utilities/StateProvider";
import CurrencyFormat from "react-currency-format";
import ProductRating from "./ProductRating";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt=""></img>
      <div className="product__info">
        <p className="product__name">{title}</p>
        <p className="product__price">
          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </p>
        <ProductRating rating={rating} />
      </div>
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
