import React, { useEffect, useState } from "react";
import logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handle = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const screenChange = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", screenChange);

    return () => {
      window.removeEventListener("resize", screenChange);
    };
  });

  return (
    <div className="navBarContainer">
      <div className="navContainer">
        <div className="navHome">
          <img src={logo} alt="" />
        </div>
        <ul
          className={
            clicked || screenWidth > 770 ? "navLinks active" : "navLinks"
          }
        >
          <Link to={"/"} className="list" onClick={handle}>
            <li>Home</li>
          </Link>
          <Link to={"/Blog"} className="list" onClick={handle}>
            <li>Blog</li>
          </Link>
          <Link to={"/About"} className="list" onClick={handle}>
            <li>About Us</li>
          </Link>
          <Link to={"/Contact"} className="list" onClick={handle}>
            <li>Contact Us</li>
          </Link>
          <li className="list" onClick={handle}>
            Subscribe
          </li>
        </ul>
        <div className="mobile" onClick={handle}>
          {clicked ? <RiCloseFill /> : <AiOutlineBars />}
        </div>
      </div>
    </div>
  );
}
