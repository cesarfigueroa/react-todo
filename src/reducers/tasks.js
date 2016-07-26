import { List, Map } from 'immutable';
import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from '../constants/actionTypes';

const tasks = (state = List(), action) => {
  switch (action.type) {
  case ADD_TASK:
    return state.push(Map({
      id: action.id,
      title: action.title,
      isComplete: false
    }));
  case TOGGLE_TASK:
    return state.map(task => {
      if (task.get('id') === action.id) {
        return task.update('isComplete', isComplete => !isComplete);
      } else {
        return task;
      }
    });
  case REMOVE_TASK:
    return state.filterNot(task => task.get('id') === action.id);
  default:
    return state;
  }
};

export default tasks;
