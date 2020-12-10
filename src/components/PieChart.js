import React from 'react';
import { Pie } from 'react-chartjs-2';
import css from './components.module.css';

export default function PieChart({ inss, irrf, liquid }) {
  const data = {
    labels: ['INSS', 'IRRF', 'Salário Líquido'],
    datasets: [
      {
        data: [`${inss}`, `${irrf}`, `${liquid}`],
        backgroundColor: ['#e67e22', '#c0392b', '#16a085'],
        hoverBackgroundColor: [
          'rgba(230, 126, 34, 0.8)',
          'rgba(192, 57, 43, 0.8)',
          'rgba(22, 160, 133, 0.8)',
        ],
      },
    ],
  };

  return (
    <div className={css.chart}>
      <Pie data={data} />
    </div>
  );
}
