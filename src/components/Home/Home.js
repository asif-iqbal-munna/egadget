import React from "react";
import useProducts from "../../hooks/useProducts";
import Header from "../Header/Header";
import HeroSlider from "../HeroSlider/HeroSlider";
import Products from "../Products/products";

const Home = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div>
      <Header />
      <HeroSlider />
      <Products />
    </div>
  );
};

export default Home;
