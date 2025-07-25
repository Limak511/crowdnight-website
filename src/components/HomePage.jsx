import React, { useState } from "react";
import "../css/HomePage.css";
import justgrowTitle from "../assets/justgrow-title.png";
import sliderImage1 from "../assets/slider-images/justgrow-image-1.png";
import sliderImage2 from "../assets/slider-images/justgrow-image-2.png";
import sliderImage3 from "../assets/slider-images/justgrow-image-3.png";
import sliderImage4 from "../assets/slider-images/justgrow-image-4.png";
import steamIcon from "../assets/steam.svg";
import SliderArrow from "./SliderArrow";

export default function HomePage() {
  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];
  const [mainImageIndex, setMainImageIndex] = useState(2);

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

  // Calculate the three images to display in the thumbnail slider
  const imagesToDisplay = [
    (mainImageIndex - 1 + images.length) % images.length,
    mainImageIndex,
    (mainImageIndex + 1) % images.length,
  ].map((originalIndex) => ({
    image: images[originalIndex],
    index: originalIndex,
  }));

  return (
    <>
      <div className="home-bg">
        <div className="home-content">
          <div className="left-block">
            <div className="left-block-title">
              <img src={justgrowTitle} alt="justgrow-title" />
              <p className="title-tag">Roguelike</p>
              <p className="title-tag">Action</p>
              <p className="title-tag">Indie</p>
            </div>
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
              key={mainImageIndex}
              src={images[mainImageIndex]}
              alt={`Slider Image ${mainImageIndex + 1}`}
              className="justgrow-image-main"
            />
            <div className="image-slider">
              {imagesToDisplay.map(({ image, index }) => (
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
              <SliderArrow direction="left" onClick={handlePrevClick} />
              <SliderArrow direction="right" onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
