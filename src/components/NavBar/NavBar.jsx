import React, { useState } from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState();
  return (
    <nav className="app-navbar">
      <div className="navbar-logo">
        <img src={images.nobglogo} alt="" />
      </div>
      <ul className="navbar-links">
        <li className="nav-items">
          <a href="#home">Home</a>
        </li>
        <li className="nav-items">
          <a href="#about">About</a>
        </li>
        <li className="nav-items">
          <a href="#menu">Menu</a>
        </li>
        <li className="nav-items">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className="login">
          {" "}
          Login In | Regiter
        </a>
      </div>
      <div className="smallScreen">
        <GiHamburgerMenu color="#cc010e" fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && 
        <div className="small-screen_overlay">
          <MdOutlineRestaurantMenu
            color="#cc010e"
            fontSize={27}
            className = "overlay-close"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="navbar-small-screen-links">
            <li className="nav-items">
              <a href="#home">Home</a>
            </li>
            <li className="nav-items">
              <a href="#about">About</a>
            </li>
            <li className="nav-items">
              <a href="#menu">Menu</a>
            </li>
            <li className="nav-items">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      }
      </div>
    </nav>
  );
};

export default NavBar;
