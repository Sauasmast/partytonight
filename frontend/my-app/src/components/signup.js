import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import { withRouter } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        errors: nextProps.error
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      confirmPassword: this.state.confirmPassword
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="username" className="text-white">
                  UserName:
                </label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": this.state.errors.username
                  })}
                  id="username"
                  name="username"
                  value={this.state.name}
                  onChange={this.onChange}
                  placeholder="Username"
                />
                {this.state.errors.username && (
                  <div className="invalid-feedback">
                    {this.state.errors.username}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-white">
                  Email:
                </label>
                <input
                  type="email"
                  className={classnames("form-control", {
                    "is-invalid": this.state.errors.email
                  })}
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Email Address"
                />
                {this.state.errors.email && (
                  <div className="invalid-feedback">
                    {this.state.errors.email}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className={classnames("form-control", {
                    "is-invalid": this.state.errors.password
                  })}
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="Password"
                />
                {this.state.errors.password && (
                  <div className="invalid-feedback">
                    {this.state.errors.password}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  id="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.onChange}
                  placeholder="Password"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

const mapStatetoProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStatetoProps,
  { registerUser }
)(withRouter(Signup));
