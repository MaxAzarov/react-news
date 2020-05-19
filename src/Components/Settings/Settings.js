import React, { Component } from "react";
import { connect } from "react-redux";

import "./Settings.css";
import "./../UsefulLinks/UsefulLinks";
import UsefulLinks from "./../UsefulLinks/UsefulLinks";
import { ApplyNewSettings } from "./../../redux/actions/actions";

class Settings extends Component {
  state = {
    style: "default",
    amounts: [10, 20, 30, 40, 50],
    Currentamount: "10",
    publications: "Stories",
    periods: "Most recent",
    time: "Forever",
    storySearch: false,
    AuthorSearch: false,
  };
  render() {
    console.log(this.state);
    return (
      <>
        <section className="settings-wrapper">
          <p>Settings</p>

          <div className="display-options">
            <p>Display-options</p>
            <div className="selectRow">
              <label>Style</label>
              <select
                name="style"
                onChange={(e) => this.setState({ style: e.target.value })}
                value={this.state.style}
              >
                <option value="default">Default</option>
                <option value="experimental">Experimental</option>
              </select>
            </div>

            <div className="selectRow">
              <label>Amount of news</label>
              <select
                name="amount"
                onChange={(e) =>
                  this.setState({ Currentamount: e.target.value })
                }
                value={this.state.amount}
              >
                {this.state.amounts.map((amount, id) => {
                  return (
                    <option value={amount} key={id}>
                      {amount}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="selectRow">
            <label>Default type</label>
            <select
              name="Publications"
              id=""
              onChange={(e) => this.setState({ publications: e.target.value })}
            >
              <option value="Stories">Stories</option>
              <option value="All">All</option>
              <option value="Comments">Comments</option>
            </select>
          </div>

          <div className="selectRow">
            <label>Default type</label>
            <select
              name="periods"
              id=""
              onChange={(e) => this.setState({ periods: e.target.value })}
            >
              <option value="Most recent">Most recent</option>
              <option value="Most popular">Most popular first</option>
            </select>
          </div>

          <div className="selectRow">
            <label>Default data range</label>
            <select
              name="time"
              id="time"
              value={this.state.time}
              onChange={(e) => this.setState({ time: e.target.value })}
            >
              <option value="Forever">Forever</option>
              <option value="Last 24h">Last 24h</option>
              <option value="Last week">Last week</option>
            </select>
          </div>

          <label className="search">
            Use the story text for search
            <input
              type="checkbox"
              checked={this.state.storySearch}
              className="storyForSearch"
              onChange={() =>
                this.setState({ storySearch: !this.state.storySearch })
              }
            />
          </label>

          <label className="search">
            Use the author's username for search
            <input
              type="checkbox"
              checked={this.state.AuthorSearch}
              className="usernameForSearch"
              onChange={() =>
                this.setState({ AuthorSearch: !this.state.AuthorSearch })
              }
            />
          </label>

          <button
            type="submit"
            className="apply"
            onClick={() => this.props.ApplyNewSettings(this.state)}
          >
            Apply
          </button>
        </section>
        <UsefulLinks />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ApplyNewSettings: (args) => dispatch(ApplyNewSettings(args)),
  };
};

export default connect(null, mapDispatchToProps)(Settings);
