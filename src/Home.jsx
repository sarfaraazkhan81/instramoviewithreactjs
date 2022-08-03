import React, { useState } from "react";
import cover from "./assets/images/cover.png";
import Trending from "./Trending";
import "./Sass/main.css";

function Home() {
  return (
    <div className="home">
      <div className="coverContainer">
        <img src={cover} />
      </div>
      <Trending />
    </div>
  );
}

export default Home;
