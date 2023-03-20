import React from "react";
import "./Blog.css";
import Footer from "../Footer/Footer";
// Images
import imageOne from "../../Images/blogImage (1).png";
import imagetwo from "../../Images/blogImage (1).png";
import imagethree from "../../Images/blogImage (2).png";
import imagefour from "../../Images/blogImage (3).png";
import imagefive from "../../Images/blogImage (4).png";
import blog from "../../Images/blog.png";

export default function Blog() {
  const posts = [
    {
      id: 1,
      image: `${imageOne}`,
      subHead: "STARTUP",
      head: "Design tips for designers that cover everything you need",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 2,
      image: `${imagetwo}`,
      subHead: "BUSINESS",
      head: "How to build rapport with your web design clients",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 3,
      image: `${imagethree}`,
      subHead: "STARTUP",
      head: "Logo design trends to avoid in 2022",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 4,
      image: `${imagefour}`,
      subHead: "TEHNOLOGY",
      head: "8 Figma design systems you can download for free today",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 5,
      image: `${imagefive}`,
      subHead: "ECONOMY",
      head: "Font sizes in UI design: The complete guide to follow",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
  ];
  return (
    <div className="blogContainer">
      {/* Blog One Section */}
      <div className="blogDetailsContainer">
        <div className="left">
          <p>Featured Post</p>
          <h1
            style={{
              fontSize: "45px",
            }}
          >
            Step-by-step guide to <br />
            choosing great font pairs
          </h1>
          <p className="mt-4">
            By{" "}
            <span
              className="spn"
              style={{
                color: "red",
                fontWeight: "500",
              }}
            >
              Kanishka Pasindu
            </span>{" "}
            | May 23, 2022{" "}
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
          <img src={blog} alt="" className="blogImage" />
        </div>
      </div>
      {/* Blog One End Of section */}

      <h1
        className="text-center"
        style={{
          marginTop: "60px",
        }}
      >
        ALL POSTS
      </h1>

      {/* Blog Twop Section */}
      <div className="allPostContainer">
        {posts.map((e) => (
          <div className="cardContainer">
            <div className="left">
              <img src={e.image} alt="" className="postImages" />
            </div>
            <div className="right">
              <h5>{e.subHead}</h5>
              <h2 className="mt-3">{e.head}</h2>
              <p className="mt-3">{e.des}</p>
            </div>
          </div>
        ))}
      </div>
      {/* End Of Blog two Section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
