import React from 'react';

const Checkbox = ({ isChecked, onClick }) => {
  return (
    <b
      onClick={onClick}
      className={`checkbox ${isChecked ? 'checkbox--checked' : ''}`}
    />
  );
};

Checkbox.propTypes = {
  isChecked: React.PropTypes.bool.isRequired
};

export default Checkbox;
