import React from "react";
import "./Footer.css";
import FooterNawBar from "./footer_navbar/FooterNawBar";
import { VscGlobe } from "react-icons/vsc";
import { FaSort } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import {
  footerData,
  footerBottomData,
  footerCopyrights,
} from "../../static/footer_data";

const Footer = () => {
  const location = useLocation();
  return location.pathname === "/login" ||
    location.pathname === "/signin" ||
    location.pathname === "/account" ||
    location.pathname === "/learnmore" ? (
    <></>
  ) : (
    <div className="footer_wrap">
      <footer>
        <a href="#top">Back to top</a>

        <div className="ul_sect">
          <ul>
            {footerData.map((e, index) => {
              return (
                <li key={index}>
                  <h1>{e.title}</h1>
                  {e.children.map((i, id) => {
                    return (
                      <span key={id}>
                        <Link to="/falselink">{i}</Link>
                      </span>
                    );
                  })}
                </li>
              );
            })}
          </ul>

          <div className="button_sect">
            <div className="wrap">
              <Link to="/">
                <img
                  width="76px"
                  src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                  alt="logo"
                />
              </Link>
              <div className="btns">
                <div className="btn one">
                  <i className="globe">
                    <VscGlobe />
                  </i>
                  <span>English</span>
                  <div className="icon">
                    <FaSort />
                  </div>
                </div>

                {/* <div className="loader_wrap">
                  <div className="loader"></div>
                </div> */}

                <Link to="/falselink">
                  <div className="btn two">
                    <h6>$</h6>
                    <span>USD - U.S. Dollar</span>
                  </div>
                </Link>

                <Link to="/falselink">
                  <div className="btn three">
                    <img
                      style={{ width: 20, height: 13 }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlIRDluemA2h0BXML3uCo1147SsKFZvXu-zVQMrZM_A&s"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <FooterNawBar footerbottom={footerBottomData} />
      </footer>
      <ul className="copyright">
        {footerCopyrights.links.map((links, id) => {
          return (
            <Link key={id} to="/falselink">
              {links.title}
            </Link>
          );
        })}
        <span>{footerCopyrights.copyright}</span>
      </ul>
    </div>
  );
};

export default Footer;
