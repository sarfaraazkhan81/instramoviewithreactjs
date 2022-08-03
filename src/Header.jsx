import React from "react";
// import "./Header.css";
import "./Sass/main.css";
import logo from "./assets/images/logo.png";
import FadeLoader from "react-spinners/FadeLoader";
function Header() {
  return (
    <div className="headerContainer">
      <div className="content">
        <div className="logoContainer">
          <img src={logo} />
        </div>
        <div className="searcBarContainer">
          <input type="search" placeholder="search any movie" />
          {/* <FadeLoader size={1} /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
