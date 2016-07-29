import React from 'react';
import { List } from 'immutable';
import Task from '../components/Task';

const TaskList = ({ tasks, onToggleClick, onRemoveClick }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.get('id')}
          title={task.get('title')}
          isComplete={task.get('isComplete')}
          onToggleClick={onToggleClick}
          onRemoveClick={onRemoveClick}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: React.PropTypes.instanceOf(List).isRequired,
  onClick: React.PropTypes.func
};

export default TaskList;
