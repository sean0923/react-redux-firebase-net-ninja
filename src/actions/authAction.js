import * as types from './types';

export const signIn = ({ credential }) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  const { email, password } = credential;
  const response = firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
    dispatch({ type: types.LOGIN_ERROR, err });
  });

  console.log('response: ', response);
  dispatch({ type: types.LOGIN_SUCCESS });
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  const response = firebase.auth().signOut().catch(err => {
    dispatch({ type: types.SIGNOUT_ERROR, err });
  });
  console.log('response: ', response);

  dispatch({ type: types.SIGNOUT_SUCCESS });
};
