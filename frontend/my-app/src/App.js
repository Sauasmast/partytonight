import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notfound from "./components/404";
import Login from "./components/login";
import Signup from "./components/signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <body id="page-top">
          <Navbar> </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Notfound} />
          </Switch>
        </body>
      </BrowserRouter>
    );
  }
}

export default App;
