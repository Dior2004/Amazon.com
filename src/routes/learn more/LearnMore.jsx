import React from "react";
import "./LearnMore.css";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="learn_more">
      <h1>Proceed to Checkout</h1>
      <p>
        After you've reviewed the items in your Shopping Cart, proceed to
        checkout to complete your order.
      </p>
      <div className="wrap">
        To proceed to checkout:
        <ol>
          <li>
            <span>
              Select <b>Checkout Fresh Cart</b> for Amazon Fresh items or{" "}
              <b>Proceed to Checkout</b> for other items.
            </span>
            <p>
              <b>Note:</b> If you place an order for an item sold by Amazon with
              a credit card, we won't charge you until the order enters the
              shipping process. If you place an order from one of our
              third-party sellers, the seller may charge your card at the time
              of purchase.
            </p>
          </li>
          <li>
            <span>
              If prompted, sign in to your account or create a new account if
              this is your first order.
            </span>
          </li>
          <li>
            <span>Enter a shipping address.</span>
          </li>
          <li>
            <span>Choose a shipping method.</span>
            <p>
              <b>Note:</b> If there's more than one item in your order, you'll
              have the option to group your items into as few shipments as
              possible, or to ship items as they become available {"("}at an
              additional cost
              {")"}.
            </p>
          </li>
          <li>
            <span>Enter your payment information.</span>
          </li>
          <li>
            <span>
              Review your order details. Make sure you've applied any gift cards
              or promotional codes you want to use on your order.
            </span>
          </li>
          <li>
            <span>
              Select <b>Place your order</b>.
            </span>
          </li>
        </ol>
        To review or change your order before it enters the shipping process, go
        to <Link to="/signin">Your Orders</Link> .
      </div>
    </div>
  );
};

export default LearnMore;
