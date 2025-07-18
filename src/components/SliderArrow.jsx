import React from "react";
import "../css/SliderArrow.css";
import leftArrowIcon from "../assets/left-arrow-icon.svg";
import rightArrowIcon from "../assets/right-arrow-icon.svg";

export default function SliderArrow({ direction, onClick }) {
  const isLeft = direction === "left";
  const icon = isLeft ? leftArrowIcon : rightArrowIcon;
  const altText = isLeft ? "Left Arrow Icon" : "Right Arrow Icon";

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick();
    }
  };

  return (
    <div
      className={`${direction}-arrow arrows`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <img src={icon} alt={altText} />
    </div>
  );
}
