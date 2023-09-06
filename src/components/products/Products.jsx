import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = ({ productsData, style, setRelatedProducts }) => {
  return (
    <div style={style} className="products_wrap">
      {productsData.map((i, index) => {
        return i.four ? (
          <div key={index}>
            <div className="product_card">
              <h2>{i.title}</h2>
              <div className="image_wrap four">
                {i.four.map((e, id) => {
                  return (
                    <div
                      className="one_of_four_img"
                      key={id}
                      onClick={() => {
                        setRelatedProducts(e.title);
                      }}
                    >
                      <Link to={i.linkRoute}>
                        <img src={e.imageURL} alt={id} />
                      </Link>
                      <span>{e.title}</span>
                    </div>
                  );
                })}
              </div>
              <span>
                <Link
                  onClick={() => {
                    setRelatedProducts(i.title);
                  }}
                  to={i.linkRoute}
                >
                  {i.linkName}
                </Link>
              </span>
            </div>
          </div>
        ) : (
          <div key={index}>
            <div className="product_card">
              <h2>{i.title}</h2>
              <Link style={{ flex: 1 }} to={i.linkRoute}>
                <div
                  className="image_wrap"
                  onClick={() => {
                    setRelatedProducts(i.title);
                  }}
                >
                  <img src={i.imageURL} alt="" />
                </div>
              </Link>
              <span>
                <Link
                  onClick={() => {
                    setRelatedProducts(i.title);
                  }}
                  to={i.linkRoute}
                >
                  {i.linkName}
                </Link>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
