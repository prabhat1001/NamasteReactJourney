import React from 'react'
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-comp">
      <div className="header-div">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="logo" />
        </div>
        <ul className="nav-cont">
          <li>Home</li>
          <li>About</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header