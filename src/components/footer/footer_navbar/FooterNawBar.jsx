import React from "react";
import "./Footer_navbar.css";
import { Link } from "react-router-dom";

const FooterNawBar = ({ footerbottom }) => {
  return (
    <div className="footer_navbar_links">
      <div className="wrapper">
        {footerbottom.map((e, index) => {
          return (
            <div className="column" key={index}>
              {e.children.map((link, id) => {
                return (
                  <Link key={id} to="/">
                    <p>{link.title}</p>
                    {link.child}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNawBar;
