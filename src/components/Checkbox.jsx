import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';

class Checkbox extends PureComponent {
  render() {
    const checkboxClassNames = classNames({
      'checkbox': true,
      'checkbox--checked': this.props.isChecked
    });

    return <b className={checkboxClassNames} onClick={this.props.onClick} />;
  }
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Checkbox;
