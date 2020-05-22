import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./Cards.css";
import SearchParams from "../SearchParams/SearchParams";
import { getNews, amountOfCards } from "../../redux/actions/actions";
import Downloading from "../Downloading/Downloading";
const classNames = require("classnames");

class Cards extends React.Component {
  async componentDidMount() {
    this.props.getNews(this.props.amount);
  }

  detailsHandler(id) {
    this.props.history.push(`${id}`);
  }

  moreCards = () => {
    this.props.getNews(this.props.amount);
    this.props.amountOfCards();
  };

  render() {
    let cards;
    const backgroundColor = classNames({
      _black: this.props.style === "default" ? false : true,
    });
    const backgroundCards = classNames({
      _white: this.props.style === "default" ? false : true,
    });
    if (this.props.data) {
      cards = this.props.data.map((article, index) => {
        const { title, body, id } = article;
        return (
          <div
            className={`card ${backgroundCards}`}
            key={index}
            onClick={() => this.detailsHandler(id)}
          >
            <h6 className="ref">Title: {title}</h6>
            <p>{body}</p>
          </div>
        );
      });
    }

    return (
      <div className={`card-wrapper ${backgroundColor}`}>
        <SearchParams amountOfValues={cards.length} />
        {this.props.loading ? <Downloading /> : cards}
        <p onClick={this.moreCards}>Click here to get more!</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading,
    amount: state.amount,
    style: state.style,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: (amount) => dispatch(getNews(amount)),
    amountOfCards: () => dispatch(amountOfCards()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cards));
