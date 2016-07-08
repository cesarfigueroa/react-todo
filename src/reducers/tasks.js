import { ADD_TASK, TOGGLE_TASK } from '../constants/actionTypes';

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
  default:
    return state;
  }
};

export default tasks;
