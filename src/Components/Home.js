import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
            <Product 
            title='Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Grey (4th Generation)' 
            price={1142} 
            image="https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UY327_QL65_.jpg"
            rating={4}/>
            
            <Product 
            id="1654321" 
            title="Apple iPad Pro (11-inch, Wi-Fi + Cellular, 1TB) - Silver (1st Generation)"
            price={1188}
            image="https://m.media-amazon.com/images/I/512SnKuHszL._AC_UY327_QL65_.jpg"
            rating={4}
            />
        </div>
        <div className="home_row">
            <Product
           id="215654974" 
           title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
           price={1200.000} 
           image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY327_FMwebp_QL65_.jpg"
           rating={5}
           />
            
            <Product 
            id="4212200" 
            title="New Apple iPhone 12 (64GB) - Black"
            price={700}
            image="https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4} 
            />
            
            <Product
            id="2545215" 
            title="Apple iPhone 11 Pro Max (256GB) - Midnight Green"
            price={720}
            image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3} 
            />
        </div>
        <div className="home_row">
            <Product 
            id=   "52854715"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1200.00}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
            />
        </div>

      </div>
    </div>
  );
}

export default Home;



/* id= ""  
title=""
price={}
image=""
rating={} */