import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reduxReactFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

//
import rootReducer from './reducers/rootReducer';

const middleware = [
  thunk.withExtraArgument({
    getFirebase,
    getFirestore,
  }),
];

const isThereReduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION__;

const composeWithArgs =
  process.env.NODE_ENV === 'development' && isThereReduxDevtool
    ? compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__())
    : compose(applyMiddleware(...middleware));

const ProviderWithStore = ({ children, initialState = {} }) => {
  const store = createStore(rootReducer, initialState, composeWithArgs);
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWithStore;
