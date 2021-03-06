import * as types from '../actions/types';

const initialState = {
  authError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return { ...state, authError: 'Login failed' };

    case types.LOGIN_SUCCESS:
      return { ...state, authError: null };

    case types.SIGNOUT_SUCCESS:
      return { ...state, authError: null };

    case types.SIGNUP_SUCCESS:
      return { ...state, authError: null };

    case types.SIGNUP_ERROR:
      return { ...state, authError: action.error };

    default:
      return state;
  }
};
