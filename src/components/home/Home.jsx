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
            <div className="home-status-numbers">
              <FaLinkedinIn size={20} />
              <p>6,873 tweets all time</p>
            </div>

            <div className="home-status-numbers">
              <FaGithub size={20} />
              <p>6,873 tweets all time</p>
            </div>

            <div className="home-status-numbers">
              <FaBroom size={20} />
              <p>1,609,184 blog views all time</p>
            </div>
          </div>
        </div>

        <p className="home-profile-para">
          Experienced UI/UX Designer with over 2 years of experience, blending
          technical skills and creative vision to deliver highquality designs
          that drive engagement and enhance user experiences. Proficient in
          development tools, HTML, CSS, JavaScript and ReactJS. Strong
          communication and collaboration skills with a passion for staying
          current on design trends and technologies.
        </p>

        <div className="home-footer-links">
          <a
            href="https://www.linkedin.com/in/baskar17/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="home-status-numbers">
              <FiArrowUpRight size={20} />
              <p>Connect with me on Linked In</p>
            </div>
          </a>
          <a
            href="mailto:baskars739@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <div className="home-status-numbers">
              <FiArrowUpRight size={20} />
              <p>get email updates</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
