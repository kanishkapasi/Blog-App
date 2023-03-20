import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
// Images
import bgLogo from "../../Images/homeBg.png";
import post from "../../Images/secondBg.png";
import iconone from "../../Images/icon1.png";
import icontwo from "../../Images/icon2.png";
import iconthree from "../../Images/icon3.png";
import iconfour from "../../Images/icon4.png";
import imageOne from "../../Images/image.png";
import imagetwo from "../../Images/image2.png";
import imageThree from "../../Images/image3.png";
import imageFour from "../../Images/image4.png";

// Icons
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../Footer/Footer";

export default function Home() {
  const navigate = useNavigate();
  const allPost = [
    {
      id: 1,
      name: "By Kanishka Pasindu   l   Aug 23, 2021 ",
      description:
        "8 Figma design systems that you can download for free today.",
    },
    {
      id: 2,
      name: "By Kanishka Pasindu   l   Aug 23, 2021 ",
      description:
        "8 Figma design systems that you can download for free today.",
    },
    {
      id: 3,
      name: "By Kanishka Pasindu   l   Aug 23, 2021 ",
      description:
        "8 Figma design systems that you can download for free today.",
    },
    {
      id: 4,
      name: "By Kanishka Pasindu   l   Aug 23, 2021 ",
      description:
        "8 Figma design systems that you can download for free today.",
    },
  ];

  const category = [
    {
      id: 1,
      icon: `${iconone}`,
      head: "Business",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: 2,
      icon: `${icontwo}`,
      head: "Startup",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: 3,
      icon: `${iconthree}`,
      head: "Echonomy",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: 4,
      icon: `${iconfour}`,
      head: "Technology",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
  ];

  const authors = [
    {
      id: 1,
      image: `${imageOne}`,
      name: "Floyd Miles",
      des: "Content writter @ company",
    },
    {
      id: 2,
      image: `${imagetwo}`,
      name: "Dianne Russell",
      des: "Content writter @ company",
    },
    {
      id: 3,
      image: `${imageThree}`,
      name: "Jenny Wilson",
      des: "Content writter @ company",
    },
    {
      id: 4,
      image: `${imageFour}`,
      name: "Leslie Alexander",
      des: "Content writter @ company",
    },
  ];
  return (
    <div className="homeContainer">
      {/* First Home Section */}
      <div className="background">
        <div className="left">
          <h4>Posted on Startup</h4>
          <h1>
            Step-by-step guide to <br />
            choosing great font pairs
          </h1>
          <p className="mt-4">
            By <span className="spn">Kanishka Pasindu</span> | May 23, 2022{" "}
          </p>
          <p className="mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum
            <br />
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident.
          </p>
          <button className="btn mt-3">Read More</button>
        </div>
        <div className="right">
          <img src={bgLogo} alt="" className="firstImage" />
        </div>
      </div>
      {/* End Of First Home Section */}

      {/* Second home Section */}
      <div className="postContainer">
        <div className="featuredpost">
          <img src={post} alt="" className="post" />
          <p className="mt-4">
            By <span className="spn">Kanishka Pasindu</span> | May 23, 2022{" "}
          </p>
          <h5 className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> elit, sed do eiusmod tempor.
          </h5>
          <p className="mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore <br />
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
          <button className="btn mt-4">Read More</button>
        </div>
        <div className="allPost">
          <h4>All Posts</h4>
          {allPost.map((e) => {
            return (
              <div className="card mt-3" key={e.id}>
                <p>{e.name}</p>
                <h5>{e.description}</h5>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Of Second home Section */}

      {/* Mission and About Us */}
      <div className="missionContainer">
        <div className="about">
          <h6>ABOUT US</h6>
          <h1>
            We are a community of
            <br /> content writers who share their
            <br /> learnings
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn" onClick={() => navigate("/About")}>
            Read More
          </button>
        </div>
        <div className="mission">
          <h6>OUR MISSOION</h6>
          <h1>
            Creating valuable content for
            <br /> creatives all around the world
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
            <br />
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            <br />
            ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* End Of Mission And About Us */}

      {/* Category Section */}
      <h1 className="text-center mt-5">Choose Category</h1>
      <div className="categoryContainer mt-5">
        {category.map((e) => (
          <div className="card">
            <img src={e.icon} alt="" className="icn" />
            <h4 className="mt-3">{e.head}</h4>
            <p>{e.des}</p>
          </div>
        ))}
      </div>
      {/* End Of Category section */}
      <h1 className="text-center mt-5">List Of Authors</h1>
      {/* Athour Section */}
      <div className="authorContainer">
        {authors.map((e) => (
          <div className="cards">
            <img src={e.image} alt="" />
            <h3 className="mt-2">{e.name}</h3>
            <p className="mt-2">{e.des}</p>
            <div className="social mt-3">
              <BsFacebook className="so" />
              <AiOutlineTwitter className="so" />
              <BsInstagram className="so" />
              <FaLinkedin className="so" />
            </div>
          </div>
        ))}
      </div>
      {/* End Of Author Section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
