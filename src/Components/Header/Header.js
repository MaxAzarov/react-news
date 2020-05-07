import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="news">
        <img src="https://img.icons8.com/ios/50/000000/news.png" alt="logo" />
        <h1 className="title">News</h1>
      </div>
      <input
        type="text"
        placeholder="Search the news,author,url"
        className="input-title"
      />
      <Link to="/settings" style={{ textDecoration: "none", color: "black" }}>
        <div className="settings">
          <img
            src="https://img.icons8.com/ios/50/000000/settings.png"
            alt="setting"
            className="settingsIcon"
          />
          <h3>Settings</h3>
        </div>
      </Link>
    </header>
  );
}
