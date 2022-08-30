import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { currentlyViewedItems } from "./currentlyViewedItems";

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="cart_wrapper">
        <div className="no_purchase_banner">
          <img
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            alt="no items in the cart"
          />
          <div className="signin_to_ur_account">
            <h2>Your Amazon Cart is empty</h2>
            <Link to="/shopnow">Shop today's deals</Link>
            <div className="btns">
              <Link to="/signin">
                <button className="signing_in_btn">
                  Sign in to your account
                </button>
              </Link>
              <Link to="/account">
                <button className="signing_up_btn">Sign up now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="chosen_items"></div>

        <span>
          <p>
            The price and availability of items at Amazon.com are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item's most recent price.{" "}
            <Link to="/learnmore">Learn More.</Link>
          </p>
          <p>
            Do you have a gift card or promotional code? We'll ask you to enter
            your claim code when it's time to pay.
          </p>
        </span>
      </div>

      <ul className="currently_viewed_items">
        Your recently viewed items
        {currentlyViewedItems.map((i) => {
          return (
            <li key={i.id}>
              <img src={i.imgLink} alt="img" />
              <div className="info">
                <Link to="/">{i.title}</Link>
                <p>{i.author}</p>
                <span>{i.type}</span>
                <p className="price">{i.price}</p>
                <button className={i.btn ? "other-options" : ""}>
                  <Link to="/">{i.buttonTitle}</Link>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
