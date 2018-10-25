import * as types from '../actions/types';

const initialState = {
  projects: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PROEJCT:
      console.log('action.project: ', action.project);
      return state;
    default:
      return state;
  }
};
