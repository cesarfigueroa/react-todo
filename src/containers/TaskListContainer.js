import { connect } from 'react-redux';

import { toggleTask } from '../actions';
import TaskList from '../components/TaskList';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(toggleTask(id));
    }
  };
};

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;
