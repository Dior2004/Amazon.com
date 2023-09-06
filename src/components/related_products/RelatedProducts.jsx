import React from "react";
import "./RelatedProducts.css";

const RelatedProducts = ({ productsData }) => {
  return productsData.length ? (
    <div className="RelatedProducts four">
      {productsData.map((e) => {
        return <span key={e.id}>{e.title}</span>;
      })}
    </div>
  ) : (
    <div className="RelatedProducts">nothing</div>
  );
};

export default RelatedProducts;
