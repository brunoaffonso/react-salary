import React, { Component } from 'react';
import DisabledInput from './components/DisabledInput';
import { calculateDiscounts } from './helpers/Calculations';
import css from './app.module.css';
import PieChart from './components/PieChart';
import Bar from './components/Bar';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salary: '',
      baseINSS: '',
      inssDiscount: '',
      inssDiscountPercentage: '',
      baseIRRF: '',
      irrfDiscount: '',
      irrfDiscountPercentage: '',
      discounts: '',
      liquidSalary: '',
      totalDiscountsPercentage: '',
    };
  }

  handleSalary = (event) => {
    const discounts = calculateDiscounts(event.target.value);

    this.setState({
      salary: event.target.value,
      baseINSS: discounts.baseINSS,
      inssDiscount: discounts.inssDiscount,
      inssDiscountPercentage: discounts.inssDiscountPercentage,
      baseIRRF: discounts.baseIRRF,
      irrfDiscount: discounts.irrfDiscount,
      irrfDiscountPercentage: discounts.irrfDiscountPercentage,
      discounts: discounts.discounts,
      liquidSalary: discounts.liquidSalary,
      totalDiscountsPercentage: discounts.totalDiscountsPercentage,
    });
  };

  render() {
    const {
      salary,
      baseINSS,
      inssDiscount,
      inssDiscountPercentage,
      baseIRRF,
      irrfDiscount,
      irrfDiscountPercentage,
      liquidSalary,
      totalDiscountsPercentage,
    } = this.state;
    return (
      <div className={`container ${css.container}`}>
        <h2 className={css.titulo}>Cálculo de Salário</h2>
        <label>
          Salário
          <input
            className={css.input}
            type="number"
            step="100"
            onChange={this.handleSalary}
            value={salary}
          />
          <div className={css.flex}>
            <DisabledInput description={'Base INSS'} value={baseINSS} />
            <DisabledInput
              description={'Desconto INSS'}
              value={inssDiscount}
              percentage={inssDiscountPercentage}
              color={'#e67e22'}
              font={'bold'}
            />
            <DisabledInput description={'Base IRRF'} value={baseIRRF} />
            <DisabledInput
              description={'Desconto IRRF'}
              value={irrfDiscount}
              percentage={irrfDiscountPercentage}
              color={'#c0392b'}
              font={'bold'}
            />
          </div>
          <div>
            <DisabledInput
              description={'Salário Líquido'}
              value={liquidSalary}
              percentage={totalDiscountsPercentage}
              color={'#16a085'}
              font={'bold'}
            />
          </div>
          <div>
            <Bar
              inss={inssDiscountPercentage}
              irrf={irrfDiscountPercentage}
              liquid={totalDiscountsPercentage}
            />
          </div>
          <div className={css.flexCharts}>
            <PieChart
              inss={inssDiscountPercentage}
              irrf={irrfDiscountPercentage}
              liquid={totalDiscountsPercentage}
              inssValue={inssDiscount}
              irrfValue={irrfDiscount}
              liquidValue={liquidSalary}
            />
            {/*<LineChart />*/}
          </div>
        </label>
      </div>
    );
  }
}
