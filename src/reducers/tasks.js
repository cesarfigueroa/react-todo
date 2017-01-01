import { List, Map } from 'immutable';
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  UPDATE_TASK
} from '../constants/actionTypes';

function task(state, action) {
  switch (action.type) {
  case TOGGLE_TASK:
    return state.get('id') === action.id ?
      state.update('isComplete', isComplete => !isComplete) :
      state;
  case UPDATE_TASK:
    return state.get('id') === action.id ? state.set('title', action.title) : state;
  default:
    return state;
  }
}

function tasks(state = List(), action) {
  switch (action.type) {
  case ADD_TASK:
    return state.push(Map({
      id: action.id,
      title: action.title,
      isComplete: false
    }));
  case TOGGLE_TASK:
    return state.map(item => task(item, action));
  case UPDATE_TASK:
    return state.map(item => task(item, action));
  case REMOVE_TASK:
    return state.filterNot(task => task.get('id') === action.id);
  default:
    return state;
  }
}

export default tasks;
