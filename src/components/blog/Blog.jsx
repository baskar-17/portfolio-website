import React from "react";
import "./blog.model.css";

function Blog() {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-list-container">
        <a href="https://github.com/baskar-17" target="_blank" rel="noreferrer">
          <div className="blog-list">
            <p>Funding Open Source</p>
            <p className="blog-number">13,998 views</p>
          </div>
        </a>

        <a href="https://github.com/baskar-17" target="_blank" rel="noreferrer">
          <div className="blog-list">
            <p>
              Building an Image Gallery with Next.js, Supabase, and Tailwind CSS
            </p>
            <p className="blog-number">13,998 views</p>
          </div>
        </a>

        <a href="https://github.com/baskar-17" target="_blank" rel="noreferrer">
          <div className="blog-list">
            <p>Funding Open Source</p>
            <p className="blog-number">13,998 views</p>
          </div>
        </a>

        <a href="https://github.com/baskar-17" target="_blank" rel="noreferrer">
          <div className="blog-list">
            <p>Building an Image Gallery with Next.js, Supabase</p>
            <p className="blog-number">13,998 views</p>
          </div>
        </a>

        <a href="https://github.com/baskar-17" target="_blank" rel="noreferrer">
          <div className="blog-list">
            <p>Funding Open Source</p>
            <p className="blog-number">13,998 views</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Blog;
