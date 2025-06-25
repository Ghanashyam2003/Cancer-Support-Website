// src/pages/Blog.js
import React from "react";
import "./Blog.css";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Facing Cancer with Courage: A Survivor's Voice",
      date: "June 20, 2025",
      excerpt: "A heartfelt journey of a young cancer survivor who turned pain into purpose...",
      link: "#"
    },
    {
      id: 2,
      title: "Early Detection Saves Lives",
      date: "May 12, 2025",
      excerpt: "Learn the importance of early screening and the symptoms you should never ignore.",
      link: "#"
    },
    {
      id: 3,
      title: "How Volunteers Make a Real Difference",
      date: "April 28, 2025",
      excerpt: "Stories from the ground: how BraveHearts volunteers are impacting lives every day.",
      link: "#"
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">BraveHearts Blog</h1>
      <p className="blog-subtitle">Real stories, tips, and updates from our community 💙</p>

      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <a href={post.link} className="blog-readmore">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
