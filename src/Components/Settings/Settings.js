import React, { Component } from "react";
import { connect } from "react-redux";

import "./Settings.css";
import "./../UsefulLinks/UsefulLinks";
import UsefulLinks from "./../UsefulLinks/UsefulLinks";
import { ApplyNewSettings } from "./../../redux/actions/actions";

class Settings extends Component {
  state = {
    style: "default",
    amounts: [20, 30, 40, 50],
    amount: 20,
    storySearch: true,
    TitleSearch: true,
  };
  render() {
    const style = this.props.style === "default" ? "white" : "#00000033";
    document.body.style.backgroundColor = `${style}`;
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
                defaultValue={this.props.style}
              >
                <option value="default">Default</option>
                <option value="experimental">Experimental</option>
              </select>
            </div>

            <div className="selectRow">
              <label>Amount of news</label>
              <select
                name="amount"
                onChange={(e) => this.setState({ amount: e.target.value })}
                defaultValue={this.props.amount}
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
          <label className="search">
            Use the story text for search
            <input
              type="checkbox"
              className="storyForSearch"
              defaultChecked={this.props.storySearch}
              onChange={() =>
                this.setState({ storySearch: !this.state.storySearch })
              }
            />
          </label>
          <label className="search">
            Use the title for search
            <input
              type="checkbox"
              className="usernameForSearch"
              defaultChecked={this.props.storySearch}
              onChange={() =>
                this.setState({ TitleSearch: !this.state.TitleSearch })
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

const mapStateToProps = (state) => {
  return {
    style: state.style,
    amount: state.amount,
    storySearch: state.storySearch,
    TitleSearch: state.TitleSearch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
