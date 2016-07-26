import React from 'react';
import { List } from 'immutable';
import Task from '../components/Task';

const TaskList = ({ tasks, onToggleClick, onRemoveClick }) => {
  return (
    <div>
      {tasks.map(task => {
        return (
          <Task
            key={task.get('id')}
            title={task.get('title')}
            isComplete={task.get('isComplete')}
            onToggleClick={() => onToggleClick(task.get('id'))}
            onRemoveClick={() => onRemoveClick(task.get('id'))}
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
