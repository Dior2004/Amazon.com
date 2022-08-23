import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-page">
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
    </div>
  );
};

export default Cart;
