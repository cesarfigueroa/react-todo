import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleTask } from '../actions';
import TaskList from '../components/TaskList';

const mapStateToProps = state => {
  return {
    tasks: state.get('tasks')
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    onClick: toggleTask
  }, dispatch);
};

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;
