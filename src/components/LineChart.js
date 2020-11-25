import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Resumo',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(80,200,100,0.4)',
      borderColor: 'rgba(80,200,100,0.4)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(80,200,100,0.4)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(80,200,100,0.4)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default class LineChart extends Component {
  render() {
    return (
      <div>
        <h2>Resumo</h2>
        <Line data={data} />
        {/* <Pie ref="chart" data={data} width={100} height={50} /> */}
      </div>
    );
  }

  componentDidMount() {
    // const { datasets } = this.refs.chart.chartInstance.data;
    // console.log(datasets[0].data);
    // console.log(datasets[1].data);
  }
}
