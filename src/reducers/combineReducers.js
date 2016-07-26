import { Map } from 'immutable';

const combineReducers = reducers => {
  return (state = Map(), action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      return nextState.set(key, reducers[key](state.get(key), action));
    }, Map());
  };
};

export default combineReducers;
