import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import profilePicture from "./Bible-Photo.png";

class UserStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1"
    };
  }

  componentWillMount() {
    this.renderImage();
  }

  handleSelect = activeKey => {
    this.setState({
      activeKey
    });
  };

  renderImage = () => {
    if (this.props.profileImage === null) {
      const { user } = this.props;

      return (
        <div>
          <img
            src={profilePicture}
            alt=""
            style={this.imageStyle}
            className="profilePic"
          />
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={this.props.profileImage}
            style={this.imageStyle}
            className="profilePic"
          />
        </div>
      );
    }
  };

  renderDesc = () => {
    if (this.props.user.desc) {
      return (
        <h5
          style={{
            "word-break": "break-all"
          }}
        >
          {this.props.user.desc}
        </h5>
      );
    }
  };

  style = {
    height: "30vh",
    width: "15vw"
  };

  imageStyle = {
    width: "15vw"
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {this.renderImage()}
        <ListGroup
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
          accordion
          style={{ width: "15vw" }}
        >
          <ListGroupItem header="About Me" eventKey="1">
            {this.renderDesc()}
          </ListGroupItem>
          <ListGroupItem header="Current Stats" eventKey="2">
            <h5>Weight: {user.weight}</h5>
            <h5>Bench: {user.ormBench}</h5>
            <h5>Overhead Press: {user.ormOverheadPress}</h5>
            <h5>Squats: {user.ormSquat}</h5>
            <h5>Deadlift: {user.ormDeadlift}</h5>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default UserStats;
