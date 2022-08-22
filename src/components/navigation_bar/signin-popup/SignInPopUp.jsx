import React from "react";
import { Link } from "react-router-dom";
import "./SignInPopUp.css";
import { yourListsYourAccounts } from "./YourListsAndYourAccounts";

const SignInPopUp = () => {
  return (
    <div className="SignInPopUp">
      <Link style={{ outline: "none" }} to="/signin">
        <button>Sign in</button>
      </Link>
      <span>
        New customer? <Link to="/account">Start here.</Link>
      </span>
      <div className="your_lists_and_your_accounts">
        {yourListsYourAccounts.map((e, index) => {
          return (
            <ul key={index}>
              <h4>{e.title}</h4>
              {e.links.map((i, id) => {
                return (
                  <Link key={id} to="/">
                    {i}
                  </Link>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default SignInPopUp;
