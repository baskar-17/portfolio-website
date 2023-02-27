import React from "react";
import "./app.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Guestbook from "./components/guestbook/Guestbook";

import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo baskar portfolio" />
      </div>
      <div className="home-navigator">
        <Link className="nav-link active" to={"/"}>
          home
        </Link>
        <Link className="nav-link" to={"/about"}>
          about
        </Link>
        <Link className="nav-link" to={"/blog"}>
          blog
        </Link>
        <Link className="nav-link" to={"/guestbook"}>
          guestbook
        </Link>
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
