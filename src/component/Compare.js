import React, { Component } from "react";
import firebase from "firebase";
import { Col, Row, Jumbotron, } from "reactstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import profilePicture from "./Bible-Photo.png";
import * as actions from "./action";

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push("/");
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.setState({
          thisUser: thisUser
        });

        this.props.fetchProfileImage(thisUser.uid);
        this.props.fetchProgress(thisUser);
        this.props.fetchUser(thisUser);
        this.props.loggedIn();
      }
    });
  }

  handleCompare = event => {
    this.setState({
      compare: event.target.value
    });

    this.props.fetchOldStats(this.state.thisUser, event.target.value);
  };

  renderCompare = () => {
    return (
      <select
        style={{ margin: "auto" }}
        onChange={event => this.handleCompare(event)}
      >
        <option value="">Select a Time</option>
        <option value="Day One">Day One</option>
      </select>
    );
  };

  renderImage = () => {
    if (this.props.state.user.profileImage === null) {
      return (
        <div>
          <img
            src={profilePicture}
            alt="profile pic"
            style={{ width: "12vw" }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={this.props.state.user.profileImage}
            style={{ width: "12vw" }}
            alt=""
          />
        </div>
      );
    }
  };

  renderPresent = () => {
    const { state } = this.props;

    if (!this.state.compare) {
      return (
        <Col
          md={12}
          style={{ textAlign: 'center', display: 'inline', margin: 'auto' }}>
          <h2>Present Day</h2>
          <br />
          {this.renderImage()}
          <br />
          <h4>Current Weight: {state.user.weight}</h4>
          <h4>Bench: {state.user.ormBench}</h4>
          <h4>Overhead Press: {state.user.ormOverheadPress}</h4>
          <h4>Squats: {state.user.ormSquat}</h4>
          <h4>Deadlift: {state.user.ormDeadlift}</h4>
        </Col>
      );
    } else {
      return (
        <Col md={6} style={{ textAlign: 'center' }}>
          <h2>Present Day</h2>
          <br />
          {this.renderImage()}
          <br />
          <h4>Current Weight: {state.user.weight}</h4>
          <h4>Bench: {state.user.ormBench}</h4>
          <h4>Overhead Press: {state.user.ormOverheadPress}</h4>
          <h4>Squats: {state.user.ormSquat}</h4>
          <h4>Deadlift: {state.user.ormDeadlift}</h4>
        </Col>
      );
    }
  };

  render() {
    const { state } = this.props;

    console.log("COMPARE PROPS", this.props);

    return (
      <div className="Compare" style={{ textAlign: 'center' }}>
        <Jumbotron>
          <Row>
            <Col md={6} style={{ textAlign: 'center' }}>
              {this.state.compare && (
                <div>
                  <h2>{this.state.compare}</h2>
                  <br />
                  {this.renderImage()}
                  <br />
                  <h4>Current Weight: {state.user.oldStats.weight}</h4>
                  <h4>Bench: {state.user.oldStats.ormBench}</h4>
                  <h4>
                    Overhead Press: {state.user.oldStats.ormOverheadPress}
                  </h4>
                  <h4>Squats: {state.user.oldStats.ormSquat}</h4>
                  <h4>Deadlift: {state.user.oldStats.ormDeadlift}</h4>
                </div>
              )}
            </Col>
            {this.renderPresent()}
          </Row>
          {this.renderCompare()}
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
