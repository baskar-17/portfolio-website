import React from "react";
import "./guestbook.model.css";
import { FaGithub } from "react-icons/fa";

function Guestbook() {
  return (
    <div className="guestbook-container">
      <h1>Guest Book</h1>

      <a href="https://github.com/baskar-17" target="_blank" rel="noreferrer">
        <div className="guestbook-social-btn">
          <FaGithub className="icon" />
          <p>Sign in with GitHub</p>
        </div>
      </a>

      <div className="guestbook-list-container">
        <p>
          <span>User Name: </span>
          big ups on your site and your code walkthrough of it. helped me out a
          lot!
        </p>

        <p>
          <span>User Name: </span>
          This is really good.
        </p>

        <p>
          <span>User Name: </span>
          your work and Vercel's is amazing. hugs.
        </p>

        <p>
          <span>User Name: </span>
          Hi man, really love your work!
        </p>

        <p>
          <span>User Name: </span>
          🚀 awesome
        </p>

        <p>
          <span>User Name: </span>I was here. You are awesome ✨
        </p>

        <p>
          <span>User Name: </span>
          Awesome
        </p>

        <p>
          <span>User Name: </span>
          Thank you. Amazing 👏
        </p>

        <p>
          <span>User Name: </span>
          woah. this is nice
        </p>
      </div>
    </div>
  );
}

export default Guestbook;
