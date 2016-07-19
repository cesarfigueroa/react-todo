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
      <button onClick={onRemoveClick}>x</button>
    </div>
  );
};

Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Task;
