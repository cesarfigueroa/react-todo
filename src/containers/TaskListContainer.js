import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleTask, removeTask } from '../actions/tasks';
import TaskList from '../components/TaskList';

const mapStateToProps = state => {
  return {
    tasks: state.get('taskIds').map(id => state.getIn(['tasks', id]))
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    onToggleClick: toggleTask,
    onRemoveClick: removeTask
  }, dispatch);
};

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;
