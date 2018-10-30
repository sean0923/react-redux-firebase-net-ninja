import * as types from './types';
// import uniqid from 'uniqid';

export const createProject = ({ project }) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  // dispatch({
  //   type: types.CREATE_PROJECT,
  //   project,
  // });

  const firestore = getFirestore();
  const response = await firestore
    .collection('projects')
    .add({
      ...project,
      authorFirstName: 'Sean',
      authorLastName: 'Hong',
      authorId: 12345,
      createdAt: new Date(),
    })
    .catch(error => {
      console.log('error: ', error);
      dispatch({
        type: types.CREATE_PROJECT_ERROR,
        error,
      });
    });

  console.log('response: ', response);
  dispatch({
    type: types.CREATE_PROJECT,
    project,
  });
};
