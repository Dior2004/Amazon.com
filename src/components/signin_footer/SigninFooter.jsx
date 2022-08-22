import React from "react";
import "./SigninFooter.css";
import { footerCopyrights } from "../../static/footer_data";
import { Link } from "react-router-dom";

const SigninFooter = () => {
  return (
    <div className="SigninFooter">
      <ul>
        <Link to="/">Conditions of Use</Link>
        <Link to="/">Privacy Notice</Link>
        <Link to="/">Help</Link>
      </ul>
      <span>{footerCopyrights.copyright}</span>
    </div>
  );
};

export default SigninFooter;
