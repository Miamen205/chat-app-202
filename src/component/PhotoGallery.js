import React, { Component } from 'react';
import firebase from 'firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Gallery from './Gallery';
import * as actions from './action';
import UploadImage from './UploadImage';

class PhotoGallery extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        const thisUser = firebase.auth().currentUser;
        const uid = thisUser.uid;

        this.props.fetchCalendar(thisUser);
        this.props.fetchUserImages(thisUser.uid);
        this.props.fetchProfileImage(thisUser.uid);
        this.props.fetchUser(thisUser);
        this.props.fetchOldStats(thisUser);
        this.props.fetchProgress(thisUser);
        // this.props.loggedIn();
      }
    });
  }

  render() {
    const { state } = this.props;
    console.log('APP PROPS', this.props);
    return (
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Here are your photos</h1>
        <Gallery imageList={state.user.userImages} />
        <UploadImage
          fetchProfileImage={this.props.fetchProfileImage}
          userId={state.user.uid}
          style={{ display: 'inline-block', margin: 'auto' }}
          type="other"
          fetchUserImages={this.props.fetchUserImages}
          caption="Upload your pictures"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);
