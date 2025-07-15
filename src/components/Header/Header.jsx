import React from "react";
import "./Header.css";
import crowdnightLogo from "../../assets/crowdnight-logo.png";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="bg-shadow"></div>
        <div className="nav-buttons">
          <a href="#home" className="logo">
            <img src={crowdnightLogo} alt="crowdnight-logo" />
          </a>
          <a href="#just-grow" className="nav-button games">
            GAMES
          </a>
          <a href="#about-us" className="nav-button about-us">
            ABOUT US
          </a>
          <a href="#contact" className="nav-button contact">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}
