import { connect } from 'react-redux';
import { toggleTask, removeTask } from '../actions/tasks';
import TaskList from '../components/TaskList';

function mapStateToProps(state) {
  return {
    tasks: state.get('tasks')
  };
}

export default connect(
  mapStateToProps,
  {
    onToggleClick: toggleTask,
    onRemoveClick: removeTask
  }
)(TaskList);
