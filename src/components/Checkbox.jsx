import React from 'react';
import classNames from 'classnames';

const Checkbox = ({ isChecked, onClick }) => {
  let checkboxClass = classNames({
    'checkbox': true,
    'checkbox--checked': isChecked
  });

  return <b className={checkboxClass} onClick={onClick} />;
};

Checkbox.propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Checkbox;
