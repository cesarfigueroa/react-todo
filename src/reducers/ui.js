import { Map } from 'immutable';
import { TOGGLE_TASK_EDITOR } from '../constants/actionTypes';

const initialState = Map({
  editableTask: null
});

export default function (state = initialState, action) {
  switch (action.type) {
  case TOGGLE_TASK_EDITOR:
    return state.set('editableTask', action.taskId);
  default:
    return state;
  }
}
