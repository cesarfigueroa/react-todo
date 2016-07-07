import React from 'react';
import Task from '../components/Task';

const TaskList = ({ tasks, onClick }) => {
  return (
    <div>
      {tasks.map(task => {
        return (
          <Task
            key={task.id}
            onClick={() => onClick(task.id)}
            {...task}
          />
        );
      })}
    </div>
  );
};

TaskList.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default TaskList;
