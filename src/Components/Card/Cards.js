import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./Carts.css";
import SearchParams from "../SearchParams/SearchParams";
import { getNews } from "./../../redux/actions/actions";
import Downloading from "../Downloading/Downloading";
class Cards extends React.Component {
  async componentDidMount() {
    this.props.getNews();
  }

  detailsHandler(id) {
    this.props.history.push(`${id}`);
  }

  render() {
    let cards;
    // const array1 = [
    //   { title: "title", body: "body" },
    //   { title: "title2", body: "body2" },
    // ];

    // console.log(array1.includes(2));
    // console.log(array1.filter((item) => item.title.includes("")));
    if (this.props.data) {
      cards = this.props.data.map((article, index) => {
        const { title, body, id } = article;
        return (
          <div
            className="card"
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cards));
