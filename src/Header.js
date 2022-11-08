import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="links">
        <Link to="/">
          <div className="_1u8sp">
            <p className="p1">Shop</p>
          </div>
        </Link>
        <Link to="/">
          <div className="_1u8sp">
            <p className="p1">FAQ</p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="_1u8sp">
            <p className="p1">Contact</p>
          </div>
        </Link>
      </div>

      <Link to="/">
        <div className="container">
          <p className="font_4">VISAGE</p>
        </div>
      </Link>

      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <SearchIcon className="searchButton" />
        <i class="fa fa-search"></i>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <div className="header__optionLineOne">
              <ShoppingBasketIcon />
            </div>
            <div className="header__optionLineTwo">
              <span className="header__basketCount">{basket?.length}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
