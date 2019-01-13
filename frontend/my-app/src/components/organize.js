import React, { Component } from "react";
import { connect } from "react-redux";
import { createparty } from "../actions/parties";
import { withRouter } from "react-router-dom";

class Organize extends Component {
  constructor() {
    super();
    this.state = {
      invitation: "College Party",
      location: "",
      venue_name: "",
      people_limit: "",
      cost: 0,
      additional_info: "",
      rsvp: 0
    };
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmission = e => {
    e.preventDefault();
    this.setState({
      cost: parseInt(this.state.cost),
      rsvp: parseInt(this.state.rsvp),
      people_limit: parseInt(this.state.people_limit)
    });
    this.props.createparty(this.state, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmission}>
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
              type="email"
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
              value={this.state.cost}
              onChange={this.handleChange}
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
            />
            <label className="custom-control-label" htmlFor="rsvp2">
              No Need - RSVP
            </label>
          </div>

          <small id="rsvp2" className="form-text text-muted">
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
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createparty }
)(withRouter(Organize));
