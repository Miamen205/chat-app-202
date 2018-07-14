import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Login from './component/Login';
import Register from './component/Register';
import SignIn from "./component/SignIn";
import Homepage from './component/Home';
// import Profilepage from './component/Profile';
import Contactpage from './component/Contact';
import Aboutpage from './component/About';
import Chatpage from './component/Chat';
import { logout } from './component/Auth';
import GoalsUpdate from "./component/GoalsUpdate";
import SetProfile from "./component/SetProfile";
import Navigation from"./component/Navbar";
import { firebaseAuth } from './component/firebase';
import WorkoutApi from './component/workoutApi'
import Dashboard from "./component/DashboardContainer";
import ForgotPassword from "./component/ForgotPassword";
// import QandA from "./component/QandA";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
render() {
  // const { state } = this.props;
  return (
    <Router>
      <div>
        < Navigation user={this.props.state.auth.user} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Dashboard" component={Dashboard} />
          {/* <Route path="/ConnectWithUs" component={ConnectWithUs} /> */}
          <Route path="/SignIn" component={SignIn} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/SetProfile" component={SetProfile} />
          <Route path="/GoalsUpdate" component={GoalsUpdate} />
          {/* <Route path="/WeeklyTemplate" component={WeeklyTemplate} />
          <Route path="/DetailedProgress" component={DetailedProgress} /> */}
          {/* <Route path="/Admin" component={Admin} />
          <Route path="/QandA" component={QandA} />
          <Route path="/WorkoutApi" component={WorkoutApi} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
}

const mapStateToProps = state => ({
state
});

export default connect(mapStateToProps)(App);

