import { connect } from 'react-redux';
import TaskList from '../components/TaskList';

function mapStateToProps(state) {
  return {
    editableTask: state.getIn(['ui', 'editableTask']),
    tasks: state.get('tasks')
  };
}

export default connect(mapStateToProps)(TaskList);
