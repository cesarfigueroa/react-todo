import React from 'react';

const Checkbox = ({ isChecked, onClick }) => {
  return (
    <b
      className={`checkbox ${isChecked ? 'checkbox--checked' : ''}`}
      onClick={onClick}
    />
  );
};

Checkbox.propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
};

export default Checkbox;
