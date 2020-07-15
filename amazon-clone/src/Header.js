import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon"
                />
            </Link>

            <input type="text" className="header__searchinput"/>
            



        
        </div>
    )
}

export default Header
