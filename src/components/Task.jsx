import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';

class Task extends PureComponent {
  titleClass(isComplete) {
    return classNames({
      'task-title': true,
      'task-title--completed': isComplete
    });
  }

  render() {
    const { title, isComplete, onToggleClick, onRemoveClick } = this.props;

    return (
      <div className="task">
        <Checkbox isChecked={isComplete} onClick={onToggleClick} />
        <span className={this.titleClass(isComplete)}>{title}</span>
        <button className="task-button" onClick={onRemoveClick}>&times;</button>
      </div>
    );
  }
}

Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  onToggleClick: React.PropTypes.func.isRequired,
  onRemoveClick: React.PropTypes.func.isRequired
};

export default Task;
