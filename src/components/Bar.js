import React, { Component } from 'react';

import css from './components.module.css';

export default class Bar extends Component {
  render() {
    const { inss, irrf, liquid } = this.props;
    return (
      <div className={css.row}>
        <div className={css.inss} style={{ width: `${inss}%` }}>
          Salário
        </div>
        <div className={css.irrf} style={{ width: `${irrf}%` }}>
          INSS
        </div>
        <div className={css.liquid} style={{ width: `${liquid}%` }}>
          IRRF
        </div>
      </div>
    );
  }
}
