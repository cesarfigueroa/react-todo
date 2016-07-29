import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'node-uuid';
import { addTask } from '../actions/tasks';
import { addTaskToProject } from '../actions/projects';

class TaskForm extends React.Component {
  addTaskOnKeyDown(event) {
    if (this.input.value.trim() && event.key == 'Enter') {
      let taskId = uuid();
      this.props.dispatch(addTask(taskId, this.input.value));
      this.props.dispatch(addTaskToProject(1, taskId));
      this.resetField();
    }
  }

  resetField() {
    this.input.value = '';
  }

  render() {
    return (
      <input
        className="taskForm"
        type="text"
        placeholder="What would you like to get done?"
        ref={node => this.input = node}
        onKeyDown={event => this.addTaskOnKeyDown(event)}
      />
    );
  }
}

export default connect()(TaskForm);
