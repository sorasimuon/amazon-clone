import React from "react";
import "./ProductRating.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import uuid from "react-uuid";

function ProductRating({ rating }) {
  // Define the number of Stars, HalfStars and BorderStars
  //   console.log("Rating checkout = ", rating);
  let semiScore = 0;
  let starhalficon = null;

  if (rating % 1 > 0) {
    semiScore = 1;
    rating = Math.floor(rating);
    starhalficon = <StarHalfIcon />;
  }

  return (
    <div className="product__rating">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <StarIcon key={uuid()}></StarIcon>
        ))}
      {starhalficon}
      {Array(5 - rating - semiScore)
        .fill()
        .map((_, i) => (
          <StarBorderIcon key={uuid()}></StarBorderIcon>
        ))}
    </div>
  );
}

export default ProductRating;
