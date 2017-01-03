import React, { PropTypes, PureComponent } from 'react';
import Editor from './Editor';
import View from './View';

class Task extends PureComponent {
  render() {
    const {
      title,
      isComplete,
      isEditing,
      onEditClick,
      onRemoveClick,
      onSaveClick,
      onToggleClick
    } = this.props;

    return (
      <div>
        {isEditing ?
          <Editor
            title={title}
            isComplete={isComplete}
            onSaveClick={onSaveClick}
            onToggleClick={onToggleClick}
          /> :
          <View
            title={title}
            isComplete={isComplete}
            onEditClick={onEditClick}
            onRemoveClick={onRemoveClick}
            onToggleClick={onToggleClick}
          />
        }
      </div>
    );
  }
}

Task.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Task;
