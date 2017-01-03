import Immutable from 'immutable';

function combineReducers(reducers) {
  return (state = Immutable.Map(), action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      return nextState.set(key, reducers[key](state.get(key), action));
    }, Immutable.Map());
  };
}

export default combineReducers;
