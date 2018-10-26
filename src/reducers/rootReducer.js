import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import projectReducer from './projectReducer';

export default combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
});
