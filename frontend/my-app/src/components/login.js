import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <form>
              <div class="form-group">
                <label for="username" className="text-white">
                  UserName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="User Name"
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
              <button className="btn btn-primary"> Login </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}
