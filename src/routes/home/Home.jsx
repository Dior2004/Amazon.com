import React from "react";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import Products from "../../components/products/Products";

const Home = ({ productsData, setRelatedProducts }) => {
  const style = {
    zIndex: 5,
    marginTop: "-380px",
  };

  return (
    <div className="home">
      <Carousel />
      <Products
        style={style}
        productsData={productsData}
        setRelatedProducts={setRelatedProducts}
      />
    </div>
  );
};

export default Home;
