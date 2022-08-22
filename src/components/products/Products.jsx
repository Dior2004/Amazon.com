import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { productsData } from "../../static/products_data";

const Products = () => {
  return (
    <div className="products_wrap">
      {productsData.map((i, index) => {
        return i.four ? (
          <div key={index}>
            <div className="product_card">
              <h2>{i.title}</h2>
              <div className="image_wrap four">
                {i.four.map((e, id) => {
                  return (
                    <div className="one_of_four_img" key={id}>
                      <Link to={i.linkRoute}>
                        <img src={e.imageURL} alt={id} />
                      </Link>
                      <span>{e.title}</span>
                    </div>
                  );
                })}
              </div>
              <span>
                <Link to={i.linkRoute}>{i.linkName}</Link>
              </span>
            </div>
          </div>
        ) : (
          <div key={index}>
            <div className="product_card">
              <h2>{i.title}</h2>
              <Link to={i.linkRoute}>
                <div className="image_wrap">
                  <img src={i.imageURL} alt="" />
                </div>
              </Link>
              <span>
                <Link to={i.linkRoute}>{i.linkName}</Link>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
