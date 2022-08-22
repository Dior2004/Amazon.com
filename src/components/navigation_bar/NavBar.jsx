import { React } from "react";
import "./NavBar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SignInPopUp from "./signin-popup/SignInPopUp";

const NavBar = () => {
  const location = useLocation();

  // const [signinBtn, setSigninBtn] = useState(false);

  return location.pathname === "/login" ||
    location.pathname === "/signin" ||
    location.pathname === "/account" ? (
    <></>
  ) : (
    <>
      <nav>
        <div className="image">
          <Link to="/">
            <img
              width="103px"
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="deliver">
          <i>
            <HiOutlineLocationMarker />
          </i>
          <span>
            Deliver to
            <h2> Uzbekistan</h2>
          </span>
        </div>
        <form className="serach_area">
          <div className="select">
            <span>All</span>
            <i style={{ transform: "translateY(3px)" }}>
              <IoMdArrowDropdown />
            </i>
          </div>
          <input type="text" required />
          <button>
            <i>
              <GoSearch />
            </i>
          </button>
        </form>
        <div className="language">
          <img
            style={{ width: 25, height: 17, marginBottom: 2 }}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlIRDluemA2h0BXML3uCo1147SsKFZvXu-zVQMrZM_A&s"
            }
            alt="flag"
          />
          <i style={{ transform: "translateY(4px)" }}>
            <IoMdArrowDropdown />
          </i>
        </div>
        <div style={{ position: "relative" }}>
          <Link to="/signin">
            <div className="sign_in">
              <span>
                Hello, Sign in
                <h2>
                  Account & Lists
                  <i>
                    <IoMdArrowDropdown />
                  </i>
                </h2>
              </span>
            </div>
          </Link>
          <SignInPopUp />
        </div>
        <div className="returns">
          <span>
            Returns
            <h2>
              & Others
              <i>
                <IoMdArrowDropdown />
              </i>
            </h2>
          </span>
        </div>
        <div className="cart">
          <i>
            <FaShoppingCart />
          </i>
          <p>Cart</p>
        </div>
      </nav>

      <ul className="navtools">
        <li>
          <div className="icon">
            <FaBars />
          </div>
          All
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </>
  );
};

export default NavBar;
