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

export const signUp = ({ userInfo }) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  try {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const { email, password, firstName, lastName } = userInfo;

    const authResponse = await firebase.auth().createUserWithEmailAndPassword(email, password);

    const userResponse = await firestore.collection('users').doc(authResponse.user.uid).set({
      firstName,
      lastName,
      initial: firstName[0] + lastName[0],
    });
    dispatch({ type: types.SIGNUP_SUCCESS });
  } catch (error) {
    dispatch({ type: types.SIGNUP_ERROR, error: error.message });
  }
};
