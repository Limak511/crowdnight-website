import React from "react";
import "../css/HomePage.css";
import justgrowTitle from "../assets/justgrow-title.png";
import justgrowImage1 from "../assets/slider-images/justgrow-image-1.png";
import justgrowImage2 from "../assets/slider-images/justgrow-image-2.png";
import justgrowImage3 from "../assets/slider-images/justgrow-image-3.png";
import justgrowImage4 from "../assets/slider-images/justgrow-image-4.png";
import leftArrowIcon from "../assets/left-arrow-icon.svg";
import rightArrowIcon from "../assets/right-arrow-icon.svg";
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
        <div className="right-block">
          <img
            src={justgrowImage3}
            alt="justgrow-image"
            className="justgrow-image-main"
          />
          <div className="image-slider">
            <img
              src={justgrowImage1}
              alt="justgrow-image"
              className="justgrow-image "
            />
            <img
              src={justgrowImage3}
              alt="justgrow-image"
              className="justgrow-image justgrow-image-main-small"
            />
            <img
              src={justgrowImage2}
              alt="justgrow-image"
              className="justgrow-image"
            />
            <div className="left-arrow arrows">
              <img src={leftArrowIcon} alt="left-arrow-icon" />
            </div>
            <div className="right-arrow arrows">
              <img src={rightArrowIcon} alt="right-arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
