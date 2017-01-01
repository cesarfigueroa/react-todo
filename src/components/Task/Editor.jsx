import React, { PropTypes, PureComponent } from 'react';

class Editor extends PureComponent {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  handleClick() {
    this.props.onSaveClick(this.refs.text.value);
  }
  handleFocus(event) {
    event.currentTarget.select();
  }
  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.onSaveClick(this.refs.text.value);
    }
  }
  render() {
    return (
      <div className="task task--editing">
        <input
          autoFocus
          className="task-input"
          defaultValue={this.props.title}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          ref="text"
          type="text"
        />
        <button className="task-saveButton" onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

Editor.displayName = 'Task.Editor';
Editor.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Editor;
