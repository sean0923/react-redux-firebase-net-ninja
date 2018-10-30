import * as types from './types';

export const createProject = ({ project }) => async (dispatch, getState, { getFirestore }) => {
  const { profile, auth } = getState().firebase;

  const firestore = getFirestore();

  await firestore
    .collection('projects')
    .add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: auth.uid,
      createdAt: new Date(),
    })
    .catch(error => {
      console.log('error: ', error);
      dispatch({
        type: types.CREATE_PROJECT_ERROR,
        error,
      });
    });

  dispatch({ type: types.CREATE_PROJECT, project });
};
