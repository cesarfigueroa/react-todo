import React, { PropTypes, PureComponent } from 'react';
import { List } from 'immutable';
import TaskContainer from '../containers/TaskContainer';

class TaskList extends PureComponent {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => {
          return (
            <TaskContainer
              key={task.get('id')}
              id={task.get('id')}
              title={task.get('title')}
              isComplete={task.get('isComplete')}
              isEditing={task.get('id') === this.props.editableTask}
            />
          );
        })}
      </div>
    );
  }
}

TaskList.propTypes = {
  editableTask: PropTypes.string,
  tasks: PropTypes.instanceOf(List).isRequired
};

export default TaskList;
