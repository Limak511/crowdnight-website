import React from "react";
import "../css/HomePage.css";
import justgrowTitle from "../assets/justgrow-title.png";
import steamIcon from "../assets/steam.svg";

export default function HomePage() {
  return (
    <>
      <div className="home">
        <div className="left-block">
          <img src={justgrowTitle} alt="justgrow-title" />
          <p className="title-tag">ROGUELIKE</p>
          <p className="title-tag">ACTION</p>
          <p className="title-tag">INDIE</p>
          <a
            href="https://store.steampowered.com/app/3402540/Just_Grow/"
            target="_blank"
            rel="noreferrer"
            className="steam-button"
          >
            <img src={steamIcon} alt="steam-icon" />
            <p>Wishlist on Steam</p>
          </a>
        </div>
        <div className="right-block"></div>
      </div>
    </>
  );
}
