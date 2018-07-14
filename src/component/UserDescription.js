import React, { Component } from "react";
import { FormGroup, Form,  Label, Input, FormText, Button } from 'reactstrap';
import firebase from "firebase";
import Popup from "react-popup";

import { firebaseDb } from "./firebase";

class UserDescription extends Component {
  handleDesc = event => {
    event.preventDefault();

    if (!this.state.desc) {
      Popup.Alert("NOT FILLED OUT YO");
    } else {
      const thisUser = firebase.auth().currentUser;
      if (thisUser != null) {
        var uid = thisUser.uid;
      }

      const date = Date();

      firebaseDb
        .ref("users/" + uid + "/user/")
        .push({
          desc: this.state.desc,
          date: date
        })
        .then(() => {
          alert("Your description has been updated.");
        })
        .then(() => {
          this.setState({ desc: "" });
        });
    }
  };

  handleInput = event => {
    this.setState({
      desc: event.target.value
    });
  };

  render() {
    return (
      <div className="userdisbox">
        <h1>Settings</h1>
        <form
          onSubmit={event => this.handleDesc(event)}
          style={{ width: "75vw", left: "50", marginLeft: "12.5vw" }}
        >
          <FormGroup controlId="formControlsTextarea">
            <Label>
              <h2>Tell us about yourself:</h2>
            </Label>
            <Input
              componentClass="textarea"
              maxLength="250"
              inputRef={ref => {
                this.description = ref;
              }}
              placeholder="Say what you're all about."
              onChange={event => this.handleInput(event)}
            />
          </FormGroup>
          <Button type="submit" className="btn btn-primary">
            Update description
          </Button>
        </form>
      </div>
    );
  }
}

export default UserDescription;
