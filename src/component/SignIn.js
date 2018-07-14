import { login, resetPassword } from './Auth'

import React, { Component } from "react";
import firebase from "firebase";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from './Auth'
import { bindActionCreators } from "redux";
import {Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
// import "./firebaseui.css";
import logo from "./Bible-Photo.png";
import * as actions from "./action";

class SignIn extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/Dashboard");
      }
    });
  }

  componentDidMount() {
    const { authUI } = this.props.state.auth;

    let uiConfig = {
      signInSuccessUrl: "/Dashboard",
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };

    if (this.widget) {
      authUI.start("#firebaseui-auth-container", uiConfig);
    }
  }

  handleUser = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.userLogIn(this.state.email, this.state.password);
  };

  validationState = () => {
    if (this.props.state.auth.error) {
      switch (this.props.state.auth.error.code) {
        case "auth/wrong-password":
          return "error";
        case "auth/invalid-email":
          return "error";

        case "auth/user-not-found":
          return "error";
        default:
          return <div />;
      }
    }
  };

  renderError = () => {
    if (this.props.state.auth.error) {
      switch (this.props.state.auth.error.code) {
        case "auth/wrong-password":
          return (
            <h4 style={{ color: "white", textAlign: "center" }}>
              Sorry, wrong email or password
            </h4>
          );
        case "auth/invalid-email":
          return (
            <h4 style={{ color: "white", textAlign: "center" }}>
              Please enter a valid email
            </h4>
          );
        case "auth/user-not-found":
          return (
            <h4 style={{ color: "white", textAlign: "center" }}>
              Sorry, this user was not found.
            </h4>
          );
        default:
          return <div />;
      }
    }
  };

  renderSignIn = () => {
    if (window.location.search === "?mode=select") {
      return <div />;
    } else {
      // const { createUser, state } = this.props;
      console.log(this.props);
      return (
        <div className="container">
          <form onSubmit={event => this.handleSubmit(event)}>
            <FormGroup
              style={{ textAlign: "center" }}
              bsSize="large"
              validationState={this.validationState()}
            >
              <div className="centerhomepage">
                <div className="group">
                  <Input
                    type="text"
                    required
                    ref={ref => (this.email = ref)}
                    onChange={event => this.handleUser(event)}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label className="textinput">Email</label>
                </div>
                <br />
                <div className="group">
                  <Input
                    type="password"
                    required
                    onChange={event => this.handlePassword(event)}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label className="textinput">Password</label>
                </div>
                <br />
                {this.renderError()}
                  <div className="btnwrap">
                    <Button bsSize="large" type="submit" className="coolbtn">
                      Log In
                    </Button>
                  </div>
                  <br />
                  <div className="btnwrap">
                    <NavLink to="/">
                      <Button bsSize="large" type="button" className="coolbtn">
                        Sign Up
                      </Button>
                    </NavLink>
                  </div>
                <br />
                <NavLink to="/ForgotPassword">
                  <h5 style={{ color: "#0062CC" }}>forgot your password?</h5>
                </NavLink>
              </div>
            </FormGroup>
          </form>
        </div>
      );
    }
  };

  render() {
    // const { state } = this.props;
    return (
      <div className="centerhomepage">
        <div className="landingpage">
          <div className="row">
            <div className="centerhomepage">
              <div className="card">
                <div className="centerhomepage">
                  <img src={logo} className="logo" alt="" />
                  {this.renderSignIn()}
                  <div
                    id="firebaseui-auth-container"
                    ref={ref => (this.widget = ref)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);