import React from "react";
import Header from "../Header/Header";
import HeroSlider from "../HeroSlider/HeroSlider";
import ProductsTab from "../Products/ProductsTab";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <ProductsTab />
    </div>
  );
};

export default Home;
