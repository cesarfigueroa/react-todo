export const ADD_TASK = 'ADD_TASK';
export function addTask(id, title) {
  return {
    type: ADD_TASK,
    id: id,
    title: title
  };
}

export const TOGGLE_TASK = 'TOGGLE_TASK';
export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id: id
  };
}
