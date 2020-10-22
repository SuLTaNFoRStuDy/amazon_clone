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
            id="12321341"
            title="The Learn startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylishing
            Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Blow"
            image="https://images-na.ssl-images-amazon.com/images/I/71BtySVK6kL._AC_SL1500_.jpg"
            price={239.99}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Amazfit Bip Fitness Smartwatch, All-Day Heart Rate and Activity Tracking, Sleep Monitoring, Built-In GPS, 45-Day Battery Life, Bluetooth, Onyx Black"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61b7GRV385L._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa |Twilight Blue with Amazon Smart Plug (Certified for Humans product) "
            price={124.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51tR8KilYoL._AC_.jpg"
          />
          <Product
            id="3254354345"
            title="https://images-na.ssl-images-amazon.com/images/I/51tR8KilYoL._AC_.jpg"
            price={949.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor, 1ms, NVIDIA G-SYNC & FreeSync, QLED (LC49G95TSSNXZA)"
            price={1349.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
