import React from "react";
import "./app.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Guestbook from "./components/guestbook/Guestbook";

import logo from "./assets/logo.svg";

function App() {
  let [switchTo, newSwitchTo] = useState(1);

  function switchTab(index) {
    newSwitchTo(index);
  }

  return (
    <div className="container">
      <div>
        <div className="logo">
          <img src={logo} alt="logo baskar portfolio" />
        </div>
        <div className="home-navigator">
          <Link
            className={switchTo === 1 ? "nav-link active" : "nav-link"}
            onClick={() => switchTab(1)}
            to={"/"}
          >
            home
          </Link>
          <Link
            className={switchTo === 2 ? "nav-link active" : "nav-link"}
            onClick={() => switchTab(2)}
            to={"/about"}
          >
            about
          </Link>
          <Link
            className={switchTo === 3 ? "nav-link active" : "nav-link"}
            onClick={() => switchTab(3)}
            to={"/blog"}
          >
            blog
          </Link>
          <Link
            className={switchTo === 4 ? "nav-link active" : "nav-link"}
            onClick={() => switchTab(4)}
            to={"/guestbook"}
          >
            guestbook
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </div>
  );
}

export default App;
