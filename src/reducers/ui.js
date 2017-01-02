import Immutable from 'immutable';
import { TOGGLE_TASK_EDITOR } from '../constants/actionTypes';

const initialState = Immutable.Map({
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
