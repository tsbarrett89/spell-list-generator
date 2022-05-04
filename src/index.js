import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThunkMiddleware as Thunk } from 'redux-thunk';

import './index.css';

import App from './App';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(Thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);