import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Svg4 from "./Svg4"

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
        <Link to="/masca1">
          <div className="_1u8sp">
            <p className="p1">Contact</p>
          </div>
        </Link>
      </div>

      <Link className="linc1" to="/">
        <div className="container">
          <p className="font_4">VISAGE</p>
        </div>
      </Link>

    

      <div className="header__nav">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <SearchIcon className="searchButton" />
        <i class="fa fa-search"></i>
      </div>
        <Link to={!user && "/login"} className="header__link">

        <img  className="logo7" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="" />
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
               {user ? user.email : ""}
            </span>
            <span className="header__optionLineTwo">
              {user ? "" : ""}
            </span>
          </div>
        </Link>

        

        

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <div className="header__optionLineOne">
           <img className="logo7" src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" alt="" />
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
