import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { logo } from "../../assets";
import { UserContext } from "../../context/UserContext";

import "./navigation.style.scss";
import { signOutfun } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span onClick={signOutfun}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
