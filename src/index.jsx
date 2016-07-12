import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

const store = createStore(
  rootReducer,
  // JSON.parse(localStorage.getItem('store')) || undefined
  Immutable.fromJS(JSON.parse(localStorage.getItem('store')))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});
