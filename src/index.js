import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userReducer from './reducers/users'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(userReducer, applyMiddleware(thunk))

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Provider store={store}>
  <App />
</Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();