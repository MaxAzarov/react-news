import React, { Component } from "react";
import "./SearchParams.css";
export default class SearchParams extends Component {
  render() {
    return (
      <section className="searchparams">
        <div className="SortParams">
          <label htmlFor="search">Search</label>
          <select className="seach">
            <option value>All</option>
            <option value>Stories</option>
            <option value>Comments</option>
          </select>
          <label htmlFor="by">by</label>
          <select className="by">
            <option value>Popularity</option>
            <option value>Date</option>
          </select>
          <label htmlFor="time">Search</label>
          <select className="time">
            <option value>All time</option>
            <option value>Last 24h</option>
            <option value>Past Week</option>
            <option value>Past Month</option>
            <option value>Past Year</option>
            <option value>Custom Range</option>
          </select>
          <span>Results: {}</span>
        </div>
      </section>
    );
  }
}
