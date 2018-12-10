import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <form>
              <div class="form-group">
                <label for="username" className="text-white">
                  UserName:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label for="email" className="text-white">
                  Email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group">
                <label for="password" className="text-white">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="confirmPassword" className="text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
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
