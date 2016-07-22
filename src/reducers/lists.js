import { ADD_LIST, ADD_TASK_TO_LIST } from '../constants/actionTypes';

const lists = (state = [], action) => {
  switch (action.type) {
  case ADD_LIST:
    return [...state, {
      id: action.id,
      title: action.title,
      tasks: []
    }];
  case ADD_TASK_TO_LIST:
    return state.map(list => {
      if (list.id === action.listId) {
        return Object.assign({}, list, {
          tasks: list.tasks.concat([action.taskId])
        });
      } else {
        return list;
      }
    });
  default:
    return state;
  }
};

export default lists;
