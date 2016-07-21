import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from '../constants/actionTypes';

const tasks = (state = [], action) => {
  switch (action.type) {
  case ADD_TASK:
    return [...state, {
      id: action.id,
      title: action.title,
      isComplete: false
    }];
  case TOGGLE_TASK:
    return state.map(task => {
      if (task.id === action.id) {
        return Object.assign({}, task, { isComplete: !task.isComplete });
      } else {
        return task;
      }
    });
  case REMOVE_TASK:
    return state.filter(task => task.id !== action.id);
  default:
    return state;
  }
};

export default tasks;
