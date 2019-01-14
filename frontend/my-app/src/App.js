import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notfound from "./components/404";
import Login from "./components/login";
import Signup from "./components/signup";
import LoggedHome from "./components/loggedhome";
import { setCurrentUser } from "./actions/authActions";
import individualparty from "./components/individualparty";
import store from "./store/store";
import About from "./components/about";
import Myparties from "./components/myparties";
import Organize from "./components/organize";
import Editparty from "./components/editparty";

//Check for token everytime
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="page-top">
          <Navbar> </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={LoggedHome} />
            <Route path="/individualparty" component={individualparty} />
            <Route path="/editparty" component={Editparty} />
            <Route path="/organize" component={Organize} />
            <Route path="/myparties" component={Myparties} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
