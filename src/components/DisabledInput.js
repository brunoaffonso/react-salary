import React from 'react';
import { currencyFormatter, numberFormatter } from '../helpers/Formatter';

import css from './components.module.css';

export default function DisabledInput({
  description,
  value,
  percentage,
  color,
  font,
}) {
  let newValue = '';
  percentage
    ? (newValue = `${currencyFormatter(value)} (${numberFormatter(
        percentage
      )}%)`)
    : (newValue = currencyFormatter(value));

  return (
    <div className={css.desabledInput}>
      <label>
        {description}
        <input
          style={{ color: `${color}`, fontWeight: `${font}` }}
          type="text"
          readOnly
          value={newValue}
        />
      </label>
    </div>
  );
}
