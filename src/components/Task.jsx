import React from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';

const Task = ({ title, isComplete, onClick }) => {
  let titleClass = classNames({
    'task-title': true,
    'task-title--completed': isComplete
  });

  return (
    <div className="task" onClick={onClick}>
      <Checkbox isChecked={isComplete} />
      <span className={titleClass}>{title}</span>
    </div>
  );
};

Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Task;
