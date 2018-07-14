import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Popup from 'react-popup'
import * as actions from './action';
import { firebaseDb } from './firebase';

class SetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.fetchUser(thisUser);
        this.props.loggedIn();
      }
    });
  }

  weeklyTemplate = (inputValues) => {
    let reps = 1
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
        t({ percent: 0.85, reps: "5+" })
      ],
      // week 2
      [
        t({ percent: 0.7, reps: 3 }),
        t({ percent: 0.8, reps: 3 }),
        t({ percent: 0.9, reps: "3+" })
      ],
      // week 3
      [
        t({ percent: 0.75, reps: 5 }),
        t({ percent: 0.85, reps: 3 }),
        t({ percent: 0.95, reps: "1+" })
      ],
      // week 4
      [
        t({ percent: 0.4, reps: 5 }),
        t({ percent: 0.5, reps: 5 }),
        t({ percent: 0.6, reps: "only 5" })
      ],
    ];
  };

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleWeight = event => {
    this.setState({
      weight: event.target.value
    });
  };

 //Weight/Reps: 98 x 5, 113 x 5, 128 x 5+
  handleSubmit = event => {
    event.preventDefault();
    // const Deadlift = this.weeklyTemplate(this.deadlift.value);
    // const Bench = this.weeklyTemplate(this.bench.value);
    // const Squat = this.weeklyTemplate(this.squat.value);
    // const Overhead = this.weeklyTemplate(this.ohp.value);

    console.log("LIFTS", this.squat.value)
    if (!this.weight) {
      alert('STATS NOT FILLED OUT');
    } else {
      const thisUser = firebase.auth().currentUser;
      if (thisUser != null) {
        var uid = thisUser.uid;
      }

      const date = Date();
      // const history = this.props.history;

      firebaseDb
        .ref('users/' + uid + '/user')
        .push({
          // weight: this.weight.value,
          // OneRepMax:{
          //   squatORM: this.squat.value,
          //   deadliftORM: this.deadlift.value,
          //   benchORM: this.bench.value,
          //   overheadPressORM: this.ohp.value,
          // },
          date: date
        })

        firebaseDb
        .ref('users/' + uid + '/calendar/')
        .push({
          // benchTemplate: Bench,
          // deadliftTemplate: Deadlift,
          // squatTemplate: Squat,
          // ohpTemplate: Overhead,
          date: date
        })
        .then(() => {
          alert("Stats Updated")
        });
    }
  };

  render() {
    const { state } = this.props;

    return (
      <div className="update-profile">
        <form >
          <FormGroup bsSize="small">
            <div className="container">
              <br />
              <h1 style={{ paddingTop: '80px' }}>Update Stats Below</h1>
              <br />
              <div className="group">
                <Input
                  required
                  type="text"
                  inputRef={ref => {this.weight = ref}}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">Current Weight: {state.user.weight + ' (lbs)'}</label>
              </div>
              <h2 className="workouts">Bench Press</h2>
              <br />
              <div className="group">
                <Input
                  required
                  type="text"
                  inputRef={ref => {this.bench = ref}}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">{state.user.ormBench + ' (lbs)'}</label>  
              </div>
              <h2 className="workouts">Overhead Press</h2>
              <br />
              <div className="group">
                <Input
                  required
                  type="text"
                  inputRef={ref => {this.ohp = ref}}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">{state.user.ormOverheadPress + ' (lbs)'}</label>  
              </div>
              <h2 className="workouts">Deadlift</h2>
              <br />
              <div className="group">
                <Input
                  required
                  type="text"
                  inputRef={ref => {this.deadlift = ref}}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">{state.user.ormDeadlift + ' (lbs)'}</label>  
              </div>
              <h2 className="workouts">Squats</h2>
              <br />
              <div className="group">
                <Input
                  required
                  type="text"
                  inputRef={ref => {this.squat = ref}}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">{state.user.ormSquat + ' (lbs)'}</label>  
              </div>
            </div>
              <Button
                bsSize="large"
                type="button"
                onClick={event => this.handleSubmit(event)}
                bsStyle="primary"
                style={{ display: 'block', margin: 'auto'}}>
                Update
              </Button>
          </FormGroup>
        </form>
      </div>
    );
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
