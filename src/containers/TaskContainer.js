import { connect } from 'react-redux';

import { editTask, deleteTask } from '../actions';
import Task from '../components/Task';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    onTextChange: (id, title) => {
      dispatch(editTask(id, title));
    },
    onDeleteButtonClick: id => {
      dispatch(deleteTask(id));
    }
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, dispatchProps, ownProps);
};

const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Task);

export default TaskContainer;
