import { List, Map } from 'immutable';
import { ADD_TASK, TOGGLE_TASK } from '../constants/actionTypes';

const tasks = (state = List(), action) => {
  switch (action.type) {
  case ADD_TASK:
    return state.push(Map({
      id: action.id,
      title: action.title,
      isComplete: false
    }));
  case TOGGLE_TASK:
    return state.update(
      state.findIndex(task => task.get('id') === action.id),
      task => task.set('isComplete', !task.get('isComplete'))
    );
  default:
    return state;
  }
};

export default tasks;
