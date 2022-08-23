import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";
import SigninFooter from "../../components/signin_footer/SigninFooter";

const Account = () => {
  return (
    <div className="CreateAccount">
      <div className="top">
        <Link to="/" className="image">
          <img
            style={{ width: "100%" }}
            id="logo"
            src="https://file.liga.net/images/general/2020/09/09/20200909150701-7913.jpg?v=1599656982"
            alt=""
          />
        </Link>
        <div className="wrap">
          <form action="">
            <h1>Create account</h1>
            <p>Your name</p>
            <input
              type="text"
              required
              autoFocus
              placeholder="First and last name"
            />
            <p>Mobile number or email</p>
            <input type="text" required />
            <p>Password</p>
            <input
              type="password"
              minLength="6"
              required
              placeholder="At least 6 characters"
            />
            <span>
              {" "}
              <BsInfoLg
                style={{ color: "#4188C1", fontSize: 12, marginBottom: -1 }}
              />{" "}
              Passwords must be at least 6 characters.
            </span>
            <p>Re-enter password</p>
            <input type="password" required minLength="6" />
            <button>Continue</button>
            <span>
              By creating an account, you agree to Amazon's{" "}
              <Link to="/">Conditions of Use</Link> and{" "}
              <Link to="/">Privacy Notice</Link>
            </span>
          </form>

          <h2>
            Already have an account?{" "}
            <Link to="/signin">
              Sign-In{" "}
              <MdArrowRight
                style={{
                  fontSize: 18,
                  marginBottom: -5,
                  marginLeft: -7,
                }}
              />
            </Link>
            <br />
            Buying for work?{" "}
            <Link to="/">
              Create a free business account{" "}
              <MdArrowRight
                style={{
                  fontSize: 18,
                  marginBottom: -5,
                  marginLeft: -7,
                }}
              />
            </Link>
          </h2>
        </div>
      </div>
      <div className="shadow"></div>

      <SigninFooter />
    </div>
  );
};

export default Account;
