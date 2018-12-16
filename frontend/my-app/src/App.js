import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notfound from "./components/404";
import Login from "./components/login";
import Signup from "./components/signup";
import Loggedin from "./components/logged";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="page-top">
          <Navbar> </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/loggedin" component={Loggedin} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
