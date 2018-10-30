import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

import configForFirebase from '../config/configForFirebase';
import rootReducer from './rootReducer';

const middleware = [
  thunk.withExtraArgument({
    getFirebase,
    getFirestore,
  }),
];

const getComposeWithArgs = (...args) => {
  if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    return compose(...args);
  }

  return compose(...args.slice(0, args.length - 1));
};

const composeWithArgs = getComposeWithArgs(
  applyMiddleware(...middleware),
  reduxFirestore(configForFirebase),
  reduxReactFirebase(configForFirebase, {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, {}, composeWithArgs);

export default store;
