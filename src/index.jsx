import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(
  rootReducer,
  fromJS(JSON.parse(localStorage.getItem('store'))) || undefined
);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(
    store.getState().filterNot((v, k) => ['tasks'].indexOf(k) === -1)
  ));
});
