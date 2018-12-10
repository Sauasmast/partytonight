import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase"> Party With Us </h1>
            <h2 class="text-white mx-auto mt-2 mb-5">
              Get notifications for the party and festival dinners from unknown
              person. Life is Beautiful.... Live it.
            </h2>
            <Link to="/login" class="btn btn-primary btn-sm js-scroll-trigger">
              Login
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
