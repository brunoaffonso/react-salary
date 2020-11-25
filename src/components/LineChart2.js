import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
