import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';

class Task extends PureComponent {
  render() {
    const titleClassNames = classNames({
      'task-title': true,
      'task-title--completed': this.props.isComplete
    });

    return (
      <div className="task">
        <Checkbox isChecked={this.props.isComplete} onClick={this.props.onToggleClick} />
        <span className={titleClassNames}>{this.props.title}</span>
        <button className="task-button" onClick={this.props.onRemoveClick}>&times;</button>
      </div>
    );
  }
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default Task;
