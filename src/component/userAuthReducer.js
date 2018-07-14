import actionTypes from './actionTypes';
import firebaseui from 'firebaseui';
import { firebaseAuth } from './firebase';

let authUi = new firebaseui.auth.AuthUI(firebaseAuth);

const initialState = {
  authUI: authUi,
  user: {
    userStatus: actionTypes.ANONYMOUS,
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGGED_IN:
      return {
        ...state,
        user: {
          userStatus: actionTypes.LOGGED_IN,
        },
      };
    case actionTypes.LOGGED_OUT:
      return {
        ...state,
        user: {
          userStatus: actionTypes.ANONYMOUS,
        },
      };
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
