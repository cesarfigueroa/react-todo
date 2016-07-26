import { combineReducers } from 'redux';
import tasks from './tasks';
import taskIds from './taskIds';

export default combineReducers({ tasks, taskIds });
