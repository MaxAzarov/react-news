import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./Carts.css";
import SearchParams from "../SearchParams/SearchParams";
import { getNews, postInfo } from "./../redux/actions/actions";
import Downloading from "../Downloading/Downloading";
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NewsLength: 0,
    };
  }

  async componentDidMount() {
    this.props.getNews();
  }

  detailsHandler(...info) {
    this.props.postInfo(info);
    this.props.history.push(`${info[0]}`);
  }

  render() {
    let cards; // length of received data and all cards;
    if (this.props.data) {
      cards = this.props.data.map((article, index) => {
        const { description, url, category } = article;
        return (
          <div
            className="card"
            key={index}
            onClick={() => this.detailsHandler(description, url, category)}
          >
            <h6 className="ref">Catagory: {category}</h6>
            <p>{description}</p>
            <p>More: {url}</p>
          </div>
        );
      });
    }
    console.log(cards.length);
    return (
      <div className="card-wrapper">
        <SearchParams amountOfValues={this.state.NewsLength} />
        {cards == null ? <Downloading></Downloading> : cards}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => dispatch(getNews()),
    postInfo: (...datanews) => dispatch(postInfo(...datanews)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cards));
