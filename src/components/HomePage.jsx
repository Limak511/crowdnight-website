import React, { useState } from "react";
import "../css/HomePage.css";
import justgrowTitle from "../assets/justgrow-title.png";
import sliderImage1 from "../assets/slider-images/justgrow-image-1.png";
import sliderImage2 from "../assets/slider-images/justgrow-image-2.png";
import sliderImage3 from "../assets/slider-images/justgrow-image-3.png";
import sliderImage4 from "../assets/slider-images/justgrow-image-4.png";
import leftArrowIcon from "../assets/left-arrow-icon.svg";
import rightArrowIcon from "../assets/right-arrow-icon.svg";
import steamIcon from "../assets/steam.svg";

export default function HomePage() {
  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];
  const [mainImageIndex, setMainImageIndex] = useState(1);

  const handlePrevClick = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="home">
        <div className="left-block">
          <img src={justgrowTitle} alt="justgrow-title" />
          <p className="title-tag">Roguelike</p>
          <p className="title-tag">Action</p>
          <p className="title-tag">Indie</p>
          <a
            href="https://store.steampowered.com/app/3402540/Just_Grow/"
            target="_blank"
            rel="noreferrer"
            className="steam-button"
          >
            <img src={steamIcon} alt="Steam Icon" />
            <p>Wishlist on Steam</p>
          </a>
        </div>
        <div className="right-block">
          <img
            src={images[mainImageIndex]}
            alt={`Slider Image ${mainImageIndex + 1}`}
            className="justgrow-image-main"
          />
          <div className="image-slider">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slider Image ${index + 1}`}
                className={`justgrow-image ${
                  index === mainImageIndex ? "justgrow-image-main-small" : ""
                }`}
                onClick={() => setMainImageIndex(index)}
              />
            ))}
            <div
              className="left-arrow arrows"
              onClick={handlePrevClick}
              onKeyDown={(e) => {
                if (e.key === "Enter") handlePrevClick();
              }}
              role="button"
              tabIndex={0}
            >
              <img src={leftArrowIcon} alt="Left Arrow Icon" />
            </div>
            <div
              className="right-arrow arrows"
              onClick={handleNextClick}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNextClick();
              }}
              role="button"
              tabIndex={0}
            >
              <img src={rightArrowIcon} alt="Right Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
