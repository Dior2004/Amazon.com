import React from "react";
import RelatedProducts from "../../components/related_products/RelatedProducts";
// import Products from "../../components/products/Products";
import "./SeeMore.css";

const SeeMore = ({ productsData }) => {
  return (
    <div style={{ width: "100%", background: "#fff" }}>
      {/* <Products productsData={productsData} /> */}
      <RelatedProducts productsData={productsData} />
    </div>
  );
};

export default SeeMore;
