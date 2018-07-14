import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import logo from "./Bible-Photo.png";
import SignUp from "./SignUp";
// import ConnectWithUs from "./ConnectWithUs";
import * as actions from "./action";
// import "../css/App.css";

class Homepage extends Component {
  handleError = () => {
    if (this.props.state.auth.error) {
      return this.props.state.auth.error;
    } else {
      return null;
    }
  };

  render() {
    const { createUser, state } = this.props;
    console.log(this.props);
    return (
      <div className="container">
        <div className="content">
          <div className="row">
            <div>
              <div className="card">
                <div>
                  <img
                    src={logo}
                    className="logo"
                    alt="logo"
                    style={{ display: "block", margin: "auto" }}
                  />
                </div>
                <div className="text">
                  <SignUp
                    createUser={createUser}
                    error={this.handleError()}
                    authUI={state.auth.authUI}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ConnectWithUs /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);