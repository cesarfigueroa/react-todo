import React, { PropTypes, PureComponent } from 'react';
import { List } from 'immutable';
import Task from '../components/Task';

class TaskList extends PureComponent {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => {
          return (
            <Task
              key={task.get('id')}
              title={task.get('title')}
              isComplete={task.get('isComplete')}
              onToggleClick={() => this.props.onToggleClick(task.get('id'))}
              onRemoveClick={() => this.props.onRemoveClick(task.get('id'))}
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
