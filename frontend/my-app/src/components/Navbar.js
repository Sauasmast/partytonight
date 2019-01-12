import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutuser } from "../actions/authActions";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logoutuser(this.props.history);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const notlogged = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger text-white" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger text-white" to="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    const loggedin = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <p className="nav-link js-scroll-trigger text-white">
            Hey, {user.username}
          </p>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link js-scroll-trigger text-white"
            to="/myparties"
          >
            Your Parties
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger text-white" href="#projects">
            Parties
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link js-scroll-trigger text-white"
            href=""
            onClick={this.logout}
          >
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link
            className="navbar-brand js-scroll-trigger"
            to={isAuthenticated ? "/home" : "/"}
          >
            Party With Us
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {isAuthenticated ? loggedin : notlogged}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(
  mapStatetoProps,
  { logoutuser }
)(withRouter(Navbar));
