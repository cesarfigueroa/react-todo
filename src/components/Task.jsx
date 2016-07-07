import React from 'react';
import Checkbox from './Checkbox';

const Task = ({ title, isComplete, onClick }) => {
  return (
    <div onClick={onClick}>
      <Checkbox isChecked={isComplete} />
      <span>{title}</span>
    </div>
  );
};

Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Task;
