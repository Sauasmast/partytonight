import React, { Component } from "react";
import { connect } from "react-redux";
import { getindividualparty } from "../actions/parties";

class individualparty extends Component {
  constructor() {
    super();
    this.ele = "";
  }

  componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    } else {
      this.props.getindividualparty(this.props.location.state.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.party) {
      let data = nextProps.party.indparty[0];
      this.ele = (
        <div>
          <div>
            By User: {data.user_id} on {data.created_at}
          </div>
          <div> Invitation for: {data.invitation} </div>
          <div> Location: {data.location} </div>
          <div> Venue Name: {data.venue_name} </div>
          <div> People Limit: {data.people_limit} </div>
          <div> Cost: {data.cost} </div>
          {data.rsvp === 1 ? (
            <button className="btn btn-primary btn-sm"> RSVP NOW</button>
          ) : (
            <p>
              There is not need to RSVP. Just show up at the party and have fun.
            </p>
          )}
          <div> Additional Info: {data.additional_info} </div>
        </div>
      );
    } else {
      this.ele = (
        <div>
          <p> Seems the value has been deleted </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container text-white">
        <h2> Party invitation </h2>
        <div>{this.ele}</div>
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
  { getindividualparty }
)(individualparty);
