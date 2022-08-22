import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import SigninFooter from "../../components/signin_footer/SigninFooter";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="top">
        <div className="wrap">
          <Link to="/" className="image">
            <img
              style={{ width: "100%" }}
              id="logo"
              src="https://file.liga.net/images/general/2020/09/09/20200909150701-7913.jpg?v=1599656982"
              alt=""
            />
          </Link>
          <form>
            <h1>Sign in</h1>
            <p>Email or mobile phone number</p>
            <input type="email" required autoFocus />
            <button>Continue</button>
            <span>
              By continuing, you agree to Amazon's{" "}
              <Link to="/">Conditions of Use</Link> and{" "}
              <Link to="/">Privacy Notice</Link>
            </span>

            <span className="help">
              <Link to="/">
                <MdArrowRight
                  style={{
                    fontSize: 18,
                    marginBottom: -5,
                    marginLeft: -7,
                    color: "#656565",
                  }}
                />
                Need help?
              </Link>
            </span>
          </form>

          <div className="before_after_span">
            <span>New to Amazon?</span>
          </div>

          <Link style={{ outline: "none" }} to="/account">
            <button>Create your Amazon account</button>
          </Link>
        </div>
      </div>

      <div className="shadow"></div>

      <SigninFooter />
    </div>
  );
};

export default SignIn;
