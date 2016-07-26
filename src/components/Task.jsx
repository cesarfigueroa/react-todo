import React from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';

const Task = ({ title, isComplete, onToggleClick, onRemoveClick }) => {
  let titleClass = classNames({
    'task-title': true,
    'task-title--completed': isComplete
  });

  return (
    <div className="task">
      <Checkbox isChecked={isComplete} onClick={onToggleClick} />
      <span className={titleClass}>{title}</span>
      <button className="task-button" onClick={onRemoveClick}>&times;</button>
    </div>
  );
};

Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  onToggleClick: React.PropTypes.func.isRequired,
  onRemoveClick: React.PropTypes.func.isRequired
};

export default Task;
