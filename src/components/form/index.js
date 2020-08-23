import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './index.scss';

const propTypes = {
  label: PropTypes.string,
  setLabel: PropTypes.func,
  add: PropTypes.func,
};

function Form({ label, setLabel, add }) {
  return (
    <form onSubmit={(e) => add(e)}>
      <input
        type="text"
        placeholder="What are you doing today?"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button type="submit" disabled={label.length < 1}>
        Add
      </button>
    </form>
  );
}

Form.propTypes = propTypes;

export default Form;
