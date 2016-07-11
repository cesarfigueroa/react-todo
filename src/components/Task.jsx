import ReactDOM from 'react-dom';
import React from 'react';
import Checkbox from './Checkbox';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  toggleTaskMode() {
    // this.titleInput.focus();
    this.setState({ isEditing: true });
  }

  handleTextChange(event) {
    this.props.onTextChange(this.props.id, event.target.value);
  }

  handleEnterKey(event) {
    if (event.key === 'Enter') {
      this.setState({ isEditing: false });
    }
  }

  // TODO: Rename to generic function and reuse
  handleInputBlur() {
    this.setState({ isEditing: false });
  }

  handleInputFocus() {
    // ReactDOM.findDOMNode(this.refs.titleInput).select();
    // this.titleInput.select();
  }

  renderTitle() {
    if (this.state.isEditing) {
      return (
        <input
          type="text"
          defaultValue={this.props.title}
          onChange={event => this.handleTextChange(event)}
          onKeyDown={event => this.handleEnterKey(event)}
          onBlur={() => this.handleInputBlur()}
          style={{border: 0, outline: 0, font: '15px Helvetica Neue', paddingLeft: '12px'}}
          autoFocus
        />
      );
    } else {
      let className = `task-title ${this.props.isComplete ? 'task-title--completed' : ''}`;
      return <span className={className}>{this.props.title}</span>;
    }
  }

  render() {
    return (
      <div className="task">
        <Checkbox
          isChecked={this.props.isComplete}
          onClick={this.props.onClick}
        />

        <div onDoubleClick={() => this.toggleTaskMode()}>{this.renderTitle()}</div>

        <button
          onClick={() => this.props.onDeleteButtonClick(this.props.id)}
        >x</button>
      </div>
    );
  }
}

// <input type="text" value={} />


Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Task;
