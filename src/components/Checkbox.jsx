import React from 'react';

const Checkbox = ({ isChecked }) => {
  return (
    <b className={`checkbox ${isChecked ? 'checkbox--checked' : ''}`} />
  );
};

Checkbox.propTypes = {
  isChecked: React.PropTypes.bool.isRequired
};

export default Checkbox;
