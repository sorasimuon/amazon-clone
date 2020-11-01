import React from "react";
import "./Home.css";
import Product from "./Product";
import uuid from "uuid";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            key={uuid()}
            id={48792349872035}
            title="The lean Startup"
            price={19.9}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3.5}
          ></Product>

          <Product
            key={uuid()}
            id={48792349872036}
            title="Product Xiaomi Mi Band 4"
            price={39.9}
            image="https://images.frandroid.com/wp-content/uploads/2020/07/mi-band-5.jpg"
            rating={4}
          ></Product>
        </div>

        <div className="home__row">
          <Product
            key={uuid()}
            id={48792349872035}
            title="The lean Startup"
            price={19.9}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3.5}
          ></Product>

          <Product
            key={uuid()}
            id={48792349872036}
            title="Product Xiaomi Mi Band 4"
            price={39.9}
            image="https://images.frandroid.com/wp-content/uploads/2020/07/mi-band-5.jpg"
            rating={4}
          ></Product>
          <Product
            key={uuid()}
            id={48792349872036}
            title="Apple iPhone 11 Pro Max 256Go - Space Grey"
            price={979.9}
            image="https://images-na.ssl-images-amazon.com/images/I/81-BaXX9stL._AC_SL1500_.jpg"
            rating={4}
          ></Product>
        </div>

        <div className="home__row">
          <Product
            key={uuid()}
            id={48792349872035}
            title="The lean Startup"
            price={19.9}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3.5}
          ></Product>

          <Product
            key={uuid()}
            id={48792349872036}
            title="Product Xiaomi Mi Band 4"
            price={39.9}
            image="https://images.frandroid.com/wp-content/uploads/2020/07/mi-band-5.jpg"
            rating={4}
          ></Product>
          <Product
            key={uuid()}
            id={48792349872035}
            title="The lean Startup"
            price={19.9}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3.5}
          ></Product>

          <Product
            key={uuid()}
            id={48792349872036}
            title="Product Xiaomi Mi Band 4"
            price={39.9}
            image="https://images.frandroid.com/wp-content/uploads/2020/07/mi-band-5.jpg"
            rating={4}
          ></Product>
        </div>

        <div className="home__row">
          <Product
            key={uuid()}
            id={48792349872036}
            title="Product Xiaomi Mi Band 4"
            price={39.9}
            image="https://images.frandroid.com/wp-content/uploads/2020/07/mi-band-5.jpg"
            rating={4}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
