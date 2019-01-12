import React, { Component } from "react";
import { connect } from "react-redux";
import { myparties } from "../actions/parties";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.party.userparty) {
      this.ele = nextProps.party.userparty.map(item => {
        return (
          <div
            class="col-8 offset-2 card text-white bg-dark mb-3"
            key={item.party_id}
          >
            <div class="card-header"> {item.invitation} </div>
            <div class="card-body">
              <h5 class="card-title"> {item.invitation} </h5>
              <div class="card-text">
                <span class="white-text"> Location: {item.location} </span>
                <hr />
                <span class="white-text"> Venue Name: {item.venue_name} </span>
                <hr />
                <span class="white-text">
                  People Limit: {item.people_limit}
                </span>
                <hr />
                <button
                  class="btn btn-xs btn-primary mr-3"
                  onClick={() => this.individual(item.party_id)}
                >
                  Edit
                </button>
                <button
                  class="btn btn-xs btn-primary"
                  onClick={() => this.individual(item.party_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      });
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
  { myparties }
)(Myparties);
