import React from "react";
import "./About.css";
import Footer from "../Footer/Footer";
// Images
import about from "../../Images/aboutBg.png";
import groupOne from "../../Images/group (1).png";
import groupTwo from "../../Images/group (2).png";

export default function About() {
  const groups = [
    {
      img: `${groupOne}`,
      subHead: "Our Teams Creatives",
      head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
    {
      img: `${groupTwo}`,
      subHead: "Why We Started Thi Blog",
      head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
  ];
  return (
    <div className="aboutContainer">
      {/* aboutDetails Section */}
      <div className="aDetails">
        <div className="left">
          <h6>WHAT ABOUT US</h6>
          <h1>
            We are a team of
            <br /> content writers who
            <br /> share their learnings
          </h1>
        </div>
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            <br />
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* Image Section */}
      <div className="image">
        <img src={about} alt="" className="img" />
      </div>
      {/* End Of Image Section */}

      {/* Vision Section */}
      <div className="visionContainer">
        <div className="left">
          <h6>OUR MISSION</h6>
          <h3>
            Creating valuable content for
            <br /> creatives all around the world
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
            <br />
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.{" "}
            <br />
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="right">
          <h6>OUR VISION</h6>
          <h3>
            A platform that empowers
            <br /> individuals to improve
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
            <br />
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.{" "}
            <br />
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
      {/* End oF Vision Section */}

      {/* Team And Start Section */}
      <div className="teamContainer">
        {groups.map((e) => (
          <div className="cards mt-4">
            <div className="left">
              <h5 className="mt-3">{e.subHead}</h5>
              <h2 className="mt-3">{e.head}</h2>
              <p className="mt-3">{e.describe}</p>
            </div>
            <div className="right p-2">
              <img src={e.img} alt="" className="teamImage" />
            </div>
          </div>
        ))}
      </div>
      {/* End Of Team And Start Section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
