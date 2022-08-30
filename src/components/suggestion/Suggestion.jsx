import React from "react";
import "./Suggestion.css";
import { Link, useLocation } from "react-router-dom";

const Suggestion = () => {
  const location = useLocation();
  return location.pathname === "/login" ||
    location.pathname === "/signin" ||
    location.pathname === "/account" ||
    location.pathname === "/learnmore" ? (
    <></>
  ) : (
    <div className="signing_in">
      <div className="wrap">
        <p>See personalized recommendations</p>
        <Link style={{ marginBottom: 8 }} to="/signin">
          <button>Sign in</button>
        </Link>
        <span>
          New customer? <Link to="/account">Start here.</Link>
        </span>
      </div>
    </div>
  );
};

export default Suggestion;
