import React, { Component } from "react";
import axios from "axios";

export default class extends Component {
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    axios
      .post("/auth/signup", this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err.response.data));
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
                  className="form-control"
                  id="username"
                  name="username"
                  value={this.state.name}
                  onChange={this.onChange}
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-white">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="Password"
                />
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
