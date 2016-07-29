import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

import { List, Map } from 'immutable';

const initialState = Map({
  projects: Map.of(
    1, Map({ id: 1, title: 'Groceries', tasks: List.of(1, 2) }),
    2, Map({ id: 2, title: 'New Apartment', tasks: List.of(3, 4) })
  ),
  tasks: Map.of(
    1, Map({ id: 1, title: 'Buy bread', isComplete: true }),
    2, Map({ id: 2, title: 'Buy eggs', isComplete: false }),
    3, Map({ id: 3, title: 'Buy plants', isComplete: true }),
    4, Map({ id: 4, title: 'Buy rug', isComplete: false })
  )
});

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
