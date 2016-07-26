import { List } from 'immutable';
import { ADD_TASK, REMOVE_TASK } from '../constants/actionTypes';

const taskIds = (state = List(), action) => {
  switch (action.type) {
  case ADD_TASK:
    return state.push(action.id);
  case REMOVE_TASK:
    return state.filterNot(id => id === action.id);
  default:
    return state;
  }
};

export default taskIds;
