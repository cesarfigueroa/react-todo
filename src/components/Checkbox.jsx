import React, { PureComponent } from 'react';
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
  isChecked: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Checkbox;
