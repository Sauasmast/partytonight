import React, { Component } from "react";
import { connect } from "react-redux";
import { party } from "../actions/parties";

class LoggedHome extends Component {
  constructor() {
    super();
    this.eles = [];
    this.state = {
      party: []
    };
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    } else {
      this.props.party();
    }
  }

  individual = party_id => {
    console.log(party_id);
    console.log(this.props.history);
    this.props.history.push({
      pathname: "/individualparty/",
      state: { id: party_id }
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.parties) {
      if (nextProps.parties.parties.length === 0) {
        this.eles.push(<h1> There is no any party to list. </h1>);
      } else {
        this.eles = nextProps.parties.parties.map((item, key) => (
          <div
            className="col-8 offset-2 card text-white bg-dark mb-3"
            key={item.party_id}
          >
            <div className="card-header"> By user </div>
            <div className="card-body">
              <h5 className="card-title"> {item.invitation} </h5>
              <div className="card-text">
                <span className="white-text"> Location: {item.location} </span>
                <hr />
                <span className="white-text">
                  {" "}
                  Venue Name: {item.venue_name}{" "}
                </span>
                <hr />
                <span className="white-text">
                  People Limit: {item.people_limit}
                </span>
                <hr />
                <button
                  className="btn btn-xs btn-primary"
                  onClick={() => this.individual(item.party_id)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ));

        // this.eles.push(
        //   <h1>
        //     There is a party of length {nextProps.parties.parties.length} on
        //     list.
        //   </h1>
        // );
      }
    }

    if (nextProps.error) {
      this.setState({
        ...this.state,
        error: nextProps.error
      });
    }
  }

  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <div className="row"> {this.eles} </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  parties: state.parties
});

export default connect(
  mapStateToProps,
  { party }
)(LoggedHome);
