import React, { Component } from "react";
import { connect } from "react-redux";

import "./InfoDetails.css";
class InfoDetails extends Component {
  render() {
    return (
      <>
        <p className="news-details">Description:{this.props.data[0]}</p>
        <p className="news-details">Description:{this.props.data[1]}</p>
        <p className="news-details">Description:{this.props.data[2]}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.newsInfo,
  };
};

export default connect(mapStateToProps)(InfoDetails);
