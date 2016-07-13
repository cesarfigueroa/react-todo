import React from 'react';
import Task from '../components/Task';

const TaskList = ({ tasks, onToggleClick, onRemoveClick }) => {
  return (
    <div>
      {tasks.map(task => {
        return (
          <Task
            key={task.id}
            onToggleClick={() => onToggleClick(task.id)}
            onRemoveClick={() => onRemoveClick(task.id)}
            {...task}
          />
        );
      })}
    </div>
  );
};

TaskList.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onClick: React.PropTypes.func
};

export default TaskList;
