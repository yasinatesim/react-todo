import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const propTypes = {
  items: PropTypes.array,
  remove: PropTypes.func,
  completed: PropTypes.func,
};

function Items({ items, completed, remove }) {
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index.toString()} className={`item${item.completed ? ' completed' : ''}`}>
            <div className={`label${item.completed ? ' completed' : ''}`}>{item.label}</div>
            <div>
              <button type="button" className="completed" onClick={() => completed(index)}>
                <svg width={18} height={18}>
                  <path
                    d="M4.775 18.295c-.275-.004-1.462-1.778-2.638-3.944L0 10.413l.554-.554c.305-.305 1.124-.554 1.82-.554H3.64l.636 2.005.637 2.005 5.064-5.541c2.786-3.048 6.003-6.044 7.15-6.658L19.213 0l-4.21 4.782c-2.314 2.63-5.45 6.748-6.969 9.15-1.517 2.404-2.984 4.367-3.26 4.363z"
                    fill="#fff"
                  />
                </svg>
              </button>
              <button type="button" className="remove" onClick={() => remove(index)}>
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

Items.propTypes = propTypes;

export default Items;
