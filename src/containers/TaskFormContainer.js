import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import TaskForm from '../components/TaskForm';

export default connect(
  null,
  { addTask }
)(TaskForm);
