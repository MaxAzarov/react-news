import React, { Component } from "react";
import "./SearchParams.css";
export default class SearchParams extends Component {
  render() {
    return (
      <section className="searchParams">
        <p>News:</p>
        <p>Results: {this.props.amountOfValues}</p>
      </section>
    );
  }
}
