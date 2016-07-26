import { Map } from 'immutable';
import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from '../constants/actionTypes';

const tasks = (state = Map(), action) => {
  switch (action.type) {
  case ADD_TASK:
    return state.set(action.id, Map({
      id: action.id,
      title: action.title,
      isComplete: false
    }));
  case TOGGLE_TASK:
    return state.updateIn([action.id], task => {
      if (task) {
        return task.update('isComplete', isComplete => !isComplete);
      }
    });
  case REMOVE_TASK:
    return state.remove(action.id);
  default:
    return state;
  }
};

export default tasks;
