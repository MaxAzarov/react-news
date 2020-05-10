import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./Carts.css";
import SearchParams from "../SearchParams/SearchParams";
import { getNews, postInfo } from "./../redux/actions/actions";
import Downloading from "../Downloading/Downloading";
class Cards extends React.Component {
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
      console.log(this.props.data);
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
    return (
      <div className="card-wrapper">
        <SearchParams amountOfValues={cards.length} />
        {this.props.loading ? <Downloading /> : cards}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => dispatch(getNews()),
    postInfo: (...datanews) => dispatch(postInfo(...datanews)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cards));
