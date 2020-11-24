import React, { Component } from 'react';
import { currencyFormatter, numberFormatter } from '../helpers/Formatter';

import css from './components.module.css';

export default class DisabledInput extends Component {
  render() {
    const { description, value, percentage, color, font } = this.props;
    let newValue = '';
    percentage
      ? (newValue = `${currencyFormatter(value)} (${numberFormatter(
          percentage
        )}%)`)
      : (newValue = currencyFormatter(value));
    // if (percentage) {
    //   newValue = `${value} (${percentage}%)`;
    // } else {
    //   newValue = value;
    // }
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
}
