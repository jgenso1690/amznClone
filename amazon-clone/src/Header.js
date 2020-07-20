import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';


function Header() {
  const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon"
                />
            </Link>

            <div className ="header__search">
              <input type="text" className="header__searchinput"/>
              <SearchIcon className="header__searchicon" />
            </div>

            <div className="header__nav">
              <Link to="/login" className="header__link">
                <div className="header__option">
                  <span className="header__optionlineone">Hello</span>
                  <span className="header__optionlinetwo" >Sign In</span>
                </div>

              </Link>

              <Link to="/" className="header__link">
                <div className="header__option">
                  <span className="header__optionlineone" >Return</span>
                  <span className="header__optionlinetwo" >& Orders</span>
                </div>

              </Link>

              <Link to="/" className="header__link">
                <div className="header__option">
                  <span className="header__optionlineone">Your</span>
                  <span className="header__optionlinetwo">Prime</span>
                </div>

              </Link>

              <Link to="/checkout" className="header__link" >
                <div className="header__optionbasket">
                  <ShoppingBasketIcon />
                  <span className="header__optionlinetwo header__basketcount">{basket?.length}</span>
                </div>

              </Link>
            </div>


        
        </div>
    )
}

export default Header
