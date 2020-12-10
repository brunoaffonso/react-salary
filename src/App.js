import React, { useState } from 'react';
import DisabledInput from './components/DisabledInput';
import { calculateDiscounts } from './helpers/Calculations';
import css from './app.module.css';
import PieChart from './components/PieChart';
import Bar from './components/Bar';

export default function App() {
  const [salary, setSalary] = useState('');
  const [baseINSS, setBaseINSS] = useState('');
  const [inssDiscount, setInssDiscount] = useState('');
  const [inssDiscountPercentage, setInssDiscountPercentage] = useState('');
  const [baseIRRF, setBaseIRRF] = useState('');
  const [irrfDiscount, setIrrfDiscount] = useState('');
  const [irrfDiscountPercentage, setIrrfDiscountPercentage] = useState('');
  // const [discounts, setDiscounts] = useState('');
  const [liquidSalary, setLiquidSalary] = useState('');
  const [totalDiscountsPercentage, setTotalDiscountsPercentage] = useState('');

  const handleSalary = (event) => {
    const discounts = calculateDiscounts(event.target.value);
    setSalary(event.target.value);
    setBaseINSS(discounts.baseINSS);
    setInssDiscount(discounts.inssDiscount);
    setInssDiscountPercentage(discounts.inssDiscountPercentage);
    setBaseIRRF(discounts.baseIRRF);
    setIrrfDiscount(discounts.irrfDiscount);
    setIrrfDiscountPercentage(discounts.irrfDiscountPercentage);
    // setDiscounts(discounts.discounts);
    setLiquidSalary(discounts.liquidSalary);
    setTotalDiscountsPercentage(discounts.totalDiscountsPercentage);
  };

  return (
    <div className={`container ${css.container}`}>
      <h2 className={css.titulo}>Cálculo de Salário</h2>
      <label>
        Salário
        <input
          className={css.input}
          type="number"
          step="100"
          onChange={handleSalary}
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
