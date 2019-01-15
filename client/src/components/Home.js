import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  render() {
    return (
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase"> Party With Us </h1>
          <h2 className="text-white mx-auto mt-2">
            Get notifications for the party and festival dinners from unknown
            person. Life is Beautiful.... Live it.
          </h2>
          <small class="form-text text-white mb-4">
            New Features and Updates will be added day by day (Under
            construction)
          </small>
          <Link
            to="/login"
            className="btn btn-primary btn-sm js-scroll-trigger"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStatetoProps,
  null
)(Home);
