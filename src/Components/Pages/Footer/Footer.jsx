import React from "react";
import bg from "../../Images/Logo.png";
import "./Footer.css";

// Icons
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="fContainer">
      <div className="join">
        <h1>
          Join Our team To be a Part
          <br /> of our Story
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt.
        </p>
        <button className="btn">Join Now</button>
      </div>
      <div className="footerContainer">
        <div className="mainFooterContainer">
          <div className="left">
            <img src={bg} alt="" />
            <Link to={"/"} className="links">
              <p className="mt-2">Home</p>
            </Link>
            <Link to={"/Blog"} className="links">
              <p>Blog</p>
            </Link>
            <Link to={"/About"} className="links">
              <p>About Us</p>
            </Link>
            <Link to={"/Contact"} className="links">
              <p>Contact Us</p>
            </Link>
            <Link className="links">
              <p>Privacy Polici</p>
            </Link>
          </div>
          <div className="middle">
            <h5>Services</h5>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="right">
            <h5>Info Us</h5>
            <p>Help</p>
            <p>Talk Us</p>
            <p>Help</p>
            <p>Talk Us</p>
          </div>
        </div>
        <div className="address">
          <div className="left">
            <p>No.104/25 ,Medemulla ,Minuwangoda</p>
          </div>
          <div className="socilaIcons">
            <BsFacebook />
            <AiOutlineTwitter />
            <BsInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="copyright mt-3">
          <p className="">Copyright ...Developed by Kanishka Pasindu</p>
        </div>
      </div>
    </div>
  );
}
