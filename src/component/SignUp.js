import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FormGroup, Button, Input  } from 'reactstrap';
import { auth } from './Auth'
import firebase from "firebase";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    // this.email.focus();

    const { authUI } = this.props;

    // console.log("AUTHLINKS PROPS", authUI);
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

    const { email, password } = this.state;
    this.props.createUser(email, password);
  };

  renderError = () => {
    if (this.props.error) {
      switch (this.props.error.code) {
        case "auth/invalid-email":
          return <div>enter a real email idiot</div>;
        case "auth/weak-password":
          return <div>you wanna get hacked? enter a longer password</div>;
        case "auth/email-already-in-use":
          return <div>sorry this email has already been registered</div>;
        default:
          return <div />;
      }
    }
  };

  render() {
    // const { loggedIn } = this.props;

    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <FormGroup>
            <div>
              <div className="group">
                <Input
                  required
                  type="text"
                  inputRef={ref => {
                    this.email = ref;
                  }}
                  onChange={event => this.handleUser(event)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label className="textinput">Email</label>
              </div>
              <br />
              <div className="group">
                <Input
                  required
                  type="password"
                  onChange={event => this.handlePassword(event)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label className="textinput">Password</label>
              </div>
            </div>
            <br />
            
              <div className="btnwrap">
                <Button bsSize="large" type="submit" className="coolbtn">
                  Sign Up
                </Button>
              </div>
              <br />
              {this.renderError()}
              <div className="btnwrap">
                <Button className="coolbtn" bsSize="large">
                  <NavLink to="/SignIn">Sign In</NavLink>
                </Button>
              </div>
          </FormGroup>
        </form>
        <div id="firebaseui-auth-container" ref={ref => (this.widget = ref)} />
      </div>
    );
  }
}
