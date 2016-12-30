import React, { Component, PropTypes } from 'react';

class TaskForm extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleKeyDown(event) {
    const value = event.target.value;
    const hasValue = value.trim() !== '';

    if (hasValue && event.key === 'Enter') {
      this.props.onInputKeyEnter(value);
      this.setState({ value: '' });
    }
  }
  render() {
    return (
      <input
        className="taskForm"
        type="text"
        placeholder="What would you like to get done?"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

TaskForm.propTypes = {
  onInputKeyEnter: PropTypes.func
};

export default TaskForm;
