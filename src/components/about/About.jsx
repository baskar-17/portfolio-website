import React from "react";
import "./about.model.css";
import { FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <div>
      <div className="about-container">
        <h1>About Me</h1>
        <p>Hey, I'm Lee. Most folks know me as leerob online.</p>
        <p>
          I'm currently the VP of Developer Experience at Vercel, where I lead
          our Developer Relations and Documentation teams. I focus on educating
          and growing the Vercel and Next.js communities.
        </p>
        <hr className="about-hline" />
        <p>
          I'm passionate about many creative pursuits, including music,
          photography, videography, and of course, coding. This combination of
          interests is what ultimately led me to my current role in building
          developer communities.
        </p>
        <p>
          I love building for the web. From something as simple as a single HTML
          file – all the way to large Next.js applications. The web is
          incredible. Anyone can become a developer, writer, or creator – and no
          one has to ask for permission. You can just build.
        </p>
        <p>
          Outside of Vercel, I angel invest in developer tools companies and
          advise early-stage startups. I also do Developer Relations consulting
          work, helping companies take their DevRel function from 0 to 1, or
          provide guidance on growing communities, content creation, and
          developer marketing.
        </p>
        <div className="about-buttons">
          <a
            href="https://www.linkedin.com/in/baskar17/"
            target="_blank"
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
