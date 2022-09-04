import { React, useState, useEffect } from "react";
import "./navbar_css/NavBar.css";
import "./navbar_css/SignInPopUp.css";
import "./navbar_css/ChosenLanguages.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import {
  yourListsYourAccounts,
  languages,
} from "./YourListsAndYourAccountsPlusLanguages";
import LanguageList from "./LanguageList";

const NavBar = () => {
  const location = useLocation();
  const [signinBtn, setSigninBtn] = useState(false);
  const [langViewBtn, setLangViewBtn] = useState(false);
  const [inputCondition, setInputCondition] = useState(false);
  let [langFlagBtn, setLangFlagBtn] = useState(
    JSON.parse(localStorage.getItem("flag")) || 0
  );

  const [langList, setLangList] = useState(
    JSON.parse(localStorage.getItem("currentLang")) || languages
  );

  const handleChecked = (index) => {
    const newLangArray = langList.map((element) =>
      element.id === index
        ? { ...element, checked: true }
        : { ...element, checked: false }
    );
    setLangList(newLangArray);
  };

  useEffect(() => {
    localStorage.setItem("currentLang", JSON.stringify(langList));
    localStorage.setItem("flag", JSON.stringify(langFlagBtn));
  }, [langList, langFlagBtn]);

  return (
    <div
      style={
        location.pathname === "/login" ||
        location.pathname === "/signin" ||
        location.pathname === "/account" ||
        location.pathname === "/learnmore"
          ? { display: "none" }
          : { width: "100%" }
      }
    >
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
        <form
          className="serach_area"
          style={inputCondition ? { boxShadow: "0px 0px 2px 3px #ff9900" } : {}}
        >
          <div className="select">
            <span>All</span>
            <i style={{ transform: "translateY(3px)" }}>
              <IoMdArrowDropdown />
            </i>
          </div>
          <input
            onFocus={() => {
              setInputCondition(true);
            }}
            type="text"
            required
          />
          <button>
            <i>
              <GoSearch />
            </i>
          </button>
        </form>

        {/* lang btn */}

        <div
          className="language_wrapper"
          onMouseEnter={() => {
            setLangViewBtn(true);
          }}
          onMouseLeave={() => {
            setLangViewBtn(false);
          }}
          style={{ position: "relative" }}
        >
          <Link
            onClick={() => {
              setLangViewBtn(false);
            }}
            to="/falselink"
          >
            <div className="language">
              <img
                style={{ width: 25, height: 17, marginBottom: 2 }}
                src={langList[langFlagBtn].flagUrl}
                alt="flag"
              />
              <i style={{ transform: "translateY(4px)" }}>
                <IoMdArrowDropdown />
              </i>
            </div>
          </Link>

          <div
            style={
              langViewBtn
                ? { transform: "scale(1)" }
                : { transform: "scale(0)" }
            }
            className="list-of-langs"
          >
            <span>
              Change language{" "}
              <Link
                onClick={() => {
                  setLangViewBtn(false);
                }}
                style={{ margin: 5 }}
                to="/falselink"
              >
                Learn More
              </Link>
            </span>
            <LanguageList
              langFlagBtn={langFlagBtn}
              setLangFlagBtn={setLangFlagBtn}
              setLangViewBtn={setLangViewBtn}
              langList={langList}
              handleChecked={handleChecked}
            />
          </div>
        </div>

        {/* signin btn */}

        <div
          onMouseEnter={() => {
            setSigninBtn(true);
          }}
          onMouseLeave={() => {
            setSigninBtn(false);
          }}
          onClick={() => {
            setSigninBtn(false);
          }}
          style={{ position: "relative" }}
        >
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

          <div
            className="SignInPopUp"
            style={
              signinBtn
                ? { transform: "translateX(-50%) scale(1)" }
                : { transform: "scale(0)" }
            }
          >
            <Link
              onClick={() => {
                setSigninBtn(false);
              }}
              style={{ outline: "none" }}
              to="/signin"
            >
              <button>Sign in</button>
            </Link>
            <span>
              New customer?{" "}
              <Link
                onClick={() => {
                  setSigninBtn(false);
                }}
                to="/account"
              >
                Start here.
              </Link>
            </span>
            <div className="your_lists_and_your_accounts">
              {yourListsYourAccounts.map((e, index) => {
                return (
                  <ul key={index}>
                    <h4>{e.title}</h4>
                    {e.links.map((i, id) => {
                      return (
                        <span key={id} style={{ margin: "2px 0" }}>
                          <Link
                            onClick={() => {
                              setSigninBtn(false);
                            }}
                            to="/signin"
                          >
                            {i}
                          </Link>
                        </span>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
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
        <Link to="/cart">
          <div className="cart">
            <i>
              <FaShoppingCart />
            </i>
            <p>Cart</p>
          </div>
        </Link>
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

      <div
        className="dark_mask"
        style={
          signinBtn || langViewBtn || inputCondition
            ? { transform: "scale(1)" }
            : { transform: "scale(0)" }
        }
      ></div>
    </div>
  );
};

export default NavBar;
