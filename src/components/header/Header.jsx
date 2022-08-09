import React , {useState} from "react";
import {MobileNav} from '../mobile-nav/MobileNav'
import { FaBars } from "react-icons/fa";
import './Header.scss'
export const Header = () => {
    const [hidden , setHidden] = useState("hid mobile-nav-container")
    const switchHidden = () => {
        hidden === "hid mobile-nav-container"
        ? setHidden("mobile-nav-container")
        : setHidden("hid mobile-nav-container")
    }
  return (
    <div className="div">
        <div className="header">
      <div className="header-left">
        <div className="logo">Stock Manager</div>
          <div className="dot" />

      </div>
      <div className="header-right">
          <div className="links signup-button">
              <p className="link">Stock</p>
              <p className="link">Items</p>
          </div>
        <div className="mobile-dropdown">
          <FaBars className="fa" onClick={() => switchHidden()} />
        </div>
      </div>

    </div>
    <div className={hidden}>
        <MobileNav />
    </div>
    </div>
  );
};
