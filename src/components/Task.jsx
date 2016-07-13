import React from 'react';
import Checkbox from './Checkbox';

const Task = ({ title, isComplete, onToggleClick, onRemoveClick }) => {
  return (
    <div className="task">
      <Checkbox isChecked={isComplete} onClick={onToggleClick} />
      <span
        className={`task-title ${isComplete ? 'task-title--completed' : ''}`}
      >{title}</span>
      <button onClick={onRemoveClick}>Remove</button>
    </div>
  );
};

Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Task;
