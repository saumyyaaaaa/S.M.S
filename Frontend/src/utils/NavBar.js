import React from "react";
import $ from "jquery";

import "../static/css/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div id="trapezoid">
        <a className="sub-home" href="#">
          Menu
        </a>
        <a href="./log/login" className="expandHome">
          Login
        </a>
        <div className="subnav">
          <button className="subnavbtn">
            Contact Us<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div id="subnav-trapezoid">
              <a href="#Clients">Facebook</a>
              <a href="https://github.com/divya-nshi/S.M.S.">GitHub</a>
              <a href="#Clients">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="subnav">
          <button className="subnavbtn">
            About Us<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div className="subnav-trapezoid">
              <a href="#Services">Sub menu1</a>
              <a href="#Services">Sub menu2</a>
              <a href="#Services">Sub menu3</a>
            </div>
          </div>
        </div>
        <a href="./log/signup" className="expandHome">
          Sign UP
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
