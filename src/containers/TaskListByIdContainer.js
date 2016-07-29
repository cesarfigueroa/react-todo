// import { bindActionCreators } from 'redux';
// import { List } from 'immutable';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import { toggleTask, removeTask } from '../actions/tasks';
import { removeTaskFromProject } from '../actions/projects';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: ownProps.tasks.map(id => state.getIn(['tasks', id]))
    // tasks: ownProps.tasks.reduce((result, id) => {
    //   let task = state.getIn(['tasks', id]);
    //   return task ? result.push(task) : result;
    // }, List())
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // return bindActionCreators({
  //   onToggleClick: toggleTask,
  //   onRemoveClick: () => {
  //     removeTask()
  //   }
  // }, dispatch);

  return {
    onToggleClick: id => dispatch(toggleTask(id)),
    onRemoveClick: id => {
      dispatch(removeTaskFromProject(id, ownProps.projectId));
      dispatch(removeTask(id));
    }
  };

  // return bindActionCreators({
  //   onToggleClick: toggleTask,
  //   onRemoveClick: id => {
  //     removeTask(id)
  //     removeTaskFromProject: id => removeTaskFromProject(id, ownProps.projectId)
  // }, dispatch);
};

const TaskListByIdContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListByIdContainer;
