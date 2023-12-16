import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { logo } from "../../assets";
import { UserContext } from "../../context/UserContext";

import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  console.log("Current User", currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN In
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
