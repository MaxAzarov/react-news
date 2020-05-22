import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";
import { setInputSearchText } from "./../../redux/actions/actions";
function Header(props) {
  return (
    <header>
      <div className="news">
        <img src="https://img.icons8.com/ios/50/000000/news.png" alt="logo" />
        <h1 className="title">News</h1>
      </div>
      <input
        type="text"
        placeholder="Search for the news,title news"
        className="input-title"
        value={props.inputSearchText}
        onChange={(e) => props.setInputSearchText(e.target.value)}
      />
      <Link to="/settings" style={{ textDecoration: "none", color: "black" }}>
        <div className="settings">
          <img
            src="https://img.icons8.com/ios/50/000000/settings.png"
            alt="setting"
          />
          <h3>Settings</h3>
        </div>
      </Link>
    </header>
  );
}

const mapDispatchToProps = (state) => {
  return {
    inputSearchText: state.inputSearchText,
  };
};

const mapStateToProps = (dispatch) => {
  return {
    setInputSearchText: (text) => dispatch(setInputSearchText(text)),
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(Header);
