import React from "react";
import "./home.model.css";
import { FaLinkedinIn, FaGithub, FaBroom } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import profile from "../../assets/baskar.png";

function Home() {
  return (
    <div>
      <div className="home-content-container">
        <h1>Baskar</h1>
        <p className="home-content-para">
          Hey, I'm Baskar. I'm an
          <strong> Aspiring frontend Web Developer with UI/UX Skills. </strong>
          where my team helps developers build a faster web.
        </p>

        <div className="home-profile-container">
          <div className="home-profile">
            <img src={profile} alt="Baskar Portfolio Profile" />
          </div>
          <div className="home-stats">
            <p>
              <FaLinkedinIn size={20} /> 6,873 tweets all time
            </p>
            <p>
              <FaGithub size={20} /> 6,873 stars on this repo
            </p>
            <p>
              <FaBroom size={20} /> 1,609,184 blog views all time
            </p>
          </div>
        </div>

        <p className="home-profile-para">
          I'm a Next.js contributor and help lead our open-source communities.
          I'm passionate about frontend development and have created courses on
          React, Next.js, and web development. I'm an advisor and investor in
          early stage startups.
        </p>

        <div className="home-footer-links">
          <a href="/">
            <FiArrowUpRight size={20} /> follow me on twitter
          </a>
          <a href="/">
            <FiArrowUpRight size={20} /> get email updates
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
