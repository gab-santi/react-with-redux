import React from 'react';
import ReactDOM from 'react-dom';

// redux imports
import thunkMiddleware from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchPeople, requestPeople } from './reducers';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// very useful tool for monitoring state
const logger = createLogger();

// combine all reducers before passing to store
const rootReducer = combineReducers({ searchPeople, requestPeople });

// assign reducers & middleware to store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
