import React from "react";
import "./Home.css";
import Product from "./Product";
import uuid from "uuid";

const productsList = [
  {
    id: 1,
    title: "Echo Dot (4th generation)",
    price: 59.99,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/51fsVTWWlPL._AC_SX184_.jpg",
    rating: 3.5,
  },
  {
    id: 2,
    title: "Kindle Paperwhite",
    price: 129.0,
    image: "https://m.media-amazon.com/images/I/51piFlFC5nL._AC_UY218_.jpg",
    rating: 4,
  },
  {
    id: 3,
    title: "New Apple iPhone 12 Pro Max (128 Go) - Pacific Blue",
    price: 1259.99,
    image: "https://m.media-amazon.com/images/I/71CaXdX4AJL._AC_UL320_.jpg",
    rating: 5,
  },
  {
    id: 4,
    title: "Product Xiaomi Mi Band 4",
    price: 39.0,
    image:
      "https://images.frandroid.com/wp-content/uploads/2020/07/mi-band-5.jpg",
    rating: 4.5,
  },
  {
    id: 5,
    title: "Dyson V1 Absolute, Blue, size L",
    price: 1018.9,
    image: "https://m.media-amazon.com/images/I/51T-zO0g+xL._AC_UL320_.jpg",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Kitchen Aid 5KSM125EOB Artisan, Black Onyx, 4.8L 300W",
    price: 719.0,
    image: "https://m.media-amazon.com/images/I/61qeWNX3rIL._AC_UL320_.jpg",
    rating: 4.5,
  },
  {
    id: 7,
    title: "LEGO Technic 42122 Jeep Wrangler Rubicon",
    price: 46.99,
    image: "https://m.media-amazon.com/images/I/912OtJ+tgmL._AC_UL320_.jpg",
    rating: 4,
  },
  {
    id: 8,
    title: "Harry Potter Hardcover Boxed Set: Books 1-7",
    price: 132.99,
    image: "https://m.media-amazon.com/images/I/91TfTh2kjNL._AC_UL320_.jpg",
    rating: 4,
  },
  {
    id: 9,
    title:
      "Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB",
    price: 499,
    image: "https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UY218_.jpg",
    rating: 5,
  },
];

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/CurrencyConverter/2020/AMZ_Associates_ACC_Banner_Evergreen_1500x600_v2._CB415565312_.jpg"
        alt="Amazon Home page background image"
      />

      <div className="home__productContainer">
        {productsList.map((item) => (
          <Product
            key={uuid()}
            id={item.id}
            title={item.title}
            price={item.price.toFixed(2)}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
