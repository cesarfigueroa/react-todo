import React from 'react';
// import Task from '../components/Task';

import TaskContainer from '../containers/TaskContainer';

const TaskList = ({ tasks, onClick }) => {
  return (
    <div>
      {tasks.map(task => {
        return (
          <TaskContainer
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
  onClick: React.PropTypes.func
};

export default TaskList;
