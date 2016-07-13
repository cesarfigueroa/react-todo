import { connect } from 'react-redux';

import { toggleTask, removeTask } from '../actions';
import TaskList from '../components/TaskList';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleClick: id => {
      dispatch(toggleTask(id));
    },
    onRemoveClick: id => {
      dispatch(removeTask(id));
    }
  };
};

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;
