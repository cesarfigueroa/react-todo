import { List } from 'immutable';
import React from 'react';
import Task from '../components/Task';

const TaskList = ({ tasks, onClick }) => {
  return (
    <div>
      {tasks.map(task => {
        return (
          <Task
            key={task.get('id')}
            title={task.get('title')}
            isComplete={task.get('isComplete')}
            onClick={() => onClick(task.get('id'))}
          />
        );
      })}
    </div>
  );
};

TaskList.propTypes = {
  tasks: React.PropTypes.instanceOf(List).isRequired,
  onClick: React.PropTypes.func
};

export default TaskList;
