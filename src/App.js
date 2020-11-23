import React, { Component } from 'react';
import DisabledInput from './components/DisabledInput';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salary: '',
    };
  }
  render() {
    return (
      <div>
        <h2>Cálculo de Salário</h2>
        <label>
          Salário
          <input type="text" value={this.salary} />
          <DisabledInput description={'Base INSS'} />
          <DisabledInput description={'Desconto INSS'} />
          <DisabledInput description={'Base IRRF'} />
          <DisabledInput description={'Desconto IRRF'} />
          <DisabledInput description={'Salário Loquido'} />
        </label>
      </div>
    );
  }
}
