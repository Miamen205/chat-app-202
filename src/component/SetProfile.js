import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import Popup from 'react-popup';
import './setProfile.css';
import Calculator from './repMaxCalculator';

import * as actions from './action';
import { firebaseDb } from './firebase';

class SetProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        this.props.loggedIn();
      }
    });
  }
  weeklyTemplate = inputValues => {
    let reps = 1;
    let max = parseInt(inputValues);
    const oneRepMax = Math.ceil(max);
    const t = ({ percent, reps }) =>
      `${Math.round(percent * oneRepMax)} x ${reps}`;
    //const t = ({ percent, reps }) => `${Math.round(percent * oneRepMax)}${unit} x ${reps}`;

    return [
      // week 1
      [
        t({ percent: 0.65, reps: 5 }),
        t({ percent: 0.75, reps: 5 }),
        t({ percent: 0.85, reps: '5+' })
      ],
      // week 2
      [
        t({ percent: 0.7, reps: 3 }),
        t({ percent: 0.8, reps: 3 }),
        t({ percent: 0.9, reps: '3+' })
      ],
      // week 3
      [
        t({ percent: 0.75, reps: 5 }),
        t({ percent: 0.85, reps: 3 }),
        t({ percent: 0.95, reps: '1+' })
      ],
      // week 4
      [
        t({ percent: 0.4, reps: 5 }),
        t({ percent: 0.5, reps: 5 }),
        t({ percent: 0.6, reps: 'only 5' })
      ]
    ];
  };

  handleWeight = event => {
    this.setState({
      weight: event.target.value
    });
  };

  handleOneRepMax = event => {
    this.setState({
      oneRepMax: {
        squatORM: this.refs.squat.value,
        deadliftORM: this.refs.deadlift.value,
        benchORM: this.refs.bench.value,
        overheadPressORM: this.refs.ohp.value
      }
    });
  };

  calculatorButton = event => {
    Popup.alert(<Calculator />, '1 Rep Max Calculator');
  };

  handleFullName = event => {
    this.setState({
      fullName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const Deadlift = this.weeklyTemplate(this.refs.deadlift.value);
    const Bench = this.weeklyTemplate(this.refs.bench.value);
    const Squat = this.weeklyTemplate(this.refs.squat.value);
    const Overhead = this.weeklyTemplate(this.refs.ohp.value);
    if (!this.props.state.OneRep) {
      Popup.alert('Fill out all your stats bro', 'All stats not filled out');
    } else {
      const thisUser = firebase.auth().currentUser;
      if (thisUser != null) {
        var uid = thisUser.uid;
      }

      if(window.location.pathname === "/SetProfile"){
        var pushORM;

        if (this.props.state.OneRep.calculatedMax) {
          if (this.props.state.OneRep.calculatedMax.bench) {
            pushORM = {
              squatORM: this.refs.squat.value,
              deadliftORM: this.refs.deadlift.value,
              benchORM: this.refs.bench.value,
              overheadPressORM: this.refs.ohp.value
            };
          }
        } else {
          pushORM = this.state.oneRepMax;
        }
      }

      const date = Date();
      if (window.location.pathname === '/Dashboard') {
        const date = Date();
        console.log('YEEEEEAAHHH', this.state);
        firebaseDb.ref('users/' + uid + '/user').push({
          weight: this.state.weight,
          oneRepMax: this.state.oneRepMax,
          date: date
        });

        firebaseDb
          .ref('users/' + uid + '/calendar/')
          .push({
            selectedDay: this.props.state.fetchCalendar.calendar.selectedDay,
            selectedWeekday: this.props.state.fetchCalendar.calendar
              .selectedWeekday,
            selectedExercise: this.props.state.fetchCalendar.calendar
              .selectedExercise,
            benchTemplate: Bench,
            deadliftTemplate: Deadlift,
            squatTemplate: Squat,
            ohpTemplate: Overhead,
            date: date
          })
          .then(alert('Stats Updated'));
      } else if (window.location.pathname === '/SetProfile') {
        const date = Date();
        firebaseDb
          .ref('users/' + uid + '/user')
          .push({
            weight: this.state.weight,
            oneRepMax: pushORM,
            fullName: this.state.fullName,
            date: date
          })
          .then(() => {
            this.props.history.push('/GoalsUpdate');
          });
        this.props.oneRep(Bench, Overhead, Deadlift, Squat);
      }
    }
  };

  
  render() {
    if(window.location.pathname === "/SetProfile"){
    if (this.props.state.OneRep.calculatedMax) {
      if (this.props.state.OneRep.calculatedMax.bench) {
        const calculatedMax = this.props.state.OneRep.calculatedMax;
        this.refs.squat.value = calculatedMax.squat;
        this.refs.deadlift.value = calculatedMax.deadlift;
        this.refs.bench.value = calculatedMax.bench;
        this.refs.ohp.value = calculatedMax.overhead;
      }
    }
  }

    console.log("set profile props", this.props);
    if(window.location.pathname === '/SetProfile'){
    return (
      <div className="container3">
        <div className="card3">
          <h2 className="contentinfo">
            <b>
              <u>Enter Stats Below</u>
            </b>
          </h2>
          <br />
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className="group">
              <input
                className="inputtext"
                required
                type="text"
                onChange={event => this.handleFullName(event)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Username</label>
            </div>
            <div className="group">
              <input
                className="inputtext"
                required
                type="number"
                min="1"
                onChange={event => this.handleWeight(event)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Current Weight (lbs)</label>
            </div>
            <br />
              <div className="btnwrap">
                <Button className="centerhomepage"
                  type="button"
                  bsSize="medium"
                  className="coolbtn"
                  onClick={event => this.calculatorButton(event)}>
                  Calculator
                </Button>
              </div>
            
            <div id="one-rep-max">
              <h4>What are your current one rep maxes?</h4>
              <br />
              <div className="group">
                <input
                  required
                  type="number"
                  min="1"
                  ref="bench"
                  onChange={event => this.handleOneRepMax(event)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label className="textinput">Bench Press Weight</label>
              </div>
              <div className="group">
                <input
                  required
                  type="number"
                  min="1"
                  ref="ohp"
                  onChange={event => this.handleOneRepMax(event)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label className="textinput">Overhead Press Weight</label>
              </div>
              <div className="group">
                <input
                  required
                  type="number"
                  min="1"
                  ref="deadlift"
                  onChange={event => this.handleOneRepMax(event)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label className="textinput">Deadlift Weight</label>
              </div>
              <div className="group">
                <input
                  required
                  type="number"
                  min="1"
                  ref="squat"
                  onChange={event => this.handleOneRepMax(event)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label className="textinput">Squat Weight</label>
              </div>
              <br />
            </div>
              <div className="btnwrap">
                <Button className="centerhomepage" type="submit" className="coolbtn" bsSize="medium">
                  Get Started!
                </Button>
              </div>
          </form>
        </div>
        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={true}
          closeHtml={null}
          defaultOk="Close"
          defaultCancel="Cancel"
          wildClasses={false}
        />
      </div>
    );
  }else {
    return(
      <div className="container3">
      <div className="card3">
          <h2 className="contentinfo">
            <b>
              <u>Enter Stats Below</u>
            </b>
          </h2>
          <br />
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className="group">
              <input
                className="inputtext"
                required
                type="number"
                min="1"
                onChange={event => this.handleWeight(event)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Current Weight (lbs)</label>
            </div>
            <br />
            <div id="one-rep-max">
            <h4>What are your current one rep maxes?</h4>
            <br />
            <div className="group">
              <input
                required
                type="number"
                min="1"
                ref="bench"
                onChange={event => this.handleOneRepMax(event)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Bench Press Weight</label>
            </div>
            <div className="group">
              <input
                required
                type="number"
                min="1"
                ref="ohp"
                onChange={event => this.handleOneRepMax(event)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Overhead Press Weight</label>
            </div>
            <div className="group">
              <input
                required
                type="number"
                min="1"
                ref="deadlift"
                onChange={event => this.handleOneRepMax(event)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Deadlift Weight</label>
            </div>
            <div className="group">
              <input
                required
                type="number"
                min="1"
                ref="squat"
                onChange={event => this.handleOneRepMax(event)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Squat Weight</label>
            </div>
            <br />
            </div>
              <div className="btnwrap">
                <Button className="centerhomepage"
                  type="submit" 
                  className="coolbtn"
                  bsSize="medium"
                >
                Update Stats
                </Button>
              </div>
          </form>
      </div>
    </div>
    )
  }
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SetProfile);

// <div id="one-rep-max">
// <button
//   type="button"
//   className="btn btn-primary"
//   onClick={event => this.calculatorButton(event)}>
//   <span className="md-" /> 1 Rep Max Calculator
// </button>
// <h4>What are your current one rep maxes?</h4>

// <label>Bench Press: </label>
// <input
//   type="text"
//   ref={ref => (this.bench = ref)}
//   placeholder="Weight (lbs)"
//   onChange={event => this.handleOneRepMax(event)}
// />
// <br />

// <label>Overhead Press: </label>
// <input
//   type="text"
//   ref={ref => (this.overheadPress = ref)}
//   placeholder="Weight (lbs)"
//   onChange={event => this.handleOneRepMax(event)}
// />
// <br />

// <label>Deadlift: </label>
// <input
//   type="text"
//   placeholder="Weight (lbs)"
//   ref={ref => (this.deadlift = ref)}
//   onChange={event => this.handleOneRepMax(event)}
// />
// <br />

// <label>Squats: </label>
// <input
//   type="text"
//   ref={ref => (this.squat = ref)}
//   placeholder="Weight (lbs)"
//   onChange={event => this.handleOneRepMax(event)}
// />
// <br />
// </div>
