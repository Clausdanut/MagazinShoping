import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";



function Header() {
    return (
        
        <div className="header">
            <Link to="./" style={{textDecoration: "none"}}>
            
            </Link>
            <div className="header-logo">
    <StorefrontIcon className="header-logoImage" fontSize="large"/>
    <h2 className="header-logoTitle">eShop</h2>
    </div>
    <div className="header-search">
      <input type="text" className="header-searchInput"/>
      <SearchIcon className="header-searchIcon"/>
    </div>

    <div className="header-nav">
       <div className="nav-item">
        <span className="navitemLineOne">Hello Guess</span>
        <span className="nav-itemLineTwo">Sign In</span>
       </div>

       <div className="nav-item">
       <span className="nav-itemLineOne">Your</span>
        <span className="nav-itemLineTwo">Shop</span>
       </div>



       <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav-itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav-itemLineTwo nav-basketCount">0</span>
          </div>
        </Link>

       
    </div>
        </div>
    ) 
    
}

export default Header