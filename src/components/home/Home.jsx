import React from "react";
import "./home.model.css";

import profile from "../../assets/baskar.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <h1>Baskar</h1>
        <p>
          Hey, I'm Lee. I'm the VP of Developer Experience at Vercel where my
          team helps developers build a faster web.
        </p>

        <div className="home-profile-container">
          <div className="home-profile">
            <img src={profile} alt="Baskar Portfolio Profile" />
          </div>
          <div className="home-stats">
            <p>6,873 tweets all time</p>
            <p>6,873 stars on this repo</p>
            <p>1,609,184 blog views all time</p>
          </div>
        </div>

        <p>
          I'm a Next.js contributor and help lead our open-source communities.
          I'm passionate about frontend development and have created courses on
          React, Next.js, and web development. I'm an advisor and investor in
          early stage startups.
        </p>

        <div className="home-footer-links">
          <a href="/">follow me on twitter</a>
          <a href="/">get email updates</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
