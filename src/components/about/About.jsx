import React from "react";
import "./about.model.css";
import { FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <div>
      <div className="about-container">
        <h1>About Me</h1>
        <p>Hey, I'm Baskar.</p>
        <p>
          UI/UX Designer with two years of professional experience in the field.
          Based in Chennai, Tamil Nadu, A unique blend of frontend skills and
          creative design thinking to every project he undertakes.
        </p>
        <hr className="about-hline" />
        <p>
          I have a strong understanding of user experience principles and a keen
          eye for aesthetics that enables me to create stunning designs that
          resonate with users. I am a highly motivated and has a positive
          attitude towards my work. I approaches every task with enthusiasm and
          takes on new challenges with a hunger to learn and grow.
        </p>
        <p>
          My passion for design and technology keeps him up-to-date with the
          latest trends and techniques in the field, making me as a valuable
          asset to any team.
        </p>
        <p>
          If you're looking to learn more about UI/UX design, frontend
          development, or just want to stay updated on the latest trends and
          techniques in the industry, be sure to follow me on LinkedIn, GitHub,
          and YouTube. So why wait? Follow me today and take your design and
          development skills to the next level!
        </p>
        <div className="about-buttons">
          <a
            href="https://www.linkedin.com/in/baskar17/"
            target="_blank"
            rel="noreferrer"
            className="about-social-btn"
          >
            <div className="about-social-btn-2">
              <FaLinkedinIn className="icon" />
              <p>LinkedIn</p>
            </div>
            <FiArrowUpRight className="icon" />
          </a>
          <a
            href="https://github.com/baskar-17"
            target="_blank"
            rel="noreferrer"
            className="about-social-btn"
          >
            <div className="about-social-btn-2">
              <FaGithub className="icon" />
              <p>GitHub</p>
            </div>
            <FiArrowUpRight className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCtmK8ilIh5mZjXG_HhY9Xxg"
            target="_blank"
            rel="noreferrer"
            className="about-social-btn"
          >
            <div className="about-social-btn-2">
              <FaYoutube className="icon" />
              <p>YouTube</p>
            </div>
            <FiArrowUpRight className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
