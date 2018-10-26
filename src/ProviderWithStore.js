import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reduxReactFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import configForFirebase from './config/configForFirebase';

//
import rootReducer from './reducers/rootReducer';

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
  reduxReactFirebase(configForFirebase),
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ProviderWithStore = ({ children, initialState = {} }) => {
  const store = createStore(rootReducer, initialState, composeWithArgs);
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWithStore;
