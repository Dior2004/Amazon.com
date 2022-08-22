import React from "react";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <Products />
    </div>
  );
};

export default Home;
