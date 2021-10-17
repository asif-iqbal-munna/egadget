import React from "react";
import Header from "../Header/Header";
import HeroSlider from "../HeroSlider/HeroSlider";
import ProductsTab from "../Products/ProductsTab";

const Home = ({ addToCart }) => {
  console.log();
  return (
    <div>
      <Header />
      <HeroSlider />
      <ProductsTab addToCart={addToCart} />
    </div>
  );
};

export default Home;
