import React from "react";
import "./Home.css";
import Product from "./Product";

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
            key={48792349872035}
            id={48792349872035}
            title="Product Title"
            price={19.999}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3.5}
          ></Product>

          <Product
            key={48792349872036}
            id={48792349872036}
            title="Product Title"
            price={2999.9999}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          ></Product>
        </div>

        <div className="home__row"></div>

        <div className="home__row">
          {/* Product */}
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
