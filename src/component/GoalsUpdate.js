import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./action";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
import {  Button } from "reactstrap";
import { firebaseDb } from "./firebase";
import firebase from "firebase";
import Popup from "react-popup";
import "./GoalsUpdate.css";

import UserDescription from "./UserDescription";

class GoalUpdate extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push("/");
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.loggedIn();
      }
    });
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDayChange = event => {
    this.setState({
      selectedDay: event.target.value
    });
    console.log(this.state);
  };

  handleWeekdayChange = newDays => {
    console.log(this.state);
    this.setState({
      selectedWeekday: newDays
    });
  };

  handleExerciseChange = event => {
    this.setState({
      selectedExercise: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.selectedDay ||
      !this.state.selectedWeekday 
      // !this.state.selectedExercise
    ) {
      Popup.alert("Fill out all your stats bro");
    } else {
      const thisUser = firebase.auth().currentUser;
      if (thisUser != null) {
        var uid = thisUser.uid;
      }
      const date = Date();
      console.log("SET STATE", this.state);
      const currentLocation = window.location.href;
      if (window.location.pathname === "/GoalsUpdate") {
        firebaseDb
          .ref("users/" + uid + "/calendar/")
          .push({
            selectedDay: this.state.selectedDay,
            selectedWeekday: this.state.selectedWeekday,
            selectedExercise: this.state.selectedExercise,
            benchTemplate: this.props.state.OneRep.Bench,
            deadliftTemplate: this.props.state.OneRep.Deadlift,
            squatTemplate: this.props.state.OneRep.Squat,
            ohpTemplate: this.props.state.OneRep.Overhead,
            date: date
          })
          .then(() => {
            if (window.location.pathname === "/GoalsUpdate") {
              this.props.history.push("/Dashboard");
            } else {
              Popup.alert("Your workout has been updated");
            }
          });
      } else if (window.location.pathname === "/Dashboard") {
        firebaseDb
          .ref("users/" + uid + "/calendar/")
          .push({
            selectedDay: this.state.selectedDay,
            selectedWeekday: this.state.selectedWeekday,
            selectedExercise: this.state.selectedExercise,
            benchTemplate: this.props.state.fetchCalendar.calendar
              .benchTemplate,
            deadliftTemplate: this.props.state.fetchCalendar.calendar
              .deadliftTemplate,
            squatTemplate: this.props.state.fetchCalendar.calendar
              .squatTemplate,
            ohpTemplate: this.props.state.fetchCalendar.calendar.ohpTemplate,
            date: date
          })
          .then(() => {
            if (window.location.pathname === "/Dashboard") {
              Popup.alert("Your workout has been updated");
            }
          });
      }
    }
  };

  render() {
    function checkBoxlimit(checkgroup, limit){
      var checkgroup=checkgroup
      var limit=limit
      for (var i=0; i<checkgroup.length; i++){
        checkgroup[i].onclick=function(){
        var checkedcount=0
        for (var i=0; i<checkgroup.length; i++)
          checkedcount+=(checkgroup[i].checked)? 1 : 0
        if (checkedcount>limit){
          Popup.alert("You can only select a maximum of "+limit+" checkBoxes")
          this.checked=false
          }
        }
      }
    }
    if (this.state.selectedDay === "2days") {
    }
    return (
      <div className="goalUpdate">
        <h2 className="h2">Update goals below fam!</h2>
        <UserDescription />
        <form ref="goalUpdateForm">
          {/* <h4>What is your overall fitness goal?</h4>
          <input type="text" placeholder="insert your goals here" /> */}
          <br />
          <div className="row">
            <div className="col-xs-12">
              <h2 className="h2">
                <strong>Split (Lifting Days per Week)</strong>
              </h2>
              <div className="test-form">
                <div className="custom-radio__wrapper">
                  <input
                    name="testcheck"
                    id="check1"
                    className="custom-radio__input"
                    ref="twoDays"
                    type="radio"
                    value="2days"
                    checked={this.state.selectedDay === "2days"}
                    onChange={this.handleDayChange}
                  />
                  <label htmlFor="check1" className="custom-radio__label">
                    2 Days
                  </label>
                </div>
                <br />
                <div className="custom-radio__wrapper">
                  <input
                    name="testcheck"
                    id="check2"
                    className="custom-radio__input"
                    type="radio"
                    ref="threeDays"
                    value="3days"
                    checked={this.state.selectedDay === "3days"}
                    onChange={this.handleDayChange}
                  />
                  <label htmlFor="check2" className="custom-radio__label">
                    3 Days
                  </label>
                </div>
                <br />
                <div className="custom-radio__wrapper">
                  <input
                    name="days"
                    id="check3"
                    className="custom-radio__input"
                    type="radio"
                    ref="fourDays"
                    value="4days"
                    checked={this.state.selectedDay === "4days"}
                    onChange={this.handleDayChange}
                  />
                  <label htmlFor="check3" className="custom-radio__label">
                    4 Days
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* How do we make sure that our component's state changes when user clicks on our radio buttons?
React offers onChange property that we can pass to our <input> components to handle changes. We then create an onChange
function that updates the state of our buttons */}

          <br />
          <h2 className="h2">
            <strong>
              That's great pansyboy! What days will you be exercising on?
            </strong>
          </h2>
          <h3>
            <strong>Days of the week</strong>
          </h3>
          <br />
          <div className="row">
            <div className="col-xs-12">
              <CheckboxGroup
                ref="weekdays"
                name="checkBox"
                value={this.state.selectedWeekday}
                onChange={this.handleWeekdayChange}
              >
                <div className="content">
                  <label className="checkBox">
                    <Checkbox id="ch1" name="checkBox" value={1} />
                    <div className="checkboxtransition" />
                  </label>
                  <label htmlFor="ch1" className="checkBoxLabel">
                    <b>Monday</b>
                  </label>
                  <label className="checkBox">
                    <Checkbox id="ch2" name="checkBox" value={2} />
                    <div className="checkboxtransition" />
                  </label>
                  <label htmlFor="ch2" className="checkBoxLabel">
                    Tuesday
                  </label>
                  <label className="checkBox">
                    <Checkbox id="ch3" name="checkBox" value={3} />
                    <div className="checkboxtransition" />
                  </label>
                  <label htmlFor="ch3" className="checkBoxLabel">
                    Wednesday
                  </label>
                  <label className="checkBox">
                    <Checkbox id="ch4" name="checkBox" value={4} />
                    <div className="checkboxtransition" />
                  </label>
                  <label htmlFor="ch4" className="checkBoxLabel">
                    Thursday
                  </label>
                  <label className="checkBox">
                    <Checkbox id="ch5" name="checkBox" value={5} />
                    <div className="checkboxtransition" />
                  </label>
                  <label htmlFor="ch5" className="checkBoxLabel">
                    Friday
                  </label>
                  <label className="checkBox">
                    <Checkbox id="ch6" name="checkBox" value={6} />
                    <div className="checkboxtransition" />
                  </label>
                  <label htmlFor="ch6" className="checkBoxLabel">
                    Saturday
                  </label>
                  <label className="checkBox">
                    <Checkbox id="ch7" name="checkBox" value={0} />
                    <div className="checkboxtransition" />
                  </label>
                  <label htmlFor="ch7" className="checkBoxLabel">
                    Sunday
                  </label>
                </div>
              </CheckboxGroup>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xs-12">
              <h2 className="h2">
                <strong>Preferred Exercise Template</strong>
              </h2>
              <div className="test-form">
                <div className="custom-radio__wrapper">
                  <input
                    name="exercise"
                    id="rd1"
                    className="custom-radio__input"
                    type="radio"
                    value="boringButBig"
                    checked={this.state.selectedExercise === "boringButBig"}
                    onChange={this.handleExerciseChange}
                  />
                  <label htmlFor="rd1" className="custom-radio__label">
                    Boring But Big
                  </label>
                </div>
                <br />
                <div className="custom-radio__wrapper">
                  <input
                    name="exercise"
                    id="rd2"
                    className="custom-radio__input"
                    type="radio"
                    value="triumvirate"
                    checked={this.state.selectedExercise === "triumvirate"}
                    onChange={this.handleExerciseChange}
                  />
                  <label htmlFor="rd2" className="custom-radio__label">
                    Triumvirate
                  </label>
                </div>
                <br />
                <div className="custom-radio__wrapper">
                  <input
                    name="exercise"
                    id="rd3"
                    className="custom-radio__input"
                    type="radio"
                    value="jackShit"
                    checked={this.state.selectedExercise === "jackShit"}
                    onChange={this.handleExerciseChange}
                  />
                  <label htmlFor="rd3" className="custom-radio__label">
                    I'm Not Doing Jack Shit <b>-1 DAY MAX-</b>
                  </label>
                </div>
                <br />
                <div className="custom-radio__wrapper">
                  <input
                    name="exercise"
                    id="rd4"
                    className="custom-radio__input"
                    type="radio"
                    value="perBible"
                    checked={this.state.selectedExercise === "perBible"}
                    onChange={this.handleExerciseChange}
                  />
                  <label htmlFor="rd4" className="custom-radio__label">
                    Periodization Bible
                  </label>
                </div>
                <br />
                <div className="custom-radio__wrapper">
                  <input
                    name="exercise"
                    id="rd5"
                    className="custom-radio__input"
                    type="radio"
                    value="bodyweight"
                    checked={this.state.selectedExercise === "bodyweight"}
                    onChange={this.handleExerciseChange}
                  />
                  <label htmlFor="rd5" className="custom-radio__label">
                    Bodyweight
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br />
            <div className="btnwrap">
              <Button className="centerhomepage"
                type="submit"
                bsSize="large"
                className="coolbtn"
                onClick={event => this.handleSubmit(event)}
              >
                Submit Workout
              </Button>
            </div>
        </form>
        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={true}
          closeHtml={null}
          defaultOk="Ok"
          defaultCancel="Cancel"
          wildClasses={false}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(GoalUpdate);
