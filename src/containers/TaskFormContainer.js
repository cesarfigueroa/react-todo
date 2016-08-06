import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import TaskForm from '../components/TaskForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTask }, dispatch);
};

const TaskFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);

export default TaskFormContainer;
