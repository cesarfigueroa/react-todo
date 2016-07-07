import React from 'react';

const Checkbox = ({ isChecked }) => {
  return <span>{isChecked ? '[x]' : '[ ]'}</span>;
};

Checkbox.propTypes = {
  isChecked: React.PropTypes.bool.isRequired
};

export default Checkbox;
