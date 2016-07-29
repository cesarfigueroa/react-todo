import { Map } from 'immutable';
import tasks from './tasks';
import projects from './projects';

const combineReducers = reducers => {
  return (state = Map(), action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      return nextState.set(key, reducers[key](state.get(key), action));
    }, Map());
  };
};

export default combineReducers({ tasks, projects });
