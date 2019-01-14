import React, { Component } from "react";
import { connect } from "react-redux";
import { myparties, deleteparty } from "../actions/parties";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Myparties extends Component {
  constructor() {
    super();
    this.ele = [];
  }

  componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    } else {
      this.props.myparties();
    }
  }

  onEditClick = item => {
    this.props.history.push({
      pathname: "/editparty",
      state: item
    });
  };

  delete = party_id => {
    this.props.deleteparty(party_id, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.party.userparty) {
      if (nextProps.party.userparty.length !== 0) {
        this.ele = nextProps.party.userparty.map((item, index) => {
          return (
            <div
              className="col-8 offset-2 card text-white bg-dark mb-3"
              key={index}
            >
              <div className="card-header"> {item.invitation} </div>
              <div className="card-body">
                <h5 className="card-title"> {item.invitation} </h5>
                <div className="card-text">
                  <span className="white-text">
                    {" "}
                    Location: {item.location}{" "}
                  </span>
                  <hr />
                  <span className="white-text">
                    {" "}
                    Venue Name: {item.venue_name}{" "}
                  </span>
                  <hr />
                  <span className="white-text">
                    People Limit: {item.people_limit}
                  </span>
                  <hr />
                  <button
                    className="btn btn-xs btn-primary mr-3"
                    onClick={() => this.onEditClick(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-xs btn-primary"
                    onClick={() => this.delete(item.party_id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        });
      } else {
        this.ele = (
          <div>
            <h2> You have no party invitation right now. </h2>
            <h2>
              To create a party. <Link to="/organize"> Click here </Link>
            </h2>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div>
        <div> {this.ele} </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  party: state.parties
});

export default connect(
  mapStateToProps,
  { myparties, deleteparty }
)(withRouter(Myparties));
