import React from "react";
import { Link } from "react-router-dom";

import "./HeaderSettings.css";

export default function HeaderSettings() {
  return (
    <div className="header-settings">
      <div className="wrapper">
        <Link to="/" className="header-settings-main">
          <div className="settings-news">
            <img
              src="https://img.icons8.com/ios/50/000000/news.png"
              alt="logo"
            />
            <h1 className="settings-title">News</h1>
          </div>
        </Link>

        <Link
          to="/"
          className="header-settings-main"
          style={{
            fontSize: "30px",
          }}
        >
          <div className="back">Back</div>
        </Link>
      </div>
    </div>
  );
}
