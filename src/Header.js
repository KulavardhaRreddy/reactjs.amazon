import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
      <nav className="header">
          {/* now i,m creating amazon logo on left side on top */}
        <Link to="/">
           <img 
           className="header__logo" src="https://1000logos.net/wp-content/uploads/2016/10/Colors-Amazon-Logo.jpg" 
           alt=""
           />
        </Link>

           {/* now i'm creating search box rigt side of the amazon symbol */}
           <div className="header__search">
              <input type="text" className="header__searchInput"/>
              <SearchIcon className="header__searchIcon" />
           </div>

           {/*noe i'm going to create 4 links rightside of the search icon */}
           <div className="header__nav">
              {/*1st link */}
              <Link to="/login" className="header__link">
                 <div className="header__option">
                 <span className="header__optionLineOne">Hello Qazi</span>
                 <span className="header__optionLineTwo">Sign in</span>
                 </div>
              </Link>

              {/*2nd link */}
              <Link to="/" className="header__link">
                 <div className="header__option">
                 <span className="header__optionLineOne">Return</span>
                 <span className="header__optionLineTwo">& Orders</span>
                 </div>
              </Link>

              {/*3rd link */}
              <Link to="/" className="header__link">
                 <div className="header__option">
                 <span className="header__optionLineOne">Your</span>
                 <span className="header__optionLineTwo">Prime</span>
                 </div>
              </Link>

              {/*4th link */}
              <Link to="checkout" className="header__link">
                  <div className="header__optionBasket">
                    {/* shopping basket icon */}
                    <ShoppingBasketIcon />
                    {/* Number of items in the basket */}
                    <spam className="header__optionLineTwo header__basketCount">0</spam>
                  </div>
              </Link>
           </div>
        </nav>
    );
}

export default Header
