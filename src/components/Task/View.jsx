import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';
import Checkbox from '../Checkbox';

class View extends PureComponent {
  render() {
    const titleClassNames = classNames({
      'task-title': true,
      'task-title--completed': this.props.isComplete
    });

    return (
      <div className="task">
        <Checkbox isChecked={this.props.isComplete} onClick={this.props.onToggleClick} />
        <span className={titleClassNames} onDoubleClick={this.props.onEditClick}>{this.props.title}</span>
        <button className="task-button" onClick={this.props.onRemoveClick}>&times;</button>
      </div>
    );
  }
}

View.displayName = 'Task.View';
View.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default View;
