// Updated Navbar.js
import React from "react";
import indexLogo from "./index-logo.png";

function Navbar({ onNavClick }) {
  return (
    <div className="top-bar">
      <nav className="top-bar-nav navbar navbar-expand-lg navbar">
        <div className="logo">
          <a className="navbar-brand" href="#">
            <img src={indexLogo} alt="logo" />
          </a>
        </div>
        <div className="center">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                onClick={() => onNavClick("Swap")}
              >
                Swap
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => onNavClick("Stake")}
              >
                Stake
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => onNavClick("Withdraw")}
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => onNavClick("Gas")}
              >
                Gas
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
