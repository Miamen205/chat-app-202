import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./action";

class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    submitted: false
  };

  componentWillMount() {
    if (this.props.state.OneRep.calculatedMax) {
      this.setState({ submitted: true });
    }
  }

  componentDidMount() {
    if (!this.state.Bench) {
      this.refs.BenchWeight.focus();
    }
  }

  oneRepMax = (weight, reps) => {
    let max = (weight * reps * 0.0333 + weight) * 0.9;
    return Math.ceil(max);
  };

  onCalculate = event => {
    this.setState({
      Bench: this.oneRepMax(
        parseInt(this.refs.BenchWeight.value),
        parseInt(this.refs.BenchReps.value)
      ),
      Overhead: this.oneRepMax(
        parseInt(this.refs.OverheadWeight.value),
        parseInt(this.refs.OverheadReps.value)
      ),
      Deadlift: this.oneRepMax(
        parseInt(this.refs.DeadliftWeight.value),
        parseInt(this.refs.DeadliftReps.value)
      ),
      Squat: this.oneRepMax(
        parseInt(this.refs.SquatWeight.value),
        parseInt(this.refs.SquatReps.value)
      )
    });
  };

  FillinStats = event => {
    this.props.setORM(
      this.state.Bench,
      this.state.Overhead,
      this.state.Deadlift,
      this.state.Squat
    );
  };

  renderMaxes = () => {
    if (this.state.Bench) {
      return (
        <div>
          <h4>Bench: {this.state.Bench}</h4>
          <h4>Overhead: {this.state.Overhead}</h4>
          <h4>Deadlift: {this.state.Deadlift}</h4>
          <h4>Squat: {this.state.Squat}</h4>
          <button
            type="button"
            className="btn btn-primary"
            onClick={event => this.FillinStats(event)}
          >
            <span className="md-" /> Fill in stats
          </button>
          <button
            type="button"
            className="btn"
            style={{ float: "right" }}
            onClick={() => {
              this.setState({
                Bench: null,
                Overhead: null,
                Deadlift: null,
                Squat: null
              });
            }}
          >
            <span className="sm">back</span>
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {!this.state.Bench && (
          <div>
            <h2 className="workouts">Bench Press</h2>
            <br />
            <div className="group">
              <input
                required
                type="number ^[1-9]+$"
                min="1"
                ref="BenchWeight"
                className="inputtext"
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Weight</label>
            </div>
            <div className="group">
              <input
                required
                type="number"

                min="1"
                ref="BenchReps"
                className="inputtext"
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Reps</label>
            </div>
            <h2 className="workouts">Overhead Press</h2>
            <br />
            <div className="group">
              <input
                required
                type="number"

                min="1"
                ref="OverheadWeight"
                className="inputtext"
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Weight</label>
            </div>
            <div className="group">
              <input
                required
                type="number"

                min="1"
                ref="OverheadReps"
                className="inputtext"
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Reps</label>
            </div>
            <h2 className="workouts">Deadlift</h2>
            <br />
            <div className="group">
              <input
                required
                type="number"

                min="1"
                ref="DeadliftWeight"
                className="inputtext"
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Weight</label>
            </div>
            <div className="group">
              <input
                required
                type="number"

                min="1"
                ref="DeadliftReps"
                className="inputtext"
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Reps</label>
            </div>
            <h2 className="workouts">Squat</h2>
            <br />
            <div className="group">
              <input
                required
                type="number"

                min="1"
                ref="SquatWeight"
                className="inputtext"
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Weight</label>
            </div>
            <div className="group">
              <input
                required
                type="number"

                min="1"
                ref="SquatReps"
                className="inputtext"
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="textinput">Reps</label>
            </div>
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={event => this.onCalculate(event)}
            >
              <span className="md-" /> Calculate
            </button>
          </div>
        )}
        <div>{this.renderMaxes()}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
