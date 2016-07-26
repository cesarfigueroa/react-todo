import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'node-uuid';
import { addTask } from '../actions/tasks';

class TaskForm extends React.Component {
  addTaskOnKeyDown(event) {
    if (this.input.value.trim() && event.key == 'Enter') {
      this.props.dispatch(addTask(uuid(), this.input.value));
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
