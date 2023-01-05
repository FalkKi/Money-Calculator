import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import './mainDiagramm.scss';

const PieChartIncomes = ({ chartData }) => {
   return (
      <div className="chart-container">
         <Doughnut
            data={chartData}
            options={{
               plugins: {
                  title: {
                     display: true,
                     text: "USER INCOMES",
                     align: "center",
                     color: 'white',
                     font: { weight: 'bold', size: 24 }
                  },
                  legend: {
                     labels: {
                        color: 'white',
                        font: { weight: 'bold', size: 14 }
                     }
                  }
               }
            }}
         />
      </div>
   );
}
export default PieChartIncomes;