import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/loggedin");
    }
  }

  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase"> Party With Us </h1>
            <h2 className="text-white mx-auto mt-2 mb-5">
              Get notifications for the party and festival dinners from unknown
              person. Life is Beautiful.... Live it.
            </h2>
            <Link
              to="/login"
              className="btn btn-primary btn-sm js-scroll-trigger"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
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
