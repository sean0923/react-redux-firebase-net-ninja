import * as types from '../actions/types';

const initialState = {
  projects: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case types.CREATE_PROEJCT:
    //   return state;
    default:
      return state;
  }
};