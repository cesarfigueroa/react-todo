import { connect } from 'react-redux';
import { toggleTask, removeTask, updateTask } from '../actions/tasks';
import { toggleTaskEditor } from '../actions/ui';
import Task from '../components/Task';

const mapDispatchToProps = {
  onEditClick: toggleTaskEditor,
  onRemoveClick: removeTask,
  onSaveClick: updateTask,
  onToggleClick: toggleTask
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    onEditClick: () => dispatchProps.onEditClick(ownProps.id, 'task'),
    onRemoveClick: () => dispatchProps.onRemoveClick(ownProps.id),
    onSaveClick: title => {
      dispatchProps.onSaveClick(ownProps.id, title);
      dispatchProps.onEditClick(null, 'task');
    },
    onToggleClick: () => dispatchProps.onToggleClick(ownProps.id)
  });
}

export default connect(
  null,
  mapDispatchToProps,
  mergeProps
)(Task);
