import React from 'react';
import firebase from 'firebase';
import { auth } from './Auth'

const SignOut = props => {
  const handleClick = () => {
    firebase
      .auth()
      .signOut()
      .catch(function(error) {
        console.error('Sign Out Error', error);
      });
  };

  return (
    <li className="signin" onClick={() => handleClick()}>
      <a href="/" className="signin">
        Log Out
      </a>
    </li>
  );
};

export default SignOut;