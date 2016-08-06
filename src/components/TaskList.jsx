import React, { PropTypes, PureComponent } from 'react';
import { List } from 'immutable';
import Task from '../components/Task';

class TaskList extends PureComponent {
  render() {
    const { tasks, onToggleClick, onRemoveClick } = this.props;
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
  }
}

TaskList.propTypes = {
  tasks: PropTypes.instanceOf(List).isRequired,
  onClick: PropTypes.func
};

export default TaskList;
