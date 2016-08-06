import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';

class Checkbox extends PureComponent {
  checkboxClass(isChecked) {
    return classNames({
      'checkbox': true,
      'checkbox--checked': isChecked
    });
  }

  render() {
    const { isChecked, onClick } = this.props;
    return <b className={this.checkboxClass(isChecked)} onClick={onClick} />;
  }
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Checkbox;
