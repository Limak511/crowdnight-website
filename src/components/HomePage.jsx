import React from "react";
import "../css/HomePage.css";
import justgrowTitle from "../assets/justgrow-title.png";

export default function HomePage() {
  return (
    <>
      <div className="home">
        <div className="left-block">
          <img src={justgrowTitle} alt="justgrow-title" />
          <p className="title-tag">ROGUELIKE</p>
          <p className="title-tag">ACTION</p>
          <p className="title-tag">INDIE</p>
        </div>
        <div className="right-block"></div>
      </div>
    </>
  );
}
