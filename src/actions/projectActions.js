import * as types from './types';
import uniqid from 'uniqid';

export const createProject = ({project}) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  dispatch({
    type: types.CREATE_PROEJCT,
    project,
  });

  // ...project,
  // authorFirstName: 'Yeah',
  // authorLastName: 'Last',
  // authorId: uniqid(),
  // createdAt: new Date(),
};
