import React, { Component } from "react";
import { connect } from "react-redux";
import { edparty } from "../actions/parties";
import { withRouter } from "react-router-dom";

class editparty extends Component {
  constructor(props) {
    super(props);
    let data = this.props.location.state;
    this.state = {
      party_id: data.party_id,
      invitation: data.invitation,
      location: data.location,
      venue_name: data.venue_name,
      people_limit: data.people_limit,
      cost: data.cost,
      additional_info: data.additional_info,
      rsvp: data.rsvp
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmission = e => {
    e.preventDefault();
    this.props.edparty(this.state, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmission} className="text-white">
          <div>
            <h2> Please fill out the form below for the information </h2>
          </div>
          <div className="form-group">
            <label htmlFor="invitation"> Invitation </label>
            <select
              className="form-control"
              id="invitation"
              name="invitation"
              onChange={this.handleChange}
              defaultValue={this.state.invitation}
            >
              <option name="invitation" value="College Party">
                College Party
              </option>
              <option name="invitation" value="Home Party">
                Home Party
              </option>
              <option name="invitation" value="Family Dinner">
                Family Dinner
              </option>
              <option name="invitation" value="Festival Invitation">
                Festival Invitation
              </option>
              <option name="invitation" value="Marriage Invitation">
                Marriage Invitation
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address"> Location: </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Address"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="venue_name"> Venue Name: </label>
            <input
              type="text"
              className="form-control"
              id="venue_name"
              name="venue_name"
              placeholder="Venue Name"
              value={this.state.venue_name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="people"> People Limit: </label>
            <input
              type="number"
              className="form-control"
              name="people_limit"
              id="people"
              placeholder="People Limit"
              value={this.state.people_limit}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cost"> Cost Per Person: </label>
            <input
              type="number"
              className="form-control"
              id="cost"
              name="cost"
              onChange={this.handleChange}
              value={this.state.cost}
            />
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="rsvp"
              name="rsvp"
              value={1}
              onChange={this.handleChange}
              className="custom-control-input"
              checked={parseInt(this.state.rsvp) === 1}
            />
            <label className="custom-control-label" htmlFor="rsvp">
              Need - RSVP
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="rsvp2"
              name="rsvp"
              value={0}
              className="custom-control-input"
              onChange={this.handleChange}
              checked={parseInt(this.state.rsvp) === 0}
            />
            <label className="custom-control-label" htmlFor="rsvp2">
              No Need - RSVP
            </label>
          </div>
          <small id="rsvp2" className="form-text text-white">
            If nothing is selected then rspv will not be required.
          </small>
          <div className="form-group">
            <label htmlFor="additional_info"> Additional Information : </label>
            <textarea
              className="form-control"
              id="additional_info"
              rows="3"
              name="additional_info"
              placeholder="Bring your own beer, DJ in the house, Must dress casual"
              value={this.state.additional_info}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={this.onSubmission}
            className="btn btn-primary btn-xs"
          >
            Edit Party
          </button>
        </form>
      </div>
    );
  }
}

const mapPropsToState = state => ({
  auth: state.auth
});

export default connect(
  mapPropsToState,
  { edparty }
)(editparty);
