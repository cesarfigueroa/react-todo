import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Checkbox from './Checkbox';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this._onToggleClick = this.props.onToggleClick.bind(this, this.props.id);
    this._onRemoveClick = this.props.onRemoveClick.bind(this, this.props.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  titleClass() {
    return classNames({
      'task-title': true,
      'task-title--completed': this.props.isComplete
    });
  }

  render() {
    return (
      <div className="task">
        <Checkbox
          isChecked={this.props.isComplete}
          onClick={this._onToggleClick}
        />
        <span className={this.titleClass()}>{this.props.title}</span>
        <button
          className="task-button"
          onClick={this._onRemoveClick}
        >&times;</button>
      </div>
    );
  }
}

Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Task;
