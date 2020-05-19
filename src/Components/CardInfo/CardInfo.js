import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./CardInfo.css";
class InfoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  async componentWillMount() {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
          const { title, body } = data;
          this.setState({
            title: title,
            body: body,
          });
        });
    } catch (e) {
      throw new Error("cannot get data from api");
    }
  }

  render() {
    return (
      <div className="news__details">
        <p>Title: {this.state.title}</p>
        <p>Body: {this.state.body}</p>
      </div>
    );
  }
}

export default withRouter(InfoDetails);
