import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginuser } from "../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
    if (nextProps.error) {
      this.setState({
        ...this.state,
        error: nextProps.error
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.loginuser(this.state);
  };

  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="username" className="text-white">
                  UserName
                </label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": this.state.error.username
                  })}
                  name="username"
                  id="username"
                  placeholder="User Name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                {this.state.error.username && (
                  <div className="invalid-feedback">
                    {this.state.error.username}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input
                  type="password"
                  className={classnames("form-control", {
                    "is-invalid": this.state.error.password
                  })}
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {this.state.error.password && (
                  <div className="invalid-feedback">
                    {this.state.error.password}
                  </div>
                )}
              </div>
              <button className="btn btn-primary"> Login </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { loginuser }
)(Login);
