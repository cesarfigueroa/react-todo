import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 as uuid } from 'node-uuid';
import { addTask } from '../actions/tasks';
import TaskForm from '../components/TaskForm';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onInputKeyEnter: value => addTask(uuid(), value)
  }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(TaskForm);
