import React from 'react';
import { v4 as uuid } from 'node-uuid';

class TaskForm extends React.Component {
  onKeyDown(event) {
    let value = this.input.value.trim();

    if (value && event.key == 'Enter') {
      this.props.addTask(uuid(), value);
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
        onKeyDown={event => this.onKeyDown(event)}
      />
    );
  }
}

export default TaskForm;
